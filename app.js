const express = require('express');
const app = express();
const port = 3000;

const main = require('./routers/main');

app.use(express.static('public'));

app.use('/', main);

app.listen(port, () => {
  console.log(`Servidor funcionando en el puerto ${port}`);
})

