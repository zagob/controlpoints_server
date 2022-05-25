import { Point } from "@prisma/client";
import { ICreatePointDTO } from "../dtos/ICreatePointDTO";

export interface findDateMonthParams {
  year: string | undefined;
  month: string | undefined;
  userId: string | undefined;
  perPage?: number;
  page?: number;
}

export interface FindMonthParams {
  totalPage: number;
  listDateMonth: Point[]
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
  fintByMonth({ year, month, userId, perPage, page }: findDateMonthParams): Promise<FindMonthParams>;
  findSelectedDate(userId: string, selectedDate: Date): Promise<Point | null>;
  findAllPoints(): Promise<Point[]>;
  findPointById(id: string): Promise<Point | null>;
  deletePointById(id: string): Promise<void>;
  getDateMonth(userId: string, year: string, month: string): Promise<Date[]>
}

export { IPointsRepository };
