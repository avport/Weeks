"use strict"; 
//need pg module
const pg = require("pg");
//inject into every route
const pool = new pg.Pool({
    user:"postgres", 
    password: "passwordport",
    host: "localhost", 
    port: 5432, 
    database: "ExpressShopDB", 
    ssl: false
}); 

module.exports = pool; 