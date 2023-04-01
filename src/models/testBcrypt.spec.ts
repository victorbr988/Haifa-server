import Bcrypt from "./Bcrypt";

describe("Testando método para criptografar senha do usuário", () => {
  describe("Ao passar uma senha para a função de encriptação", () => {
    it("É esperado que seja retornado um hash da senha passada", () => {
      const EXAMPLE_PASSWORD = "123456";

      expect(() => Bcrypt.encryptPassword(EXAMPLE_PASSWORD)).not.toThrow();
      expect(Bcrypt.encryptPassword(EXAMPLE_PASSWORD)).toBeTruthy();
    });
  });
});
