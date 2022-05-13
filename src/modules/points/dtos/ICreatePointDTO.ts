interface ICreatePointDTO {
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
  definedStatus: string;
}

export { ICreatePointDTO };
