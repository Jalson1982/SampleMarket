import {RouteProp} from '@react-navigation/native';
import {LocationData} from '@types';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends ScreensParams {}
  }
}

export type ScreensParams = {
  Home: undefined;
  MarketData: undefined;
  Profile: {image: string; location: LocationData};
};

export type RootRouteProps<ScreenName extends keyof ScreensParams> = RouteProp<
  ScreensParams,
  ScreenName
>;

export type Props = {};
