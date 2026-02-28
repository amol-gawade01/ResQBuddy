import Routes from "express";
import {getTriageSystem, getTriageVersion} from "../controllers/triageController.js";

const router = Routes();

router.get("/triage-flow", getTriageSystem);
router.get("/triage-version", getTriageVersion);

export default router;  
