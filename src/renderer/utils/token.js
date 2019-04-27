import axios from 'axios';

export function refreshToken(refresh_token) {
  return new Promise((resolve, reject) => {
    axios
      .post('https://www.reddit.com/api/v1/access_token', 'grant_type=refresh_token&refresh_token=' + refresh_token, {
        auth: {
          username: 'JKyBiYvIX1CjWQ'
        },
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(request => {
        const access_token = request.data.access_token;
        resolve(access_token);
      })
      .catch(error => {        
        reject(error);
      });
  });
}

export function accessToken(code) {
  return new Promise((resolve, reject) => {
    axios
      .post(
        'https://www.reddit.com/api/v1/access_token',
        'grant_type=authorization_code&code=' + code + '&redirect_uri=http://localhost/reddit_auth',
        {
          auth: {
            username: 'JKyBiYvIX1CjWQ'
          },
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      )
      .then(request => {
        resolve(request.data);
      })
      .catch(error => {
        reject(error);
      });
  });
}
