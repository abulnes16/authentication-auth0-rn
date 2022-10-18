import React from 'react';
import {
  TextInput,
  Text,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { MainButton, Screen } from 'components';
import { colors, titleStyles } from 'theme';
import { useState } from 'react';
import { useAuth } from 'hooks';

const NativeLogin = () => {
  const { nativeLogin, loading } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    if (email.trim() === '') {
      Alert.alert('Validation error', 'Email must not be empty');
      return;
    }

    if (password.trim() === '') {
      Alert.alert('Validation error', 'Passwrod must not be empty');
      return;
    }

    nativeLogin(email, password);
  };

  return (
    <Screen>
      <Text style={titleStyles.title}>Sign up and Login with Auth0</Text>
      <TextInput
        keyboardType="email-address"
        onChangeText={text => setEmail(text)}
        style={styles.input}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        onChangeText={text => setPassword(text)}
        placeholder="Password"
        secureTextEntry={true}
      />
      {loading ? (
        <ActivityIndicator color={colors.primary} />
      ) : (
        <MainButton text="Sign up" onPress={onSubmit} />
      )}
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
