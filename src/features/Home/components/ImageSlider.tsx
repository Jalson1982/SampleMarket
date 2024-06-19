import * as React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import Animated, {
  useDerivedValue,
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolate,
  SharedValue,
  Extrapolation,
} from 'react-native-reanimated';
import chroma from 'chroma-js';
import {Touchable} from '@components';
import {images} from '@utils';

const {width} = Dimensions.get('window');

const NUMBER_OF_IMAGES = 14;

const colors: string[] = chroma
  .scale(['#fafa6e', '#2A4858'])
  .mode('lch')
  .colors(NUMBER_OF_IMAGES);

interface DataItem {
  key: string;
  bg: string;
  image: string;
}

const data: DataItem[] = colors.map((color, index) => ({
  key: color,
  bg: color,
  image: images[index],
}));

const ITEM_WIDTH = width * 0.65;
const ITEM_HEIGHT = ITEM_WIDTH * 1.3;
const SPACING = 10;
const WITH_TRANSLATE_Y = true;

interface ItemProps {
  item: DataItem;
  index: number;
  scrollX: SharedValue<number>;
  navigateToProfile: (image: string) => void;
}

const Item: React.FC<ItemProps> = React.memo(
  ({item, index, scrollX, navigateToProfile}) => {
    const activeIndex = useDerivedValue(
      () => scrollX.value / (ITEM_WIDTH + SPACING),
    );

    const animatedStyle = useAnimatedStyle(() => {
      const rotateY = interpolate(
        activeIndex.value,
        [index - 1, index, index + 1],
        [-45, 0, 45],
        Extrapolation.CLAMP,
      );

      const translateX = interpolate(
        activeIndex.value,
        [index - 1, index, index + 1],
        [(-ITEM_WIDTH / 2) * Math.cos(45), 0, (ITEM_WIDTH / 2) * Math.cos(45)],
        Extrapolation.CLAMP,
      );

      const translateY = WITH_TRANSLATE_Y
        ? interpolate(
            activeIndex.value,
            [index - 1, index, index + 1],
            [
              (-ITEM_HEIGHT / 4) * Math.sin(45),
              0,
              (ITEM_HEIGHT / 4) * Math.sin(45),
            ],
            Extrapolation.CLAMP,
          )
        : 0;

      return {
        transform: [
          {perspective: ITEM_WIDTH},
          {rotateY: `${rotateY}deg`},
          {translateX},
          {translateY},
        ],
      };
    });

    return (
      <Touchable onPress={() => navigateToProfile(item.image)}>
        <Animated.Image
          source={{uri: item.image}}
          style={[
            styles.image,
            {backgroundColor: item.bg, marginRight: SPACING},
            animatedStyle,
          ]}
        />
      </Touchable>
    );
  },
);

interface ImageSliderProps {
  navigateToProfile: (image: string) => void;
}
export const ImageSlider = ({navigateToProfile}: ImageSliderProps) => {
  const scrollX = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler({
    onScroll: event => {
      scrollX.value = event.contentOffset.x;
    },
  });

  return (
    <Touchable flex={1} justifyContent="center" alignItems="center" padding="m">
      <Animated.FlatList
        data={data}
        keyExtractor={item => item.key}
        horizontal
        onScroll={onScroll}
        scrollEventThrottle={16}
        snapToInterval={ITEM_WIDTH + SPACING}
        contentContainerStyle={{
          paddingRight: width - (ITEM_WIDTH + SPACING),
          paddingVertical: SPACING,
        }}
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        renderItem={({item, index}) => (
          <Item
            item={item}
            index={index}
            scrollX={scrollX}
            navigateToProfile={navigateToProfile}
          />
        )}
      />
    </Touchable>
  );
};

const styles = StyleSheet.create({
  image: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    resizeMode: 'cover',
    borderRadius: 32,
  },
});
