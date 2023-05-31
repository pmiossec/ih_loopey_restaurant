const express = require("express");
const hbs = require("hbs");

console.log("starting express...");
const app = express();

app.use(express.static('public')); // Make everything inside of public/ available

app.set("views", __dirname + "/views"); // creates an absolute path pointing to a folder called "views"

app.set("view engine", "hbs"); // set hbs package as template engine
hbs.registerPartials(__dirname + "/views/partials");

app.get("/", (request, res, next) => {
    console.log("home page...", request.path, request.baseUrl);
    res.render("home");
});

app.get("/contact", (request, res, next) => {
    // console.log("home page...", request.path, request.baseUrl);
    res.render("contact");
});


app.get("/pizzas/margarita", (request, res, next) => {
    const dataMargarita = {
        title: 'Pizza Margarita',
        price: 12,
        recommendedDrink: 'beer',
        imageFile: 'pizza-margarita.jpg',
        ingredients: ['mozzarella', 'tomato sauce', 'basilicum'],
      };

    res.render("product", dataMargarita);
});

app.get("/pizzas/veggie", (request, res, next) => {
  const dataVeggie = {
    title: 'Veggie Pizza',
    price: 15,
    recommendedDrink: 'power smoothie',
    imageFile: 'pizza-veggie.jpg',
    ingredients: ['cherry tomatoes', 'basilicum', 'Olives'],
  };

  res.render("product", dataVeggie);
});

app.get("/pizzas/seafood", (request, res, next) => {
  const dataSeafood = {
    title: 'Seafood Pizza',
    price: 20,
    recommendedDrink: 'white wine',
    imageFile: 'pizza-seafood.jpg',
    ingredients: ['tomato sauce', 'garlic', 'prawn'],
  };
  res.render("product", dataSeafood);
});

app.listen(4000, () => { console.log("Listening on http://localhost:4000/ ...")});
