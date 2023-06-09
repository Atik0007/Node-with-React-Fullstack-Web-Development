const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).send({ hi: 'there' });
});

app.post('/api/users', (req, res) => {
  console.log(req.body);
  res.status(200).send({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
