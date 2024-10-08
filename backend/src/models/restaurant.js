import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    menu: [{ name: String, price: Number }],
    location: { type: String, required: true },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

export default mongoose.model('Restaurant', restaurantSchema);