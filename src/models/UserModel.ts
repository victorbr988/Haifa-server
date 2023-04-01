import { PrismaClient } from "@prisma/client";
import { randomUUID } from "crypto";
import Bcrypt from "./Bcrypt";

interface UserProps {
  email: string;
  password: string
}


class User {
  public async create(userData: UserProps) {
    const {email, password} = userData;
    const prisma = new PrismaClient();

    await prisma.user.create({
      data: {
        id: randomUUID(),
        email,
        password: Bcrypt.encryptPassword(password),
        profileId: 2
      }
    });
  }
}

export default new User();
