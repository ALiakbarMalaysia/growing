import express from "express";

const router = express.Router();

export default router;

// Admin APIs
require("../controllers/Auth/controller");
require("../controllers/User/controller");
require("../controllers/file-uploader/controller");
require("../controllers/products/controller");
require("../controllers/food/controller");
