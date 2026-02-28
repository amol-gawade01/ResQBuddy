import mongoose from "mongoose";

const triageNodeSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ["yesno", "options"],
    required: true
  },
  yes: String,
  no: String,
  options: {
    type: Map,
    of: String
  }
}, { _id: false });

const triageFlowSchema = new mongoose.Schema({
  version: {
    type: String,
    required: true
  },
  startNode: {
    type: String,
    required: true
  },
  nodes: {
    type: Map,
    of: triageNodeSchema,
    required: true
  }
}, { timestamps: true });

const TriageFlow = mongoose.model("TriageFlow", triageFlowSchema);
export default TriageFlow;