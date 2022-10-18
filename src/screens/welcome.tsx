import React from 'react';
import { StyleSheet, Text, Image } from 'react-native';
import { WelcomeScreenProps } from 'types';
import { MainButton, Screen } from 'components';
import { LOGO } from 'assets';
import { titleStyles } from 'theme';
import { useAuth } from 'hooks';

interface WelcomeProps extends WelcomeScreenProps {}

const Welcome: React.FC<WelcomeProps> = ({ navigation }) => {
  const { navigate } = navigation;
  const onNativeLogin = () => navigate('NativeLoginScreen');
  const { webLogin } = useAuth();

  return (
    <Screen>
      <Image source={LOGO} style={styles.logo} />
      <Text style={titleStyles.title}>
        Authentication with Auth0 and React Native
      </Text>
      <MainButton text="Browser based" onPress={webLogin} />
      <MainButton text="Native Login" onPress={onNativeLogin} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
});

export default Welcome;
