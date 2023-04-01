import bcrypt from "bcrypt";

class Bcrypt {
  public encryptPassword(password: string): string {
    try {
      // Gera um salt aleatório com 10 rounds
      const salt = bcrypt.genSaltSync(10);
      // Hash da string com o salt gerado
      const hash = bcrypt.hashSync(password, salt);
      // Retorna o hash gerado
      return hash;
    } catch(err) {
      throw new Error(String(err));
    }
  }
}

export default new Bcrypt();