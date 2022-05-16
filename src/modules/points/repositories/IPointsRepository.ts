import { Point } from "@prisma/client";
import { ICreatePointDTO } from "../dtos/ICreatePointDTO";

export interface findDateMonthParams {
  year: string | undefined;
  month: string | undefined;
  userId: string | undefined;
}

interface IPointsRepository {
  create({
    selectedDate,
    entryOne,
    exitOne,
    entryTwo,
    exitTwo,
    totalMinutes,
    totalHours,
    reminderMinutes,
    timeMorning,
    timeLunch,
    timeAfternoon,
    hoursReminder,
    minutesReminder,
    definedStatus,
  }: ICreatePointDTO): Promise<Point>;
  fintByMonth({ year, month, userId }: findDateMonthParams): Promise<Point[]>;
  findAllPoints(): Promise<Point[]>;
}

export { IPointsRepository };
