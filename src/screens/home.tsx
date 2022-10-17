import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { MainButton, Screen } from 'components';
import { titleStyles } from 'theme';
import { LOGO } from 'assets';

const Home = () => {
  return (
    <Screen>
      <Image source={LOGO} style={styles.logo} />
      <Text style={titleStyles.title}>Welcome to the app</Text>
      <Text style={titleStyles.subtitle}>You're logged with Auth0</Text>
      <MainButton text="Logout" />
    </Screen>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});

export default Home;
