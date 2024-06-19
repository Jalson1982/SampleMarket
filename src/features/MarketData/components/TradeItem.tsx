import React from 'react';
import {Box, Text} from '@components';
import {AggTrade} from '@types';
import {useTranslations} from '@translations/useTranslations';

interface RenderItemProps {
  item: AggTrade;
}
export const TradeItem = ({item}: RenderItemProps) => {
  const {translate} = useTranslations();
  if (!item.E) {
    return null;
  }
  const date = new Date(item.E).toLocaleString();
  return (
    <Box>
      <Box backgroundColor="goldOrangeDark" mb="m" padding="xxs">
        <Box flexDirection="row">
          <Text color="alwaysWhite" variant="bold" mr="s">
            {translate('transaction_date_label')}:
          </Text>
          <Text variant="body" color="alwaysWhite">
            {date}
          </Text>
        </Box>
        <Box flexDirection="row">
          <Text color="alwaysWhite" variant="bold" mr="s">
            {translate('currency_label')}:
          </Text>
          <Text variant="body" color="alwaysWhite">
            {item.s}
          </Text>
        </Box>
        <Box flexDirection="row">
          <Text color="alwaysWhite" variant="bold" mr="s">
            {translate('quantity_label')}:
          </Text>
          <Text variant="body" color="alwaysWhite">
            {item.q}
          </Text>
        </Box>
        <Box flexDirection="row">
          <Text color="alwaysWhite" variant="bold" mr="s">
            {translate('price_label')}:
          </Text>
          <Text variant="body" color="alwaysWhite">
            {item.p}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
