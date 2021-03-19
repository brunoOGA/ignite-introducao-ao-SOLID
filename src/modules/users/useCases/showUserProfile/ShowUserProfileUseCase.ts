import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const user = this.usersRepository
      .list()
      .find((user) => user.id === user_id);

    if (!user) {
      throw new Error("Erro");
    }

    return user;
  }
}

export { ShowUserProfileUseCase };
