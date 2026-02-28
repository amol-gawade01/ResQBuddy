import TriageFlow from "../models/TriageFlow.js";
import Protocol from "../models/Protocol.js";   

// GET full triage system
const getTriageSystem = async (req, res) => {
  try {
    const flow = await TriageFlow.findOne().sort({ createdAt: -1 });
    const protocols = await Protocol.find({});

    if (!flow) {
      return res.status(404).json({ message: "Triage flow not found" });
    }

    res.status(200).json({
      version: flow.version,
      flow,
      protocols
    });

  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};


// GET only version (for offline sync check)
const getTriageVersion = async (req, res) => {
  try {
    const flow = await TriageFlow.findOne().sort({ createdAt: -1 });

    if (!flow) {
      return res.status(404).json({ message: "No version found" });
    }

    res.status(200).json({ version: flow.version });

  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

export { getTriageSystem, getTriageVersion };