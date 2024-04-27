import { Router } from "express";
import { deleteDonation, editDonation, getAllDonations, registerDonation } from "../controllers/Donation.controller.js";

export const DonationRouter = Router();

DonationRouter.post('/create-donation', registerDonation);
DonationRouter.get('/all-donations', getAllDonations);
DonationRouter.put('/edit-donation/:id', editDonation);
DonationRouter.delete('/delete-donation/:id', deleteDonation);