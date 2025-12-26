import mongoose from "mongoose";

const clientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },

    image: {
      url: { type: String },
      public_url: { type: String },
      public_id: { type: String },
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export const Client = mongoose.model("Client", clientSchema);
