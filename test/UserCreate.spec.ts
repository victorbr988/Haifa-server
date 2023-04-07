import request from "supertest";
import { faker } from "@faker-js/faker";
import { app } from ".././src/app";

describe("Criação de usuário", () => {
  describe("Ao tentar criar um usuário na rota POST: '/user/new'", () => {
    it("É esperado que seja criado com sucesso na base de dados", async () => {
      const body = {
        email: faker.internet.email(),
        password: faker.internet.password()
      };
      const response = await request(app)
        .post("/user/new")
        .send(body);

      expect(response.status).toBe(200);
    });
  });
});
