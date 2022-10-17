import React from 'react';
import { TextInput, Text, StyleSheet } from 'react-native';
import { MainButton, Screen } from 'components';
import { colors, titleStyles } from 'theme';

const NativeLogin = () => {
  return (
    <Screen>
      <Text style={titleStyles.title}>Sign up and Login with Auth0</Text>
      <TextInput
        keyboardType="email-address"
        style={styles.input}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
      />
      <MainButton text="Sign up" />
    </Screen>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 10,
    marginVertical: 5,
  },
});

export default NativeLogin;
