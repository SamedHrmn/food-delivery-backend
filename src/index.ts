import express from "express";
import mongoose from "mongoose";
import { config } from "./config/config";
import bodyParser from "body-parser";
import { HotSpotFood, FeaturedFood } from "./models/food";
import path from "path";

const router = express();

router.use(bodyParser.json());
router.use("/images", express.static(path.join(__dirname, "/images")));

router.post("/featured", async (req, res) => {
  const food = new FeaturedFood(req.body);
  const savedFood = await food.save();

  res.status(200).json(savedFood);
  console.log(savedFood.toJSON());
});

router.post("/hotspots", async (req, res) => {
  const food = new HotSpotFood(req.body);
  const savedFood = await food.save();

  res.status(200).json(savedFood);
  console.log(savedFood.toJSON());
});

router.get("/featured", async (req, res) => {
  const featuredFoods = await FeaturedFood.find();
  res.status(200).json(featuredFoods);
});

router.get("/hotspots", async (req, res) => {
  const hotspotFoods = await HotSpotFood.find();
  res.status(200).json(hotspotFoods);
});

router.listen(3000);

// Db connection
mongoose
  .connect(config.mongo.url, { retryWrites: true, w: "majority" })
  .then(() => {
    console.log("connected successfully");
  })
  .catch((error) => {
    console.log(error);
  });
