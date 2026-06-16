const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;


app.use(express.json());

const usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');

app.use('/users', usersRouter);
app.use('/posts', postsRouter);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.json({ message: 'Express сервер работает!' });
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});