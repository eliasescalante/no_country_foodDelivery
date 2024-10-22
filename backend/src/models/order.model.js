import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true },
    items: [{ name: String, price: Number, quantity: Number }],
    total: { type: Number, required: true },
    status: { type: String, enum: ['pendiente', 'en camino', 'entregado'], default: 'pendiente' },
    assignedDriver: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Repartidor
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);
export default Order;