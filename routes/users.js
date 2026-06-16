const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    { id: 1, name: 'Иван' },
    { id: 2, name: 'Петр' }
  ]);
});

router.get('/:id', (req, res) => {
  res.json({ id: req.params.id, name: 'Пользователь' });
});

router.post('/', (req, res) => {
  res.json({ message: 'Пользователь создан', data: req.body });
});

module.exports = router;