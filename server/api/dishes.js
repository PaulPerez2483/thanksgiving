const router = require("express").Router();
const { Dish, Person } = require("../../db");

// make sure to use router.get, router.post etc..., instead of app.get, app.post, or etc... in this file.
// see https://expressjs.com/en/api.html#router

router.get("/", async (req, res, next) => {
    Dish.findAll()
        .then(dishes => res.send(dishes))
        .catch(next)
});

module.exports = router;
