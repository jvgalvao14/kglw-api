const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

//Importing routes
const albums = require("./Routes/albums");

app.use("/albums", albums);

app.listen(PORT, () => {
    console.log("Server up!");
});
