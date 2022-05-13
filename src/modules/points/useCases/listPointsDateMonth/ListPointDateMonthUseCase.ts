import { inject, injectable } from "tsyringe";
import { IPointsRepository } from "../../repositories/IPointsRepository";

@injectable()
class ListPointDateMonthUseCase {
  constructor(
    @inject("PointsRepository")
    private pointsRepository: IPointsRepository
  ) {}

  async execute(year: string, month: string, userId: string) {
    return await this.pointsRepository.fintByMonth(year, month, userId);
  }
}

export { ListPointDateMonthUseCase };
