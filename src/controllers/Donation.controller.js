import { DonationService } from "../services/Donation.service.js";

const instanceDonationService = new DonationService();

export const registerDonation = async (req, res) => {
    const { UserId, VoluntaryId, description } = req.body;

    const newDonation = await instanceDonationService.createDonation(UserId, VoluntaryId, description);

    return res.status(201).json({ newDonation });
};

export const getAllDonations = async (req, res) => {
    const { } = req.body;

    const allDonations = instanceDonationService.getAllDonation();

    return res.status(200).json({ allDonations });
};

export const editDonation = async (req, res) => {
    const { id } = req.params;
    const { description } = req.body;

    const editedDonation = await instanceDonationService.updateDonation(id, description);

    return res.status(200).json({ editedDonation });
};

export const deleteDonation = async (req, res) => {
    const { id } = req.params;

    const deletedDonation = await instanceDonationService.deleteDonation(id);

    return res.status(200).json({deletedDonation});
};