import Autentication, { PayloadProps } from "./authentication";

describe("testando camada de autenticação de usuário", () => {
  // Verificação de token
  describe("Ao passar um token de usuário inválido para a verificação de token", () => {
    it("É esperado que seja retornado um erro", () => {
      const INVALID_TOKEN = "Invalid_token";
      expect(() => Autentication.verifyToken(INVALID_TOKEN)).toThrow("Expired or invalid token");
    });
  });

  describe("Ao passar um token de usuário válido para a verificação de token", () => {
    it("É esperado que seja retornado uma mensagem de sucesso", () => {
      const payload = {
        email: "myfakeemail@gmail.com",
      };
      const VALID_TOKEN = Autentication.createToken(payload);

      expect(() => Autentication.verifyToken(VALID_TOKEN)).not.toThrow();
      expect(Autentication.verifyToken(VALID_TOKEN)).toBe("Ok");
    });
  });

  // Criação de Token
  describe("Ao passar um usuário e senha para a função que cria um token", () => {
    it("É esperado que seja retornado um token de autorização", () => {
      const payload = {
        email: "myfakeemail@gmail.com",
      };

      const tokenCreated = Autentication.createToken(payload);
      const splitToken = tokenCreated.split(".");

      expect(() => Autentication.createToken(payload)).not.toThrow();
      expect(splitToken).toHaveLength(3);
    });
  });

  describe("Ao não passar um usuário e uma senha para a função que cria um token", () => {
    it("É esperado que seja retornado um Erro", () => {

      expect(() => Autentication.createToken({} as PayloadProps)).toThrow("Payload cannot be empty");
    });
  });

  describe("Ao decodificar um token", () => {
    it("É esperado que seja retornado as informações do usuário", () => {
      const payload = {
        email: "myfakeemail@gmail.com",
      };

      const tokenCreated = Autentication.createToken(payload);
      const decodeToken = Autentication.decodeToken(tokenCreated);

      expect(decodeToken.email).toBeTruthy();
      expect(decodeToken.email).toBe(payload.email);
    });
  });

  describe("Ao passar um token inválido para a função que decodifica o token", () => {
    it("É esperado que seja retornado um erro", () => {
      const INVALID_TOKEN = "invalid_token";

      expect(Autentication.decodeToken(INVALID_TOKEN)).toBe(null);
    });
  });
});
