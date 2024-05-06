import { Voluntary } from "../entities/Voluntary.entity.js";
import { ConflictError, NotFoundError } from "../helpers/error/apiErros.js";

export class VoluntaryService {
  async registerVoluntary(voluntaryData) {
    await Voluntary.sync();

    const email = voluntaryData.email;
    const voluntaryExists = await Voluntary.findOne({ where: { email } });
    if (voluntaryExists) {
      throw new ConflictError("Voluntário já cadastrado.");
    }

    const phone = voluntaryData.phone;
    const voluntaryPhoneExists = await Voluntary.findOne({
      where: { phone },
    });
    if (voluntaryPhoneExists) {
      throw new ConflictError("Número de telefone já cadastrado.");
    }

    await Voluntary.create(voluntaryData);
  }

  async getAllVoluntaries() {
    const voluntariesFound = await Voluntary.findAll();
    if (voluntariesFound.length === 0) {
      throw new NotFoundError("Voluntários não encontrados.");
    }

    return voluntariesFound;
  }

  async getVoluntaryById(id) {
    const voluntaryFound = await Voluntary.findByPk(id);
    if (!voluntaryFound) {
      throw new NotFoundError("Voluntário não encontrado.");
    }

    return voluntaryFound;
  }

  async updateVoluntary(id, body) {
    const updatedVoluntary = await Voluntary.update(body, {
      where: { id },
    });

    if (updatedVoluntary[0] === 0) {
      throw new NotFoundError("Voluntário não encontrado.");
    }
  }

  async deleteVoluntary(id) {
    const deletedVoluntaryCounter = await Voluntary.destroy({
      where: { id },
    });

    if (deletedVoluntaryCounter <= 0) {
      throw new NotFoundError("Voluntário não encontrado.");
    }
  }
}
