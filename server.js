const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname)));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
