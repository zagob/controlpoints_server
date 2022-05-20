import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { PointsRepository } from "../../infra/prisma/PointsRepository";

@injectable()
class DeletePointWithIdUseCase {
  constructor(
    @inject("PointsRepository")
    private pointsRepository: PointsRepository
  ) {}

  async execute(id: string) {
    const point = await this.pointsRepository.findPointById(id);

    if (!point) {
      throw new AppError("Does not exist this point");
    }

    return await this.pointsRepository.deletePointById(id);
  }
}

export { DeletePointWithIdUseCase };
