require("dotenv").config();
var db = require("./models");

async function main () {
    await db.sequelize.sync();
    console.log("Database is ready. Running tests: ");
    await testRestaurantFindOne();
    await testRatingsFindAll();
    return null;
}

main().then(() => {
    console.log("Tests are finished.");
});


async function testRestaurantFindOne () {
    let p = db.Restaurants.findOrCreate({ where: { place_name: "Wawa4" }, defaults: {place_last_visit_date: '2020-01-03', place_rank: 1}});
    let result = await p;
    console.log("Test one result: " + JSON.stringify(result));
    console.assert(result !== null, "result was null");
}

async function testRatingsFindAll () {
    let p = db.Ratings.findAll({ where: { restID: "2" }});
    let result = await p;
    console.log("Test one result: " + JSON.stringify(result));
    console.assert(result !== null, "result was null");
}