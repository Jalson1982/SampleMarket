import React from 'react';

import {Box, BoxProps} from '../box';

export const Divider = (props: BoxProps) => {
  return (
    <Box
      height={1}
      width="100%"
      backgroundColor="borderOpacityDark"
      {...props}
    />
  );
};
