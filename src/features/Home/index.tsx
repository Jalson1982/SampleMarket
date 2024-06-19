import React from 'react';
import {Box} from '@components';
import {SearchBox} from './components/SearchBox';
import {useHome} from './useHome';
import {ImageSlider} from './components/ImageSlider';
import {InfoBox} from './components/InfoBox';

export const Home = () => {
  const {ip, location, setIp, getCurrentIp, navigateToProfile} = useHome();

  return (
    <Box flex={1} backgroundColor="primaryBackground">
      <SearchBox value={ip} onChangeText={setIp} getCurrentIp={getCurrentIp} />
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        height={60}
        backgroundColor="orange"
        paddingHorizontal="xxxs">
        <InfoBox label="IP Address" value={location?.ip} />
        <InfoBox label="Location" value={location?.city} />
        <InfoBox label="Timezone" value={location?.timezone} />
        <InfoBox label="Country" value={location?.org} />
      </Box>
      <ImageSlider navigateToProfile={navigateToProfile} />
    </Box>
  );
};
