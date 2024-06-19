import {createTheme} from '@shopify/restyle';
import {LightTheme} from './lightTheme';
import {spacing} from './spacing';
import {TextVariants, ButtonVariants, BoxVariants} from './variants';

export const theme = createTheme({
  colors: {...LightTheme},
  spacing,
  textVariants: TextVariants,
  buttonVariants: ButtonVariants,
  boxVariants: BoxVariants,
  scrollViewVariants: {
    defaults: {
      flex: 1,
      backgroundColor: 'white',
    },
  },
});

export type Theme = typeof theme;

export const darkTheme: Theme = {
  ...theme,
  colors: {
    ...theme.colors,
  },
  scrollViewVariants: {
    defaults: {
      flex: 1,
      backgroundColor: 'primary',
    },
  },
};
