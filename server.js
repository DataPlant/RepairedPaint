const express = require('express');
// const { Server } = require('socket.io');
// const io = require('socket.io')

const app = express();
const port = 4000;
app.use(express.static('public'))


app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});