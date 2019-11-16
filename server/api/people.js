const router = require("express").Router();
const { Person, Dish } = require("../../db");
const path = require('path');

console.log(Person)
// make sure to use router.get, router.post etc..., instead of app.get, app.post, or etc... in this file.
// see https://expressjs.com/en/api.html#routers

router.get("/", async (req, res, next) => {
    Person.findAll()
        .then(plp => res.send(plp))
        .catch(next)

});

module.exports = router;
