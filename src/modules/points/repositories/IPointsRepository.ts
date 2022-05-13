import { Point } from "@prisma/client";
import { ICreatePointDTO } from "../dtos/ICreatePointDTO";

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
  fintByMonth(year: string, month: string, userId: string): Promise<Point[]>;
}

export { IPointsRepository };
