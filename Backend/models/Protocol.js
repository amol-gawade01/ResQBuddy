import mongoose from "mongoose";

const stepSchema = new mongoose.Schema({
  instruction: {
    type: String,
    required: true
  },
  standard: String,
  noKitAlternative: String,
  warning: String
}, { _id: false });

const ageSpecificSchema = new mongoose.Schema({
  steps: [stepSchema]
}, { _id: false });

const protocolSchema = new mongoose.Schema({
  key: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  severity: {
    type: String,
    enum: ["low", "moderate", "critical"],
    required: true
  },
  ageAware: {
    type: Boolean,
    default: false
  },
  adult: ageSpecificSchema,
  child: ageSpecificSchema,
  steps: [stepSchema], // Used if ageAware = false
  noKitModeSupported: {
    type: Boolean,
    default: false
  },
  version: {
    type: String,
    default: "1.0"
  },
  reviewedBy: String
}, { timestamps: true });

const Protocol = mongoose.model("Protocol", protocolSchema);
export default Protocol;