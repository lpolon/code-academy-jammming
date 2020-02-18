/*
following spotify authorization guide to implicit grant flow for client-side auth
https://developer.spotify.com/documentation/general/guides/authorization-guide/
*/
import queryString from 'query-string';

// TODO: in an actual deploy, settings in spotify dev dashboard must be updated to redirect somewhere else besides localhost.

const clientId = '8e119fa686284aab8c64d8d77a50ee3d';
const redirectUri = 'http://localhost:3000/';

let userAccessToken = '';

export const Spotify = {
  endpoint: 'https://api.spotify.com/v1',

  getAccessToken() {
    if (userAccessToken !== '') {
      return userAccessToken;
    }

    const {
      access_token: accessToken,
      expires_in: expiresIn,
    } = queryString.parse(window.location.hash);

    console.log(accessToken);
    console.log(expiresIn);
    if (
      typeof accessToken !== 'undefined' &&
      typeof expiresIn !== 'undefined'
    ) {
      userAccessToken = accessToken;
      // set the access token to expire at the value for expiration time. Query strings returns seconds.
      window.setTimeout(() => {
        userAccessToken = '';
      }, expiresIn * 1000);
      // wipe params from URL, so the app doesn't try grabbing the access token after it has expired
      window.history.pushState('Access Token', null, '/');

      return userAccessToken;
    }

    if (userAccessToken === '' && typeof accessToken === 'undefined') {
      window.location.assign(
        `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`
      );
    }
  },

  async search(searchInput) {
    try {
      const response = await fetch(
        `${this.endpoint}/search?type=track&q=${searchInput}`,
        {
          headers: {
            Authorization: `Bearer ${userAccessToken}`,
          },
        }
      );
      const resObj = await response.json();
      console.log(resObj.tracks)
      return resObj;
    } catch (error) {
      console.log(error);
    }
  },
};

// Spotify.getAccessToken();
// console.log(userAccessToken);

// Spotify.search('red hot');