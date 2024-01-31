import mongoose, { Document, Schema } from "mongoose";

interface FoodModel extends Document {
  name?: string;
  specialText?: string;
  deliveryFee?: number;
  cal?: number;
  price?: number;
  rating?: number;
  duration?: string;
  imagePath?: string;
  extras: string[];
}

const foodSchema = new Schema<FoodModel>({
  name: { type: String },
  specialText: { type: String },
  deliveryFee: { type: Number },
  cal: { type: Number },
  price: { type: Number },
  rating: { type: Number },
  duration: { type: String },
  imagePath: { type: String },
  extras: [{ type: String }],
});

const HotSpotFood = mongoose.model<FoodModel>("HotSpots", foodSchema);
const FeaturedFood = mongoose.model<FoodModel>("Featured", foodSchema);

export { HotSpotFood, FeaturedFood };
