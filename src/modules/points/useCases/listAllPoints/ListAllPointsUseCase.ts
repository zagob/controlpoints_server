import { inject, injectable } from "tsyringe";
import { PointsRepository } from "../../infra/prisma/PointsRepository";

@injectable()
class ListAllPointsUseCase {
  constructor(
    @inject("PointsRepository")
    private pointsRepository: PointsRepository
  ) {}
  async execute() {
    return await this.pointsRepository.findAllPoints();
  }
}

export { ListAllPointsUseCase };
