import {LocationData} from '@types';
import {useEffect, useState, useCallback} from 'react';
import {Routes, useNavigation} from '@navigation';
import {useToastMessage} from '@hooks';
import {TabActions} from '@react-navigation/native';
import {searchIpAddress} from '@services';

export const useHome = () => {
  const {dispatch} = useNavigation();
  const {showErrorToastMessage} = useToastMessage();
  const [location, setLocation] = useState<LocationData | null>(null);
  const [ip, setIp] = useState<string>('');

  const getCurrentIp = useCallback(async () => {
    try {
      const response = await searchIpAddress(ip);
      setLocation(response);
    } catch (error) {
      console.error('Error fetching IP address', error);
      showErrorToastMessage('Error fetching IP address');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showErrorToastMessage]);

  useEffect(() => {
    getCurrentIp();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigateToProfile = (image: string) => {
    const jumpToAction = TabActions.jumpTo(Routes.Profile, {
      image,
      location,
    });

    dispatch(jumpToAction);
  };

  return {
    ip,
    setIp,
    location,
    getCurrentIp,
    navigateToProfile,
  };
};
