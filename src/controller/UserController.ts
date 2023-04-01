import { Request, Response } from "express";
import UserService from "../service/UserService";

class User {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { email, password } = request.body;

      const token = await UserService.validate({email, password});

      return response.status(200).json(token);
    } catch(err) {
      return response.status(400).json(String(err));
    }
  }
}

export default new User();
