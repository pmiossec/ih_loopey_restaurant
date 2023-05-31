const express = require("express");

console.log("starting express...");
const app = express();

app.use(express.static('public')); // Make everything inside of public/ available

app.get("/", (request, response, next) => {
    console.log("home page...", request.path, request.baseUrl);
    response.sendFile(__dirname + `/views/home.html`);
});

app.get("/contact", (request, response, next) => {
    // console.log("home page...", request.path, request.baseUrl);
    response.sendFile(__dirname + "/views/contact.html");
});

app.get("/pizzas/margarita", (request, response, next) => {
    response.send("page for margarita");
});

app.get("/pizzas/veggie", (request, response, next) => {
    response.send("page for veggie");
});

app.get("/pizzas/seafood", (request, response, next) => {
    response.send("page for seafood");
});

app.listen(4000, () => { console.log("Listening on http://localhost:4000/ ...")});
