import mongoose, { Schema, Document } from "mongoose";

export interface ProductInterface extends Document {
    productId: String;
    price: Number;
}

const ProductSchema: Schema = new Schema({
  productId: { type: String, required: true },
  price: { type: Number, required: true }
});

const Product = mongoose.model<ProductInterface>("Product", ProductSchema);
export default Product;