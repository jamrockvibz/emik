const Emik = require('emik');

const emiz = new Emik('https://www.google.com');

emiz.fetch()
  .then(response => console.log(response))
  .catch(error => console.log(error))
