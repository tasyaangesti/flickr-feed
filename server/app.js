const express = require("express");
const Flickr = require("./controllers/flickr");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/view-photos", Flickr.getData);
app.get("/view-photos/search", Flickr.searchData);

app.listen(port, () => {
  console.log(`running on port ${port}`);
});
