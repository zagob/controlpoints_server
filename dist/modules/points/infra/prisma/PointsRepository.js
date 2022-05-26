"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PointsRepository = void 0;
const prismaClient_1 = require("../../../../infra/database/prismaClient");
const AppError_1 = require("../../../../shared/errors/AppError");
class PointsRepository {
    async create({ userId, selectedDate, entryOne, exitOne, entryTwo, exitTwo, totalMinutes, totalHours, reminderMinutes, timeMorning, timeLunch, timeAfternoon, hoursReminder, minutesReminder, definedStatus, }) {
        const createPoint = await prismaClient_1.prisma.point.create({
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
    async fintByMonth({ year, month, userId, perPage = 5, page = 1, }) {
        const numberYear = Number(year);
        const numberMonth = Number(month);
        const listTotalNumberResult = await prismaClient_1.prisma.point.count({
            where: {
                userId: userId,
                selectedDate: {
                    gte: new Date(numberYear, numberMonth - 1, 1),
                    lte: new Date(numberYear, numberMonth - 1, 31),
                },
            },
        });
        const listDateMonth = await prismaClient_1.prisma.point.findMany({
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
    async getDateMonth(userId, year, month) {
        const numberYear = Number(year);
        const numberMonth = Number(month);
        const listDateMonthSelected = await prismaClient_1.prisma.point.findMany({
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
        return listDateMonthSelected.map(item => item.selectedDate);
    }
    async findSelectedDate(userId, selectedDate) {
        const findDate = await prismaClient_1.prisma.point.findFirst({
            where: {
                userId: userId,
                selectedDate,
            },
        });
        return findDate;
    }
    async findAllPoints() {
        const findAll = await prismaClient_1.prisma.point.findMany();
        return findAll;
    }
    async findPointById(id) {
        const findPointById = await prismaClient_1.prisma.point.findFirst({
            where: {
                id,
            },
        });
        if (!findPointById) {
            throw new AppError_1.AppError("Point undefined!");
        }
        return findPointById;
    }
    async deletePointById(id) {
        await prismaClient_1.prisma.point.delete({
            where: {
                id,
            },
        });
    }
}
exports.PointsRepository = PointsRepository;
//# sourceMappingURL=PointsRepository.js.map