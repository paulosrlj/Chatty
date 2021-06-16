import express from 'express';

import './database';

const app = express()

app.get('/', (req, res) => {
  return res.send("Hello World")
})

app.listen(3333, () => console.log("Server is running on port 3333"));