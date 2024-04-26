import { VoluntaryService } from "../services/Voluntary.service.js"

const instanceVoluntaryService = new VoluntaryService();

export const registerVoluntary = async (req, res) => {
  const { first_name, last_name, email, phone, password, motivation } = req.body;
  const newVoluntary = await instanceVoluntaryService.createVoluntary(first_name, last_name, email, phone, password, motivation);
  return res.status(201).json({ newVoluntary })
};

export const getAllVoluntaries = async (req, res) => {
  const voluntaries = await instanceVoluntaryService.getAllVoluntaries();
  return res.status(200).json({ voluntaries })
};

export const updateVoluntary = async (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, email, phone, password, motivation } = req.body;
  const editedVoluntary = await instanceVoluntaryService.editVoluntary(id, first_name, last_name, email, phone, password, motivation)
  return res.status(200).json({ editedVoluntary })
};


export const deleteVoluntary = async (req, res) => {
  const { id } = req.params;
  const deletedVoluntary = await instanceVoluntaryService.deleteVoluntary(id)
  return res.status(200).json({ deletedVoluntary })
}