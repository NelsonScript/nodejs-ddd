import {
  Schema
} from 'mongoose';
import mongoose from 'mongoose';

export const CustomerSchema = new Schema({
  id: { type: mongoose.Schema.Types.ObjectId, required: false },
  documentType: String,
  name: String,
  numberId: Number,
});

const customerModel = mongoose.model("customers", CustomerSchema);
export default customerModel;