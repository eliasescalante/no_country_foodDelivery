import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    menu: [{ type: mongoose.Schema.Types.ObjectId, ref: "Food" }],
    address: { type: String, required: true },
    neighborhood: { type: String, required: true },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const Restaurant = mongoose.model("restaurants", restaurantSchema);
export default Restaurant;
