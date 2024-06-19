import React from 'react';
import Animated, {Layout, ZoomIn, ZoomOut} from 'react-native-reanimated';

export const RenderCell = (props: any) => (
  <Animated.View
    {...props}
    layout={Layout.springify()}
    entering={ZoomIn}
    exiting={ZoomOut}
  />
);
