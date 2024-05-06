import { CompanyService } from "../services/company.service.js";

const instanceCompanyService = new CompanyService();

export const registerCompany = async (req, res) => {
  const companyData = {
    company_name: req.body.company_name,
    email: req.body.email,
    phone: req.body.phone,
    website: req.body.website,
    cep: req.body.cep,
    street: req.body.street,
    neighborhood: req.body.neighborhood,
    city: req.body.city,
    state: req.body.state,
    address_number: req.body.address_number,
    description: req.body.description,
  };

  await instanceCompanyService.registerCompany(companyData);

  return res.status(201).json({
    message: "Empresa cadastrada com sucesso.",
  });
};

export const getAllCompanies = async (req, res) => {
  const companiesList = await instanceCompanyService.getAllCompanies();

  return res.status(200).json({
    companies: companiesList,
  });
};

export const getCompanyById = async (req, res) => {
  const { id } = req.params;
  const company = await instanceCompanyService.getCompanyById(id);

  return res.status(200).json({
    company,
  });
};

export const updateCompany = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  await instanceCompanyService.updateCompany(id, body);

  return res.status(200).json({
    message: "Empresa atualizada com sucesso.",
  });
};

export const deleteCompany = async (req, res) => {
  const { id } = req.params;
  await instanceCompanyService.deleteCompany(id);

  return res.status(200).json({
    message: "Empresa deletada com sucesso.",
  });
};
