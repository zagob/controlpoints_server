import { inject, injectable } from "tsyringe";
import {
  findDateMonthParams,
  IPointsRepository,
} from "../../repositories/IPointsRepository";

@injectable()
class ListPointDateMonthUseCase {
  constructor(
    @inject("PointsRepository")
    private pointsRepository: IPointsRepository
  ) {}

  async execute({ year, month, userId, perPage, page }: findDateMonthParams) {
    return await this.pointsRepository.fintByMonth({
      year,
      month,
      userId,
      perPage,
      page,
    });
  }
}

export { ListPointDateMonthUseCase };
