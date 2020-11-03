const express = require("express");

//Create app
const app = express();
//Serve directories 
app.use(express.static("public"));
app.use(express.static("css"));


app.get("/", (request, response) => {
    //response.send("Hello from Express!");
    response.sendFile(`${__dirname}/index.html`);
});

app.get("/file1", (request, response) => {
    //response.send("Hello from Express!");
    response.sendFile(`${__dirname}/views/file1.html`);
});


// If process.env.PORT is not defined, port number 3000 is used
const listener = app.listen(process.env.PORT || 3000, () => {
    console.log(`Your app is listening on port ${listener.address().port}`);
});
