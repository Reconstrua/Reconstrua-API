import { DonationService } from "../Donation.service.js";
import { Donation } from "../../entities/Donation.entity.js";

const instanceDonationService = new DonationService();

test("Criando nova doação", async () => {
  const newUser = await instanceDonationService.createDonation("7613efd2-df8f-4908-ae64-c62f9c42ad77", "2c8deb37-409c-4b32-9018-fba1cbb0c524", "teste");
  expect(newUser).toHaveProperty("id");
});

afterEach(async () => {
  await Donation.destroy({
    where: {
      description: "teste"
    }
  });
});