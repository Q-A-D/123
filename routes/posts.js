const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    { id: 1, title: 'Первый пост' },
    { id: 2, title: 'Второй пост' }
  ]);
});
router.get('/:id', (req, res) => {
  res.json({ id: req.params.id, title: 'Пост', content: 'Текст поста' });
});

router.post('/', (req, res) => {
  res.json({ message: 'Пост создан', data: req.body });
});

module.exports = router;