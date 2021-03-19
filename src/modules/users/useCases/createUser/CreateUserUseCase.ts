import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const user = this.usersRepository
      .list()
      .find((user) => user.email === email);

    if (user) {
      throw new Error("Erro");
    }

    return this.usersRepository.create({ email, name });
  }
}

export { CreateUserUseCase };
