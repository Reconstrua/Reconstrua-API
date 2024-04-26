import { Voluntary } from "../entities/Voluntary.entity.js"

export class VoluntaryService {
  async createVoluntary(first_name, last_name, email, phone, password, motivation) {
    try {
      await Voluntary.sync();

      const newVoluntary = await Voluntary.create({ first_name, last_name, email, phone, password, motivation })
      return newVoluntary;

    } catch (error) {
      return error;
    }
  };

  async getAllVoluntaries() {
    try {
      const allVoluntaries = await Voluntary.findAll();
      return allVoluntaries;
    } catch (error) {
      return error
    }
  };

  async editVoluntary(first_name, last_name, email, phone, password, motivation) {
    try {
      const validateVoluntary = await Voluntary.findByPk(id)
      if (!validateVoluntary) {

        return `Voluntary not found!`
      }
      const updatedVoluntary = await Voluntary.update({ first_name, last_name, email, phone, password, motivation })

      return updatedVoluntary;
    } catch (error) {

      return error
    }
  }

  async deleteVoluntary(id){
    try {
      const validateVoluntary = await Voluntary.findByPk(id)
      if (!validateVoluntary) {

        return `Voluntary not found!`
      }
      await Voluntary.destroy({where: {id}})
      return "Success!"
    } catch (error) {
      return error
    }
  }
};
