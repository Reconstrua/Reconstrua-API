import { BeneficiaryService } from "../services/beneficiary.service.js";

const instanceBeneficiaryService = new BeneficiaryService();

export const registerBeneficiary = async (req, res) => {
  const beneficiaryData = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    phone: req.body.phone,
    cep: req.body.cep,
    street: req.body.street,
    neighborhood: req.body.neighborhood,
    city: req.body.city,
    state: req.body.state,
    address_number: req.body.address_number,
    description: req.body.description,
  };

  await instanceBeneficiaryService.registerBeneficiary(beneficiaryData);

  return res.status(201).json({
    message: "Beneficiado cadastrado com sucesso.",
  });
};

export const getAllBeneficiaries = async (req, res) => {
  const beneficiariesList = await instanceBeneficiaryService.getAllBeneficiaries();

  return res.status(200).json({
    beneficiaries: beneficiariesList,
  });
};

export const getBeneficiaryById = async (req, res) => {
  const { id } = req.params;
  const beneficiary = await instanceBeneficiaryService.getBeneficiaryById(id);

  return res.status(200).json({
    beneficiary,
  });
};

export const updateBeneficiary = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  await instanceBeneficiaryService.updateBeneficiary(id, body);

  return res.status(200).json({
    message: "Beneficiado atualizado com sucesso.",
  });
};

export const deleteBeneficiary = async (req, res) => {
  const { id } = req.params;
  await instanceBeneficiaryService.deleteBeneficiary(id);

  return res.status(200).json({
    message: "Beneficiado deletado com sucesso.",
  });
};
