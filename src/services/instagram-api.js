const CLIENT_ID = '6edf7a5d0f7b4c058d220817047799da';
const API_HOST = 'https://api.instagram.com';

let token = localStorage.INSTA_TOKEN || '';
const REDIRECT_URI = `${window.location.origin}/oauth`;

const API = {
  login() {
    window.location.replace(
      `${API_HOST}/oauth/authorize/?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token`
    );
  },
  hasAuth() {
    return !!token;
  },
  getPhotos() {
    if (!token) {
      throw new Error('Token is not yet set');
    }
    const getUrl = photoObj => photoObj.images.standard_resolution.url;
    return fetch(
      `${API_HOST}/v1/users/self/media/recent/?access_token=${token}`
    )
      .then(resp => resp.json())
      .then(respBody => respBody.data)
      .then(data =>
        data.map(entry => ({
          id: entry.id,
          urls: (entry.carousel_media || [entry]).map(getUrl)
        }))
      );
  },
  setToken(newToken) {
    token = newToken;
    localStorage.INSTA_TOKEN = newToken;
  }
};
export default API;
