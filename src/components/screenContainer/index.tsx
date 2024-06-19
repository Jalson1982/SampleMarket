import {
  SafeAreaViewProps,
  SafeAreaView as RNSafeAreaView,
} from 'react-native-safe-area-context';

import {createBox} from '@shopify/restyle';

import {Theme} from '@theme';

export const ScreenContainer = createBox<Theme, SafeAreaViewProps>(
  RNSafeAreaView,
);
