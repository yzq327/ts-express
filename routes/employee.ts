import express from "express";
import bodyParser from "body-parser";

const router = express.Router();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get("/getEmployee", (req, res) => {
  res.json({
    flat: 1,
    msg: "No DB",
  });
});

router.post("/createEmployee", urlencodedParser, async (req, res) => {
  res.json({
    flat: 1,
    msg: "No DB",
  });
});

export default router;
