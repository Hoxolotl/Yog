const express = require('express')
const path = require('path');
const app = express()
const port = 3000

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/scene-elements.js', function(req, res) {
  res.sendFile(path.join(__dirname, '/scene-elements.js'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})