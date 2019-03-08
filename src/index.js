const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("welcome jr-cms-api");
});

app.listen(3000, () => console.log(`app listen on port 3000`));
