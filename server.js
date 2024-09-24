const express = require('express');
const cors = require('cors');
const eRouter = require('./routes/eRouter');

const app = express();

app.use(cors());
app.use('/', eRouter);

const PORT = 3333; // 포트 번호 변경
app.listen(PORT, async () => {
    console.log(`http://localhost:${PORT}`);
});
