import { useContext, useState } from 'react';
import { AUDIENCE, Auth0, DEFAULT_CONNECTION } from 'modules';
import { AuthContext, LoginMethods } from 'store';
import { Alert } from 'react-native';

const useAuth = () => {
  const { saveToken, isLoggedIn, token, loginMethod, clearSession } =
    useContext(AuthContext);

  const [loading, setLoading] = useState(false);

  const webLogin = async () => {
    try {
      const response = await Auth0.webAuth.authorize({});
      saveToken(response.accessToken, LoginMethods.web);
    } catch (error) {
      console.log({ error });
      Alert.alert(
        'Web Login failed',
        "We couldn't login the user, please try again",
      );
    }
  };

  const nativeLogin = async (email: string, password: string) => {
    setLoading(true);
    try {
      await Auth0.auth.createUser({
        connection: DEFAULT_CONNECTION,
        email,
        password,
      });

      const loginResult = await Auth0.auth.passwordRealm({
        password,
        username: email,
        audience: AUDIENCE,
        realm: DEFAULT_CONNECTION,
      });

      Alert.alert('Successfull Login', 'Welcome to the app', [
        {
          text: 'Ok',
          onPress: () =>
            saveToken(loginResult.accessToken, LoginMethods.native),
        },
      ]);
    } catch (error) {
      console.log({ error });
      Alert.alert(
        'Login failed',
        "We couldn't login the user, please try again",
      );
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    if (loginMethod === LoginMethods.web) {
      await Auth0.webAuth.clearSession();
    }

    clearSession();
  };

  return {
    token,
    isLoggedIn,
    nativeLogin,
    webLogin,
    logout,
    loading,
  };
};

export default useAuth;
