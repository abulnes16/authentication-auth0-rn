module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          // This needs to be mirrored in tsconfig.json
          components: './src/components/index',
          theme: './src/theme/index',
          screens: './src/screens/index',
          navigation: './src/navigation/index',
          hooks: './src/hooks/index',
          modules: './src/modules/index',
          assets: './src/assets/index',
          types: './src/@types/index',
          store: "'./src/store/index",
        },
        extensions: ['.ts', '.tsx'],
      },
    ],
  ],
};
