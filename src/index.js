const express = require("express");

//Importing routes
const albums = require("./Routes/albums");

const app = express();

app.use("/albums", albums);

app.listen(3000, () => {
    console.log("boa");
});
