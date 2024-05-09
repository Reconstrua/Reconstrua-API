import { Company } from "../entities/Company.entity.js";
import { ConflictError, NotFoundError } from "../helpers/error/apiErros.js";

export class CompanyService {
  async registerCompany(companyData) {
    await Company.sync();

    const email = companyData.email;
    const companyExists = await Company.findOne({ where: { email } });
    if (companyExists) {
      throw new ConflictError("Empresa já cadastrada.");
    }

    const phone = companyData.phone;
    const companyPhoneExists = await Company.findOne({
      where: { phone },
    });
    if (companyPhoneExists) {
      throw new ConflictError("Número de telefone já cadastrado.");
    }

    await Company.create(companyData);
  }

  async getAllCompanies() {
    const companiesFound = await Company.findAll();
    if (companiesFound.length === 0) {
      throw new NotFoundError("Empresas não encontradas.");
    }

    return companiesFound;
  }

  async getCompanyById(id) {
    const companyFound = await Company.findByPk(id);

    if (!companyFound) {
      throw new NotFoundError("Empresa não encontrada.");
    }

    return companyFound;
  }

  async updateCompany(id, body) {
    const updatedCompany = await Company.update(body, {
      where: { id },
    });

    if (updatedCompany[0] === 0) {
      throw new NotFoundError("Empresa não encontrada.");
    }
  }

  async deleteCompany(id) {
    const deletedCompanyCounter = await Company.destroy({
      where: { id },
    });

    if (deletedCompanyCounter <= 0) {
      throw new NotFoundError("Empresa não encontrada.");
    }
  }
}
