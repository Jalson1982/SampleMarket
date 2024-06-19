import React from 'react';
import {
  ActivityIndicator,
  TouchableOpacityProps as RNTouchableOpacityProps,
  TouchableOpacity as RNTouchableOpacity,
} from 'react-native';

import {
  useTheme,
  composeRestyleFunctions,
  createVariant,
  useRestyle,
  VariantProps,
  TextProps,
  createBox,
} from '@shopify/restyle';
import {Text} from '../text';
import {Theme} from '@theme';

export const TouchableOpacity = createBox<Theme, RNTouchableOpacityProps>(
  RNTouchableOpacity,
);

type ButtonVariantType = VariantProps<Theme, 'buttonVariants'>;
type RestyleProps = ButtonVariantType &
  React.ComponentProps<typeof TouchableOpacity>;

type PrefixedUnion<T, prefix extends string> = T extends 'defaults'
  ? never
  : T extends string
  ? `${prefix}${T}`
  : never;
type TextVariants = PrefixedUnion<keyof Theme['buttonVariants'], 'button_'>;

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  createVariant<Theme, 'buttonVariants'>({themeKey: 'buttonVariants'}),
]);

export type ButtonProps = {
  title?: React.ReactNode;
  disabled?: boolean;
  isLoading?: boolean;
  onPress: RNTouchableOpacityProps['onPress'];
  onPressIn?: RNTouchableOpacityProps['onPressIn'];
  textProps?: TextProps<Theme>;
} & RestyleProps;

export const Button = ({
  title,
  disabled = false,
  isLoading = false,
  onPress,
  variant = 'primary',
  textProps,
  ...rest
}: ButtonProps) => {
  const theme = useTheme<Theme>();

  /* @ts-ignore */
  const props = useRestyle(restyleFunctions, {
    variant,
    ...rest,
  });

  const textVariant = ('button_' + variant) as TextVariants;
  const textVariantConfig = theme.textVariants[textVariant];
  const textColor: string =
    'color' in textVariantConfig
      ? textVariantConfig.color
      : ('textPrimary' as const);

  return (
    <TouchableOpacity
      disabled={disabled || isLoading}
      onPress={onPress}
      accessibilityRole="button"
      opacity={disabled ? 0.5 : 1}
      {...props}>
      {isLoading ? (
        <ActivityIndicator size="small" color={textColor} />
      ) : (
        <>
          {typeof title === 'string' ? (
            <Text variant={textVariant} {...textProps}>
              {title}
            </Text>
          ) : (
            title
          )}
        </>
      )}
    </TouchableOpacity>
  );
};
