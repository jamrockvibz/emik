const req = require('request');

class Emik {
  constructor(url) {
    this.url = url;
    this.headers = {};
  }

  fetch() {
    return new Promise((resolve, reject) => {
      try {
        req(this.url, (err, res, body) => {
          if (!err) {
            this.headers = res.headers;
            resolve({
              status: res.statusCode,
              body,
              headers: res.headers,
            });
          } else {
            reject({ err });
          }
        });
      } catch (e) {
        reject(e);
      }
    });
  }
}

module.exports = Emik;
