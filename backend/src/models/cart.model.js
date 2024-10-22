import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
  order: [
    {
      food: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "foods",
        required: true,
      },
      quantity: { type: Number, required: true },
    },
  ],
});

const Cart = mongoose.model('carts', cartSchema);

export default Cart;