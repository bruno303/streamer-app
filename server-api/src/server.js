const express = require('express')
const app = express()
const cors = require('cors');
const videoRouter = require('./routes/VideoRouter');

const port = 5000;

app.use(cors());

app.use('/video', videoRouter);

app.listen(port, function () {
    console.log(`Listening on port ${port}!`)
})