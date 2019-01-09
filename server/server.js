const express = require('express');
const path = require('path');


// settings
const app = express();
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public');
app.use(express.static(publicPath));





app.listen(port, () => {
    console.log(`Server up & running on ${port}`);
});