import UserModel from "../models/UserModel";
import Authentication from "./Authentication";

interface UserProps {
  email: string;
  password: string
}

class User {
  public async validate(user: UserProps): Promise<string> {
    try {
      const { email, password } = user;

      if (!email || !password) throw new Error("Fields cannot be empty");

      await UserModel.create({email, password});
      const token = Authentication.createToken({ email });

      return token;
    } catch(err) {
      throw new Error(String(err));
    }
  }
}

export default new User();
