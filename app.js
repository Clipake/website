const express = require("express");
const app = express();
const path = require("path");
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});
app.listen(3000, function () {
    console.log("Server is running on localhost:3000");
});

app.use(express.static(path.join(__dirname, 'public')));

/*
for (let i = 0; i < 5; i ++){
    const cloud = document.createElement('img');
    cloud.src = 'images/cloud.png';
    console.log("there is a cloud here")
    document.body.appendChild(cloud);
}
*/