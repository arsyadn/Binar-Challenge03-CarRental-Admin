const { Router } = require('express');
const router = Router();
const security = require('./middlewares/AuthMiddleware');



router.get("/", security, (req, res) => {
    res.render("dashboard",{
        title: "Dashboard"
    });
});

router.post("/login", (req, res) => {
    res.cookie("token", "arsyad");
    res.render("dashboard",{
        title: "Login Page"
    });
});


module.exports = router;