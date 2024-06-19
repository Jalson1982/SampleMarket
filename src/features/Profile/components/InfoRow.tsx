import React from 'react';
import {Box, Text} from '@components';

interface InfoBoxProps {
  label: string;
  value: string | number;
}
export const InfoRow = ({label, value}: InfoBoxProps) => (
  <Box flexDirection="row" alignItems="center" padding="xxxs">
    <Text variant="bold" mr="xxxxs">
      {label}:{' '}
    </Text>
    <Text variant="body">{value}</Text>
  </Box>
);
