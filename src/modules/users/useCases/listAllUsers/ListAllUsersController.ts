import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.headers;

      if (!user_id) throw new Error("Erro");

      if (Array.isArray(user_id)) {
        throw new Error("Erro");
      }

      const list = this.listAllUsersUseCase.execute({ user_id });

      return response.json(list);
    } catch {
      return response.status(400).json({ error: "Erro" });
    }
  }
}

export { ListAllUsersController };
