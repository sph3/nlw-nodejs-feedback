import express from 'express';

import { prisma } from './prisma';

const app = express();
app.use(express.json());

app.post('/feedbacks', async (req, res) => {
  const { comment, screenshot, type } = req.body;
  const feedback = await prisma.feedback.create({
    data: {
      comment,
      screenshot,
      type,
    },
  });
  return res.status(201).json({ data: feedback });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
