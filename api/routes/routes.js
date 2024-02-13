import express from "express";
import path from "path";
import Controller from "../controllers/controllers.js";

const router = express.Router();

router.route("/").get(Controller.getHomePage)
router.route("/signUpPage").get(Controller.getSignUpPage)
router.route("/loginPage").get(Controller.getLoginPage)
router.route("/homePage").get(Controller.getHomePage)


router.route("/public/styling/:signUp.css").get((req, res) => {
  res.sendFile(path.resolve() + `/public/styling/${req.params.signUp}.css`);
});

export default router;