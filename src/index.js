const path = require('path');
const express = require('express');

// config
const app = express();
const port = process.env.PORT || 3000;
const publicDirectoryPath = path.join(__dirname, '../public');
app.use(express.static(publicDirectoryPath));

app.listen(port, () => console.log(`Server is running on port ${port}`));
