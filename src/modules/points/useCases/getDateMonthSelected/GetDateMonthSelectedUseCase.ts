import { inject, injectable } from "tsyringe";
import { IPointsRepository } from "../../repositories/IPointsRepository";

@injectable()
class GetDateMonthSelectedUseCase {
  constructor(
    @inject("PointsRepository")
    private pointsRepository: IPointsRepository
  ) {}

  async execute(year: string, month: string, userId: string) {
    return await this.pointsRepository.getDateMonth(userId, year, month);
  }
}

export { GetDateMonthSelectedUseCase };
