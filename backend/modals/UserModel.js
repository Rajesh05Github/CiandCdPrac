import mongoose from "mongoose";

const AddressSchema = new mongoose.Schema({
  Address1: {
    type: String,
    required: true
  },
  Address2: {
    type: String,
    required: true
  },
  Address3: {
    type: String,
    required: true
  },
  pincode: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true,
    default: "India"
  }
});


const userSch = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  sex: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  address: AddressSchema 
});


export const userM = mongoose.model("User", userSch);
