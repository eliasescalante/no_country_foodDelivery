import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  category: { type: String, enum: ["carnes", "pastas", "minutas", "postres"], },
  imageUrl: { type: String },
  stock: { type: Number },
  restaurant: { type: mongoose.Schema.Types.ObjectId, ref: "Restaurant" },
});

const Food = mongoose.model("foods", foodSchema);
export default Food;
