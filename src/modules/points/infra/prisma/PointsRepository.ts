import { Point } from "@prisma/client";
import { prisma } from "../../../../infra/database/prismaClient";
import { ICreatePointDTO } from "../../dtos/ICreatePointDTO";
import { IPointsRepository } from "../../repositories/IPointsRepository";

class PointsRepository implements IPointsRepository {
  async create({
    userId,
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
  }: ICreatePointDTO): Promise<Point> {
    const createPoint = await prisma.point.create({
      data: {
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
        userId,
        hoursReminder,
        minutesReminder,
        definedStatus,
      },
    });

    return createPoint;
  }

  async fintByMonth(year: string, month: string, userId: string): Promise<Point[]> {
    const newDate = new Date(Number(year), Number(month), 31)
    const dateMonth = await prisma.point.findMany({
      where: {
        // userId: '',
        selectedDate: {
          gte: new Date(Number(year), Number(month), 1),
          lte: new Date(newDate.getFullYear(), newDate.getMonth(), 31),
        },
      },
    });

    return dateMonth;
  }
}

export { PointsRepository };
