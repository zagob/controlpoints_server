import { format, parseISO, differenceInMinutes } from "date-fns";

interface ValueTimeObjectParams {
  totalMinutes: number;
  totalHours: number;
  reminderMinutes: string;
}

interface ValuesPointsParams {
  userId: string;
  selectedDate: Date;
  entryOne: string;
  exitOne: string;
  entryTwo: string;
  exitTwo: string;
  totalMinutes: number;
  totalHours: number;
  reminderMinutes: string;
  timeMorning: string;
  timeLunch: string;
  timeAfternoon: string;
  hoursReminder: string;
  minutesReminder: string;
  definedStatus: "UP" | "EQUAL" | "DOWN";
}

export function convertDataToParseISO(entryValue: string) {
  const newDate = format(new Date(), "yyyy-MM-dd");
  return parseISO(`${newDate} ${entryValue}`);
}

export function convertDataTime(dateLeft: Date, dateRight: Date) {
  const totalMinutes = differenceInMinutes(dateRight, dateLeft);

  const totalHours = Math.floor(totalMinutes / 60);

  const reminderMinutes = String(totalMinutes % 60).padStart(2, "0");

  return {
    totalMinutes,
    totalHours,
    reminderMinutes,
  };
}

export function convertTimeToString(date: ValueTimeObjectParams) {
  return `${date.totalHours} hora(s) e ${date.reminderMinutes} minutos`;
}

export function convertTotalTimeWork(
  timeMorning: ValueTimeObjectParams,
  timeAfternoon: ValueTimeObjectParams
) {
  const totalTimeMinutosMorningAndAfternoon =
    timeMorning.totalMinutes + timeAfternoon.totalMinutes;

  const totalHours = Math.floor(totalTimeMinutosMorningAndAfternoon / 60);

  const reminderMinutes = String(
    totalTimeMinutosMorningAndAfternoon % 60
  ).padStart(2, "0");

  return {
    totalMinutes: totalTimeMinutosMorningAndAfternoon,
    totalHours,
    reminderMinutes,
  };
}
