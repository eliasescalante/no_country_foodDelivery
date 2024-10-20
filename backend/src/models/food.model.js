import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  imageUrl: { type: String },
  restaurant: { type: mongoose.Schema.Types.ObjectId, ref: "Restaurant" },
});

const Food = mongoose.model("foods", restaurantSchema);
export default Food;
