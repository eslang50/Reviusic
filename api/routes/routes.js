import express from "express";
import path from "path";
import Controller from "../controllers/controllers.js";

const router = express.Router();

router.route("/").get(Controller.getHomePage)

export default router;