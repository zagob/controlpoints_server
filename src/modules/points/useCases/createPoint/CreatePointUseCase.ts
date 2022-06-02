import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import {
  convertDataTime,
  convertDataToParseISO,
  convertTimeToString,
  convertTotalTimeWork,
} from "../../../../utils/formatTimeDateFns";
import { IUsersRepository } from "../../../users/repositories/IUsersRepository";
import { IPointsRepository } from "../../repositories/IPointsRepository";

interface ICreatePointParams {
  userId: string;
  selectedDate: Date;
  entryOne: string;
  exitOne: string;
  entryTwo: string;
  exitTwo: string;
  isSimulation?: boolean;
}

@injectable()
class CreatePointUseCase {
  constructor(
    @inject("PointsRepository")
    private pointsRepository: IPointsRepository,
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({
    userId,
    selectedDate,
    entryOne,
    exitOne,
    entryTwo,
    exitTwo,
    isSimulation = false,
  }: ICreatePointParams) {
    const totalTimeMinutes = 480;
    const entryOneDate = convertDataToParseISO(entryOne);
    const exitOneDate = convertDataToParseISO(exitOne);
    const entryTwoDate = convertDataToParseISO(entryTwo);
    const exitTwoDate = convertDataToParseISO(exitTwo);

    const returnObjEntryOneAndExitOne = convertDataTime(
      entryOneDate,
      exitOneDate
    );
    const returnObjExitOneAndEntryTwo = convertDataTime(
      exitOneDate,
      entryTwoDate
    );
    const returnObjEntryTwoAndExitTwo = convertDataTime(
      entryTwoDate,
      exitTwoDate
    );

    const timeEntryOneAndExitOne = convertTimeToString(
      returnObjEntryOneAndExitOne
    );
    const timeExitOneAndEntryTwo = convertTimeToString(
      returnObjExitOneAndEntryTwo
    );
    const timeExtryTwoAndExitTwo = convertTimeToString(
      returnObjEntryTwoAndExitTwo
    );

    const totalTimeWork = convertTotalTimeWork(
      returnObjEntryOneAndExitOne,
      returnObjEntryTwoAndExitTwo
    );

    const totalTimeString = convertTimeToString(totalTimeWork);

    const subtractTotalMinutes = totalTimeWork.totalMinutes - totalTimeMinutes;

    const convertToPositive = Math.abs(subtractTotalMinutes);
    const valueHoursReminder = String(
      Math.floor(convertToPositive / 60)
    ).padStart(2, "0");
    const valueMinutesReminder = String(convertToPositive % 60).padStart(
      2,
      "0"
    );

    const definedStatus = Math.sign(subtractTotalMinutes); // 1, 0, - 1

    const timeBonus = {
      valueHoursReminder,
      valueMinutesReminder,
      definedStatus:
        (definedStatus === 1 && "UP") ||
        (definedStatus === 0 && "EQUAL") ||
        (definedStatus === -1 && "DOWN") ||
        "",
    };

    const returnObj = {
      definedStatus: timeBonus.definedStatus,
      entryOne,
      entryTwo,
      exitOne,
      exitTwo,
      hoursReminder: timeBonus.valueHoursReminder,
      minutesReminder: timeBonus.valueMinutesReminder,
      reminderMinutes: totalTimeWork.reminderMinutes,
      selectedDate,
      timeAfternoon: timeExtryTwoAndExitTwo,
      timeLunch: timeExitOneAndEntryTwo,
      timeMorning: timeEntryOneAndExitOne,
      totalHours: totalTimeWork.totalHours,
      totalMinutes: totalTimeWork.totalMinutes,
      userId,
    };

    const usersAlreadyExist = await this.usersRepository.findById(userId);

    if (!usersAlreadyExist) {
      throw new AppError("User not already exists");
    }

    const dateAlreadyExists = await this.pointsRepository.findSelectedDate(
      userId,
      selectedDate
    );

    if (dateAlreadyExists) {
      throw new AppError("Date already exist");
    }

    if (!isSimulation) {
      await this.pointsRepository.create({
        definedStatus: timeBonus.definedStatus,
        entryOne,
        entryTwo,
        exitOne,
        exitTwo,
        hoursReminder: timeBonus.valueHoursReminder,
        minutesReminder: timeBonus.valueMinutesReminder,
        reminderMinutes: totalTimeWork.reminderMinutes,
        selectedDate,
        timeAfternoon: timeExtryTwoAndExitTwo,
        timeLunch: timeExitOneAndEntryTwo,
        timeMorning: timeEntryOneAndExitOne,
        totalHours: totalTimeWork.totalHours,
        totalMinutes: totalTimeWork.totalMinutes,
        userId,
      });
    }

    return returnObj;
  }
}

export { CreatePointUseCase };
