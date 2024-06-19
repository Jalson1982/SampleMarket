import {useTranslation} from 'react-i18next';

export const useTranslations = () => {
  const {t, i18n} = useTranslation();
  return {translate: t, translator: i18n};
};
