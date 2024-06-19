import React, {useCallback} from 'react';
import {Box} from '@components';
import {useMarketData} from './useMarketData';
import Animated from 'react-native-reanimated';
import {AggTrade} from '@types';
import {TradeItem} from './components/TradeItem';
import {RenderCell} from './components/RenderCell';

export const MarketData = () => {
  const {tradeData} = useMarketData();

  const renderItem = useCallback(({item}: {item: AggTrade}) => {
    return <TradeItem item={item} />;
  }, []);

  return (
    <Box flex={1} justifyContent="center">
      <Animated.FlatList
        data={tradeData}
        renderItem={renderItem}
        CellRendererComponent={RenderCell}
        keyExtractor={(item, index) => `${item.E}-${index}`}
      />
    </Box>
  );
};
