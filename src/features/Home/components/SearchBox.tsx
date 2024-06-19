import {Box, Text, Touchable} from '@components';
import {useTheme} from '@theme';
import {useTranslations} from '@translations/useTranslations';
import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

interface SearchBoxProps {
  value: string;
  onChangeText: (text: string) => void;
  getCurrentIp: () => void;
}
export const SearchBox = ({
  value,
  onChangeText,
  getCurrentIp,
}: SearchBoxProps) => {
  const {colors} = useTheme();
  const {translate} = useTranslations();
  return (
    <Box backgroundColor="blackPrimary" p="huge">
      <Box flexDirection="row" alignItems="center">
        <TextInput
          onChangeText={onChangeText}
          value={value}
          style={[
            styles.searchBox,
            {backgroundColor: colors.inputGray, color: colors.silver},
          ]}
          placeholder={translate('search_box_label')}
        />
        <Touchable
          onPress={getCurrentIp}
          backgroundColor="gray"
          width={30}
          borderTopRightRadius={10}
          borderLeftColor="alwaysBlack"
          height={46}
          borderWidth={1}
          justifyContent="center"
          alignItems="center"
          borderBottomRightRadius={10}>
          <Text>{'>'}</Text>
        </Touchable>
      </Box>
      <Text variant="body" color="silver" mt="l" textAlign="center">
        {translate('check_ip_label')}
      </Text>
    </Box>
  );
};

const styles = StyleSheet.create({
  searchBox: {
    backgroundColor: 'white',
    padding: 10,
    height: 44,
    width: '95%',
    borderColor: 'black',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
});
