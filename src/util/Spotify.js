/*
following spotify authorization guide to implicit grant flow for client-side auth
https://developer.spotify.com/documentation/general/guides/authorization-guide/
*/
import queryString from 'query-string';

// TODO: in an actual deploy, settings in spotify dev dashboard must be updated to redirect somewhere else besides localhost.

const clientId = '8e119fa686284aab8c64d8d77a50ee3d';
const redirectUri = 'http://polon-spotify-playlist.surge.sh/';

let userAccessToken = '';

export const Spotify = {
  endpoint: 'https://api.spotify.com/v1',

  getAccessToken() {
    if (userAccessToken) return;

    const {
      access_token: accessToken,
      expires_in: expiresIn,
    } = queryString.parse(window.location.hash);
    if (
      typeof accessToken !== 'undefined' &&
      typeof expiresIn !== 'undefined'
    ) {
      userAccessToken = accessToken;
      window.setTimeout(() => {
        userAccessToken = '';
      }, expiresIn * 1000);
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
      // TODO: resObj returns undefined when there is no userAccessToken
      const { items } = resObj.tracks;
      if (items.length === 0) {
        return [];
      } else {
        return items.map((item) => {
          const {
            id,
            name,
            artists: [{ name: artistName }],
            album: { name: albumName },
            uri,
          } = item;
          return { id, name, artistName, albumName, uri };
        });
      }
    } catch (error) {
      console.log(error);
    }
  },

  async savePlaylist(playlistName, playlistUriArr) {
    if (
      typeof playlistName === 'undefined' ||
      playlistName === '' ||
      playlistUriArr.length === 0
    )
      return;
    try {
      const response = await fetch(`${this.endpoint}/me`, {
        headers: {
          Authorization: `Bearer ${userAccessToken}`,
        },
      });
      const userProfile = await response.json();

      console.log('userprofile ok:', userProfile.id);

      // create playlist:
      const response2 = await fetch(
        `${this.endpoint}/users/${userProfile.id}/playlists`,
        {
          method: 'POST',
          body: JSON.stringify({ name: playlistName }),
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userAccessToken}`,
          },
        }
      );
      const newPlaylist = await response2.json();

      const response3 = await fetch(
        `${this.endpoint}/users/${userProfile.id}/playlists/${newPlaylist.id}/tracks`,
        {
          method: 'POST',
          body: JSON.stringify({ uris: playlistUriArr }),
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userAccessToken}`,
          },
        }
      );
      const updatedPlaylist = await response3.json();
      console.log('success!', updatedPlaylist);
    } catch (error) {
      console.log(error);
    }

    // TODO: New playlist link
    // https://open.spotify.com/playlist/ URI
  },
};
