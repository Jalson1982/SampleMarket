import React from 'react';
import {Box, Text} from '@components';
import {Dimensions} from 'react-native';

const width = Dimensions.get('window').width * 0.25;

interface InfoBoxProps {
  label: string;
  value: string | number | null | undefined;
}
export const InfoBox = ({label, value}: InfoBoxProps) => {
  return (
    <Box justifyContent="center" alignItems="center" width={width} height={60}>
      <Text variant="bold">{label}</Text>
      <Text variant="caption" numberOfLines={1}>
        {value || '-'}
      </Text>
    </Box>
  );
};
