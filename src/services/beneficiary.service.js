import { Beneficiary } from "../entities/Beneficiary.entity.js";
import { ConflictError, NotFoundError } from "../helpers/error/apiErros.js";

export class BeneficiaryService {
  async registerBeneficiary(beneficiaryData) {
    await Beneficiary.sync();

    const email = beneficiaryData.email;
    const beneficiaryExists = await Beneficiary.findOne({ where: { email } });
    if (beneficiaryExists) {
      throw new ConflictError("Beneficiado já cadastrado.");
    }

    const phone = beneficiaryData.phone;
    const beneficiaryPhoneExists = await Beneficiary.findOne({ where: { phone } });
    if (beneficiaryPhoneExists) {
      throw new ConflictError("Número de telefone já cadastrado.");
    }

    await Beneficiary.create(beneficiaryData);
  }

  async getAllBeneficiaries() {
    const beneficiariesFound = await Beneficiary.findAll();

    if (beneficiariesFound.length === 0) {
      throw new NotFoundError("Beneficiados não encontrados.");
    }

    return beneficiariesFound;
  }

  async getBeneficiaryById(id) {
    const beneficiaryFound = await Beneficiary.findByPk(id);

    if (!beneficiaryFound) {
      throw new NotFoundError("Beneficiado não encontrado.");
    }

    return beneficiaryFound;
  }

  async updateBeneficiary(id, body) {
    const updatedBeneficiary = await Beneficiary.update(body, { where: { id } });

    if (updatedBeneficiary[0] === 0) {
      throw new NotFoundError("Beneficiado não encontrado.");
    }
  }

  async deleteBeneficiary(id) {
    const deletedBeneficiaryCounter = await Beneficiary.destroy({ where: { id } });

    if (deletedBeneficiaryCounter <= 0) {
      throw new NotFoundError("Beneficiado não encontrado.");
    }
  }
}
