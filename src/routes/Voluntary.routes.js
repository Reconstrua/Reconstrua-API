import { Router } from "express";
import {deleteVoluntary, getAllVoluntaries, registerVoluntary, updateVoluntary} from "../controllers/Voluntary.controller.js"

export const VoluntaryRouter = Router();

VoluntaryRouter.get("/voluntary", getAllVoluntaries)
VoluntaryRouter.post("/create-voluntary", registerVoluntary)
VoluntaryRouter.delete("/delete-voluntary/:id", deleteVoluntary)
VoluntaryRouter.put("/update-voluntary/:id", updateVoluntary)