import { serverUrl } from '$lib/config/env';
import type {User, JwtToken} from '$lib/model/auth.model';

import { request } from '$lib/ninja/utils/request';

interface AuthService {
  fetchAuthenticatedUsername: () => Promise<string | undefined>;
  fetchAuthenticatedUserDetails: () => Promise<User | undefined>;
  login: (username: string, password: string, rememberMe: boolean) => Promise<JwtToken | null>;

}

const authService: AuthService = {
  fetchAuthenticatedUsername: async (): Promise<string | undefined> => {
    try {

      const response = await request(`${serverUrl}/api/authenticate`, 'GET', undefined, {}, false)

      if (!response.ok) {
        throw new Error('User is not authenticated');
      }

      return response.text();
    } catch (err) {
      console.error(err);
      return undefined;
    }
  },

  fetchAuthenticatedUserDetails: async (): Promise<User | undefined> => {
    try {
      const response = await request(`${serverUrl}/api/account`)

      console.log("response", response);

      if (!response) {
        throw new Error('User is not authenticated');
      }

      return response;
    } catch (err) {
      console.error(err);
      return undefined;
    }
  },

  login: async (username: string, password: string, rememberMe: boolean): Promise<JwtToken| null> => {

    const body = JSON.stringify({username, password, rememberMe});

    try {
      console.log("body", body);
      const response = await fetch(`${serverUrl}/api/authenticate`, {
        method: 'POST',
        body,
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        console.log("error", response);
        throw new Error('User is not authenticated');
      }

      console.log("response", response);

      return response.json();
    } catch (err) {
      console.error(err);
      return null;
    }
  }
}

export default authService;