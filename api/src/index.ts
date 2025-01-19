import express from 'express';

const app = express();

const port = 3001;
app.listen(port, () => {
  console.log(`🔥 Server is runnig on http://localhost:${port}`);
});
