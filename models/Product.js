import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },          // Product title
    name: { type: String, required: true },           // Product Name
    itemCode: { type: String },                       // Item code
    orderNumber: { type: Number },                    // Order number
    condition: { type: String },                      // Condition (new/used)

    description: { type: String },                    // Description
    price: { type: Number, required: true },          // Price
    countryOfOrigin: { type: String },                // Country of Origin

    image1Url: { type: String },
    image2Url: { type: String },
    image3Url: { type: String },

    videoLink: { type: String },                      // Youtube video or other link

    attributes: { type: Object },                     // Extra attributes (optional)
  },
  {
    timestamps: true, // adds createdAt and updatedAt fields
  }
);

export default mongoose.model("Product", productSchema);
