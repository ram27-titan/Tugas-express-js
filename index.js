const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hello World!<h1>');
});

app.get('/about', (req, res) => {
  res.send('<h1>ini halaman about<h1>');
});

app.get('/json', (req, res) => {
  res.json({
    nama: 'Ari Alamsyah',
    kelas: 'MERN Stack',
    instansi: 'Eduwork',
  });
});

app.use('/', (req, res) => {
  res.status(404);
  res.send('<h1>Page not found 404<h1>');
});

app.listen(process.env.PORT || 3000);
