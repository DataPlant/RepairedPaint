const express = require('express');
// const { Server } = require('socket.io');
// const io = require('socket.io')

const app = express();
app.use('/public', express.static('/public'))


app.listen(process.env.PORT || '0.0.0.0', () => {
  console.log(`Server started`);
});