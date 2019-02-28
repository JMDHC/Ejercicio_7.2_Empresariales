const fetch = require("node-fetch");

const checkServer = (url) => {
  return new Promise((resolve, reject) => { 
    fetch(url)
      .then(response => resolve(`Estado del Servidor: ${response.status === 200 ? "OK" : "NOT OK"}`))
      .catch(() => reject(`Error al localizar URL`));
  });
}

checkServer('https://es.wikipedia.org/wiki/Node.js')
  .then(result => console.log(result))
  .catch(e => console.log(e));