/* eslint-disable no-unused-vars */
import jwt from "jsonwebtoken";

export interface PayloadProps {
  email: string;
}

interface AutenticationProps {
  verifyToken(token: string): Error | string
  createToken(payload: PayloadProps): string | null
  decodeToken(token: string): Record<string, string>
}

class Autentication implements AutenticationProps {

  public verifyToken(token: string): string {
    const SECRET_TOKEN = process.env.JWT_SECRET as string;

    try {
      jwt.verify(token, String(SECRET_TOKEN));
      return "Ok";
    } catch (error) {
      throw new Error("Expired or invalid token");
    }
  }

  public createToken(payload: PayloadProps): string{
    try {
      if(!payload["email"]) throw new Error("Payload cannot be empty");
      
      const SECRET_TOKEN = process.env.JWT_SECRET as string;

      const token = jwt.sign(
        payload, String(SECRET_TOKEN), { algorithm: "HS256", expiresIn: "1d" },
      );
      return token;
    } catch(err) {
      throw new Error(String(err));
    }
  }
  
  public decodeToken(token: string): Record<string, string> {
    try {
      const payload = jwt.decode(token);

      return payload as Record<string, string>;
    } catch(err) {
      throw new Error(String(err));
    }
  }
}

export default new Autentication();
