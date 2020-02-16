/*
following spotify authorization guide to implicit grant flow for client-side auth
https://developer.spotify.com/documentation/general/guides/authorization-guide/
*/
import queryString from 'query-string';

// TODO: in an actual deploy, settings in spotify dev dashboard must be updated to redirect somewhere else besides localhost.

import { clientId, redirectUri } from './clientId';

let userAccessToken = '';

export const Spotify = {
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
};