"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePointUseCase = void 0;
const tsyringe_1 = require("tsyringe");
const AppError_1 = require("../../../../shared/errors/AppError");
const formatTimeDateFns_1 = require("../../../../utils/formatTimeDateFns");
let CreatePointUseCase = class CreatePointUseCase {
    constructor(pointsRepository, usersRepository) {
        this.pointsRepository = pointsRepository;
        this.usersRepository = usersRepository;
    }
    async execute({ userId, selectedDate, entryOne, exitOne, entryTwo, exitTwo, isSimulation = false, }) {
        const totalTimeMinutes = 480;
        const entryOneDate = (0, formatTimeDateFns_1.convertDataToParseISO)(entryOne);
        const exitOneDate = (0, formatTimeDateFns_1.convertDataToParseISO)(exitOne);
        const entryTwoDate = (0, formatTimeDateFns_1.convertDataToParseISO)(entryTwo);
        const exitTwoDate = (0, formatTimeDateFns_1.convertDataToParseISO)(exitTwo);
        const returnObjEntryOneAndExitOne = (0, formatTimeDateFns_1.convertDataTime)(entryOneDate, exitOneDate);
        const returnObjExitOneAndEntryTwo = (0, formatTimeDateFns_1.convertDataTime)(exitOneDate, entryTwoDate);
        const returnObjEntryTwoAndExitTwo = (0, formatTimeDateFns_1.convertDataTime)(entryTwoDate, exitTwoDate);
        const timeEntryOneAndExitOne = (0, formatTimeDateFns_1.convertTimeToString)(returnObjEntryOneAndExitOne);
        const timeExitOneAndEntryTwo = (0, formatTimeDateFns_1.convertTimeToString)(returnObjExitOneAndEntryTwo);
        const timeExtryTwoAndExitTwo = (0, formatTimeDateFns_1.convertTimeToString)(returnObjEntryTwoAndExitTwo);
        const totalTimeWork = (0, formatTimeDateFns_1.convertTotalTimeWork)(returnObjEntryOneAndExitOne, returnObjEntryTwoAndExitTwo);
        const totalTimeString = (0, formatTimeDateFns_1.convertTimeToString)(totalTimeWork);
        const subtractTotalMinutes = totalTimeWork.totalMinutes - totalTimeMinutes;
        const convertToPositive = Math.abs(subtractTotalMinutes);
        const valueHoursReminder = String(Math.floor(convertToPositive / 60)).padStart(2, "0");
        const valueMinutesReminder = String(convertToPositive % 60).padStart(2, "0");
        const definedStatus = Math.sign(subtractTotalMinutes); // 1, 0, - 1
        const timeBonus = {
            valueHoursReminder,
            valueMinutesReminder,
            definedStatus: (definedStatus === 1 && "UP") ||
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
        // const returnObj = {
        //   selectedDate,
        //   entryOne,
        //   exitOne,
        //   entryTwo,
        //   exitTwo,
        //   totalTimeString,
        //   totalTimeWork,
        //   timeEntryOneAndExitOne,
        //   timeExitOneAndEntryTwo,
        //   timeExtryTwoAndExitTwo,
        //   timeBonus,
        // };
        const usersAlreadyExist = await this.usersRepository.findById(userId);
        if (!usersAlreadyExist) {
            throw new AppError_1.AppError("User not already exists");
        }
        const dateAlreadyExists = await this.pointsRepository.findSelectedDate(userId, selectedDate);
        if (dateAlreadyExists) {
            throw new AppError_1.AppError("Date already exist");
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
};
CreatePointUseCase = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)("PointsRepository")),
    __param(1, (0, tsyringe_1.inject)("UsersRepository"))
], CreatePointUseCase);
exports.CreatePointUseCase = CreatePointUseCase;
//# sourceMappingURL=CreatePointUseCase.js.map