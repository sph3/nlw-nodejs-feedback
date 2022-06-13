import express from 'express';

import { prisma } from './prisma';

const app = express();
app.use(express.json);

app.post('/feedbacks', (req, res) => {
  const { comment, screenshot, type } = req.body;
  prisma.feedback.create({
    data: {
      comment,
      screenshot,
      type,
    },
  });
  res.send('Hello, World!');
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
