
import Protocol from "../models/Protocol.js";
import protocolData from "./protocolSeedData.js";



async function Protocolseed() {
  await Protocol.deleteMany({});
  await Protocol.insertMany(protocolData);
  console.log("Protocols Seeded");
 
}

export default Protocolseed;