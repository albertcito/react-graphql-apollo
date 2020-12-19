import {
  createClient,
  dedupExchange,
  cacheExchange,
  fetchExchange,
  errorExchange,
  CombinedError,
} from 'urql';

import constants from 'config/constants';
import storage from 'util/Storage';

const onError = (error: CombinedError) => {
  if (error.response?.status === 401) {
    storage.logout();
    /**
    * TO DO:
    * - Reset all the cache and global status.
    * - Remove user from global session -> It will display private area.
    * - Remove redirect.
    */
    window.location.href = '/';
  }
};

const client = () => createClient({
  url: `${constants.urlServer}/graphql`,
  fetchOptions: () => {
    const token = storage.getToken();
    return {
      headers: { authorization: token ? `Bearer ${token}` : '' },
      withCredentials: true,
    };
  },
  exchanges: [
    dedupExchange,
    cacheExchange,
    errorExchange({ onError }),
    fetchExchange,
  ],
});

export default client;
