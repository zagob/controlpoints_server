import { Point } from "@prisma/client";
import { prisma } from "../../../../infra/database/prismaClient";
import { AppError } from "../../../../shared/errors/AppError";
import { ICreatePointDTO } from "../../dtos/ICreatePointDTO";
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
    perPage = 5,
    page = 1,
  }: findDateMonthParams): Promise<FindMonthParams> {
    const numberYear = Number(year);
    const numberMonth = Number(month);

    const listTotalNumberResult = await prisma.point.count({
      where: {
        userId: userId,
        selectedDate: {
          gte: new Date(numberYear, numberMonth - 1, 1),
          lte: new Date(numberYear, numberMonth - 1, 31),
        },
      },
    });

    const listDateMonth = await prisma.point.findMany({
      // take: perPage,
      // skip: perPage * (page - 1),
      where: {
        userId: userId,
        selectedDate: {
          gte: new Date(numberYear, numberMonth - 1, 1),
          lte: new Date(numberYear, numberMonth - 1, 31),
        },
      },
      orderBy: {
        selectedDate: "desc",
      },
    });

    const formatListDateMonth = {
      totalPage: Math.ceil(listTotalNumberResult / perPage),
      totalCount: listTotalNumberResult,
      listDateMonth,
    };

    return formatListDateMonth;
  }

  async getDateMonth(
    userId: string,
    year: string,
    month: string
  ): Promise<Date[]> {
    const numberYear = Number(year);
    const numberMonth = Number(month);

    const listDateMonthSelected = await prisma.point.findMany({
      where: {
        userId: userId,
        selectedDate: {
          gte: new Date(numberYear, numberMonth - 1, 1),
          lte: new Date(numberYear, numberMonth - 1, 31),
        },
      },
      // select: {
      //   selectedDate: true,
      // },
    });

    return listDateMonthSelected.map(item => item.selectedDate)
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
