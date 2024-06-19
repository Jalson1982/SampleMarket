import FImage, {FastImageProps} from 'react-native-fast-image';

import {createBox} from '@shopify/restyle';

import {Theme} from '@theme';

export const Image = createBox<Theme, FastImageProps>(FImage);
