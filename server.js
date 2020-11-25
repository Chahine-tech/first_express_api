const express = require('express');
const app = express();
const items = require('./routes/item');

app.use("/api/items", items);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`My app listening on port ${port}`);
})
