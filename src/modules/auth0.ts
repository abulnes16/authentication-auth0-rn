import Auth0 from 'react-native-auth0';
import Config from 'config';

const auth0 = new Auth0({
  domain: Config.AUTH0_DOMAIN,
  clientId: Config.AUTH0_CLIENT_ID,
});

export const DEFAULT_CONNECTION = 'Username-Password-Authentication';
export const AUDIENCE = `https://${Config.AUTH0_DOMAIN}/api/v2/`;

export default auth0;
