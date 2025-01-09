import { model, Schema } from "mongoose";
import { TProduct } from "./product.interface";

const productSchema = new Schema<TProduct>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tags: [String],
  variants: [
    {
      type: String,
      value: String,
    },
  ],
  inventory: {
    quantity: Number,
    inStock: Boolean,
  },
});

const ProductModel = model<TProduct>("Product", productSchema);
