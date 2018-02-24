var Nightmare = require("nightmare");
var nightmare = Nightmare({ show: true });
nightmare
  .goto(" ")
  .goto(" ")
  .click(" ")
  .goto(" ")
  .goto(" ")
  .end()
  .then(function(result) {
    console.log("The tests ran successfully.");
  })
  .catch(function(error) {
    console.error("Search failed:", error);
  });
