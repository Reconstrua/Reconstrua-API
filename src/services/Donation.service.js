import { Donation } from "../entities/Donation.entity.js";

export class DonationService {
    async createDonation(UserId, VoluntaryId, description) {
        try {
            await Donation.sync();

            const newDonation = Donation.create({ description, UserId, VoluntaryId });

            return newDonation
        } catch (error) {
            return error;
        }
    };
    async getAllDonation() {
        try {
            const allDonations = await Donation.findAll();

            return allDonations;
        } catch (error) {
            return error;
        }
    };
    async updateDonation(id, description) {
        try {
            const validateId = await Donation.findByPk(id);

            if (!validateId) {
                return `Donation not found!`
            }

            const updatedDonation = await Donation.update({ description: description }, { where: { id } });

            return updatedDonation;
        } catch (error) {
            return error;
        }
    };
    async deleteDonation(id) {
        try {
            const validateId = await Donation.findByPk(id);

            if (!validateId) {
                return `Donation not found!`
            }

            await Donation.destroy({ where: { id } })
            return 'Sucess!'
        } catch (error) {
            return error
        }
    }
}