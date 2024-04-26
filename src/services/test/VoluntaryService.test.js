import { VoluntaryService } from "../Voluntary.service.js";
import { Voluntary } from "../../entities/Voluntary.entity.js"

const instanceVoluntaryService = new VoluntaryService();


test("Criando novo Voluntário", async () => {
  const newVoluntary = await instanceVoluntaryService.createVoluntary("Oziel", "Sousa", "oziel@gmail.com", "62992479961", "arroz", "programar")
  expect(newVoluntary).toHaveProperty("id")
})

afterEach(async () => {
  await Voluntary.destroy({
    where: {
      first_name: "Oziel"
    }
  });
})