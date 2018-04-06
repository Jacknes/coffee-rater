const coffeeRoutes = require('./coffee-routes');
module.exports = function(app, db) {
  coffeeRoutes(app, db);
};