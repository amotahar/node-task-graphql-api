import { Schema, model } from 'mongoose';

interface IProduct {
    id?: String,
    name: String,
    price: Float,
    description: String,
    image: String,
}

const BookSchema = new Schema<IProduct>({
    id: String,
    name: { type: String, required: true },
    price: { type: Float, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
});

const Book = model<IProduct>('product', ProductSchema);
export default Product;