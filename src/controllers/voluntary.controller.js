import { VoluntaryService } from "../services/voluntary.service.js";

const instanceVoluntaryService = new VoluntaryService();

export const registerVoluntary = async (req, res) => {
  const voluntaryData = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    phone: req.body.phone,
    description: req.body.description,
  };

  await instanceVoluntaryService.registerVoluntary(voluntaryData);

  return res.status(201).json({
    message: "Voluntário cadastrado com sucesso.",
  });
};

export const getAllVoluntaries = async (req, res) => {
  const voluntariesList = await instanceVoluntaryService.getAllVoluntaries();

  return res.status(200).json({
    voluntaries: voluntariesList,
  });
};

export const getVoluntaryById = async (req, res) => {
  const { id } = req.params;
  const voluntary = await instanceVoluntaryService.getVoluntaryById(id);

  return res.status(200).json({
    voluntary,
  });
};

export const updateVoluntary = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  await instanceVoluntaryService.updateVoluntary(id, body);

  return res.status(200).json({
    message: "Voluntário atualizado com sucesso.",
  });
};

export const deleteVoluntary = async (req, res) => {
  const { id } = req.params;
  await instanceVoluntaryService.deleteVoluntary(id);

  return res.status(200).json({
    message: "Voluntário deletado com sucesso.",
  });
};
