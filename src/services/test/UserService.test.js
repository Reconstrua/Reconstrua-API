import { UserService } from "../User.service.js";
import { User } from "../../entities/User.entity.js"

const instanceUserService = new UserService();


test("Criando novo Usuário", async () => {
  const newUser = await instanceUserService.createUser("João", "Silva", "joao.silva@example.com", "11987654321", "senha123", "12345678", "Rua das Flores", "Bairro do Bosque", "Cidade Feliz", "Goiás", "Apartamento 101", "Este objeto foi criado para ilustrar um exemplo de estrutura de dados em JavaScript.")
  expect(newUser).toHaveProperty("id")
})



afterEach(async () => {
  await User.destroy({
    where: {
      first_name: "João"
    }
  });
})