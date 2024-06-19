import React from 'react';
import {Box, Image} from '@components';
import {useRoute} from '@react-navigation/native';
import {Dimensions} from 'react-native';
import {RootRouteProps, Routes} from '@navigation';
import {InfoRow} from './components/InfoRow';
import {useTranslations} from '@translations/useTranslations';

const {width} = Dimensions.get('window');
export const Profile = () => {
  const {params} = useRoute<RootRouteProps<typeof Routes.Profile>>();
  const {image, location} = params || {};
  const {translate} = useTranslations();
  return (
    <Box flex={1}>
      {image && <Image source={{uri: image}} width={width} height={200} />}
      {location && (
        <>
          <InfoRow label={translate('ip_address')} value={location.ip} />
          <InfoRow label={translate('location')} value={location.city} />
          <InfoRow label={translate('timezone')} value={location.timezone} />
          <InfoRow label={translate('country')} value={location.country} />
          <InfoRow label={translate('region')} value={location.region} />
          <InfoRow
            label={translate('zip_code')}
            value={location.country_area}
          />
          <InfoRow label={translate('latitude')} value={location.latitude} />
          <InfoRow label={translate('longitude')} value={location.longitude} />
          <InfoRow label={translate('continent')} value={location.org} />
        </>
      )}
    </Box>
  );
};
