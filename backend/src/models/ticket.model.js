import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    address: {type: String}, 
    restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true },
    items: [{ name: String, price: Number, quantity: Number }],
    total: { type: Number, required: true },
    status: { type: String, enum: ['pendiente', 'en camino', 'entregado'], default: 'pendiente' },
    delivery: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Repartidor
    shippingTax: { type: Number, required: true}

}, { timestamps: true });

const Ticket = mongoose.model('Order', orderSchema);
export default Ticket;