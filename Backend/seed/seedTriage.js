
import triageData from "./triageFlowData.js";
import TriageFlow from "../models/TriageFlow.js";



async function Triageseed() {
  await TriageFlow.deleteMany({});
  await TriageFlow.create(triageData);
  console.log("Triage Flow Seeded");
 
}

export default Triageseed;