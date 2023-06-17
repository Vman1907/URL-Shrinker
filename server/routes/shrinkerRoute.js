const { Router } = require("express");
const shrinkerController = require("../controller/shrinker");

const router = Router();

router.get("/", shrinkerController.home);
router.post("/shortUrl", shrinkerController.shrinkUrl);
router.get("/showAllUrl", shrinkerController.showAllUrl);
router.get("/:url", shrinkerController.redirectUrl);
router.post('/deleteUrl/:id', shrinkerController.deleteUrl)

module.exports=router;
