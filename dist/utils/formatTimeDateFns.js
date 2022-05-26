"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertTotalTimeWork = exports.convertTimeToString = exports.convertDataTime = exports.convertDataToParseISO = void 0;
const date_fns_1 = require("date-fns");
function convertDataToParseISO(entryValue) {
    const newDate = (0, date_fns_1.format)(new Date(), "yyyy-MM-dd");
    return (0, date_fns_1.parseISO)(`${newDate} ${entryValue}`);
}
exports.convertDataToParseISO = convertDataToParseISO;
function convertDataTime(dateLeft, dateRight) {
    const totalMinutes = (0, date_fns_1.differenceInMinutes)(dateRight, dateLeft);
    const totalHours = Math.floor(totalMinutes / 60);
    const reminderMinutes = String(totalMinutes % 60).padStart(2, "0");
    return {
        totalMinutes,
        totalHours,
        reminderMinutes,
    };
}
exports.convertDataTime = convertDataTime;
function convertTimeToString(date) {
    return `${date.totalHours} hora(s) e ${date.reminderMinutes} minutos`;
}
exports.convertTimeToString = convertTimeToString;
function convertTotalTimeWork(timeMorning, timeAfternoon) {
    const totalTimeMinutosMorningAndAfternoon = timeMorning.totalMinutes + timeAfternoon.totalMinutes;
    const totalHours = Math.floor(totalTimeMinutosMorningAndAfternoon / 60);
    const reminderMinutes = String(totalTimeMinutosMorningAndAfternoon % 60).padStart(2, "0");
    return {
        totalMinutes: totalTimeMinutosMorningAndAfternoon,
        totalHours,
        reminderMinutes,
    };
}
exports.convertTotalTimeWork = convertTotalTimeWork;
//# sourceMappingURL=formatTimeDateFns.js.map