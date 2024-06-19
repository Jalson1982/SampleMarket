module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@translations': './src/translations',
          '@assets': './src/assets',
          '@theme': './src/theme',
          '@hooks': './src/hooks',
          '@utils': './src/utils',
          '@store': './src/store/index',
          '@navigation': './src/navigation',
          '@components': './src/components',
          '@features': './src/features',
          '@types': './src/types',
          '@environment': './src/environment',
          '@lib': './src/lib',
          '@services': './src/services',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
