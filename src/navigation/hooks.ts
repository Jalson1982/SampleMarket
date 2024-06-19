import {useCallback} from 'react';

import type {NavigationProp, ParamListBase} from '@react-navigation/native';
import {
  useNavigation as useBaseNavigation,
  StackActions,
} from '@react-navigation/native';

export const useNavigation = <T extends NavigationProp<ParamListBase>>() => {
  const {
    canGoBack,
    goBack: baseGoBack,
    getParent,
    ...navigation
  } = useBaseNavigation<T>();

  const goBack = useCallback(() => {
    if (canGoBack()) {
      baseGoBack();
    }
  }, [canGoBack, baseGoBack]);

  const parentGoBack = useCallback(() => {
    if (getParent()?.canGoBack()) {
      getParent()?.goBack();
    }
  }, [getParent]);

  const pop = useCallback(() => {
    navigation.dispatch(StackActions.pop());
  }, [navigation]);

  return {
    canGoBack,
    goBack,
    parentGoBack,
    pop,
    ...navigation,
  };
};
