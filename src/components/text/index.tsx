import React, {PropsWithChildren, memo} from 'react';
import {TextProps as RNTextProps} from 'react-native';

import {TextProps, createText} from '@shopify/restyle';

import {Theme, theme} from '@theme';

const RestyleText = createText<Theme>();

export const Text = memo(
  ({
    fontWeight,
    fontFamily,
    variant,
    ...props
  }: PropsWithChildren<TextProps<Theme>> & RNTextProps) => {
    const textVariantConfig = theme.textVariants[variant ?? 'defaults'];

    // @ts-ignore
    const currentFontWeight = fontWeight ?? textVariantConfig.fontWeight;

    return (
      <RestyleText
        {...props}
        variant={variant}
        fontWeight={currentFontWeight}
        fontFamily={fontFamily}
      />
    );
  },
);
