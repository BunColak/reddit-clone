import axios from 'axios';

export function refreshToken() {
  return new Promise((resolve, reject) => {
    axios
      .post(
        'https://www.reddit.com/api/v1/access_token',
        'grant_type=refresh_token&refresh_token=31648199-N56e7qqYRvu96MLryF_k45CZaWo',
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
        const access_token = request.data.access_token;
        resolve(access_token);
      })
      .catch(error => {
        reject(error);
      });
  });
}
