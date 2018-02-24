var Nightmare = require("nightmare");
var nightmare = Nightmare({ show: true });
nightmare
  .goto(" insert heroku link ")
  .goto(" insert heroku link ")
  .click(" ")
  .goto(" insert heroku link ")
  .goto(" insert heroku link ")
  .end()
  .then(function(result) {
    console.log("The tests ran successfully.");
  })
  .catch(function(error) {
    console.error("Search failed:", error);
  });
