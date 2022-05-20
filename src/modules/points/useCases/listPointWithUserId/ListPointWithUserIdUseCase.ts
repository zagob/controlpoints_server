import { inject, injectable } from "tsyringe";
import { PointsRepository } from "../../infra/prisma/PointsRepository";

@injectable()
class ListPointWithIdUseCase {
  constructor(
    @inject("PointsRepository")
    private pointsRepository: PointsRepository
  ) {}

  async execute(id: string) {
    return await this.pointsRepository.findPointById(id);
  }
}

export { ListPointWithIdUseCase };
