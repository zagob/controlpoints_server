import { Point } from "@prisma/client";
import { prisma } from "../../../../infra/database/prismaClient";
import { AppError } from "../../../../shared/errors/AppError";
import { ICreatePointDTO } from "../../dtos/ICreatePointDTO";
import dayjs from "dayjs";

import {
  findDateMonthParams,
  FindMonthParams,
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
    const numberOfDays = new Date(numberYear, numberMonth, 0).getDate();

    const listDateMonth = await prisma.point.findMany({
      where: {
        userId: userId,
        selectedDate: {
          gte: dayjs(`${year}-${month}`).format(),
          lte: dayjs(`${year}-${month}-${numberOfDays + 1}`).format(),
        },
      },
      orderBy: {
        selectedDate: "desc",
      },
    });

    return listDateMonth;
  }

  async getDateMonth(
    userId: string,
    year: string,
    month: string
  ): Promise<Date[]> {
    const numberYear = Number(year);
    const numberMonth = Number(month);
    const numberOfDays = new Date(numberYear, numberMonth, 0).getDate();

    const listDateMonthSelected = await prisma.point.findMany({
      where: {
        userId: userId,
        selectedDate: {
          gte: dayjs(`${year}-${month}`).format(),
          lte: dayjs(`${year}-${month}-${numberOfDays + 1}`).format(),
        },
      },
    });

    return listDateMonthSelected.map((item) => item.selectedDate);
  }

  async findSelectedDate(
    userId: string,
    selectedDate: Date
  ): Promise<Point | null> {
    const findDate = await prisma.point.findFirst({
      where: {
        userId: userId,
        selectedDate,
      },
    });

    return findDate;
  }

  async findAllPoints(): Promise<Point[]> {
    const findAll = await prisma.point.findMany();

    return findAll;
  }

  async findPointById(id: string): Promise<Point | null> {
    const findPointById = await prisma.point.findFirst({
      where: {
        id,
      },
    });

    if (!findPointById) {
      throw new AppError("Point undefined!");
    }

    return findPointById;
  }

  async deletePointById(id: string): Promise<void> {
    await prisma.point.delete({
      where: {
        id,
      },
    });
  }
}

export { PointsRepository };
