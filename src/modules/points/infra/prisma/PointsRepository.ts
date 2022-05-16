import { Point } from "@prisma/client";
import { prisma } from "../../../../infra/database/prismaClient";
import { ICreatePointDTO } from "../../dtos/ICreatePointDTO";
import {
  findDateMonthParams,
  IPointsRepository,
} from "../../repositories/IPointsRepository";

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

  async fintByMonth({
    year,
    month,
    userId,
  }: findDateMonthParams): Promise<Point[]> {
    const numberYear = Number(year);
    const numberMonth = Number(month);
    const listDateMonth = await prisma.point.findMany({
      where: {
        userId: userId,
        selectedDate: {
          gte: new Date(numberYear, numberMonth - 1, 1),
          lte: new Date(numberYear, numberMonth - 1, 31),
        },
      },
    });

    return listDateMonth;
  }

  async findAllPoints(): Promise<Point[]> {
    const findAll = await prisma.point.findMany({
      where: {
        userId: "1234",
      },
    });

    return findAll;
  }
}

export { PointsRepository };
