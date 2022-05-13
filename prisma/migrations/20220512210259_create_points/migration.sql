-- CreateEnum
CREATE TYPE "PointStatus" AS ENUM ('UP', 'EQUAL', 'DOWN');

-- CreateTable
CREATE TABLE "Point" (
    "id" TEXT NOT NULL,
    "selectedDate" TIMESTAMP(3) NOT NULL,
    "entryOne" TEXT NOT NULL,
    "exitOne" TEXT NOT NULL,
    "entryTwo" TEXT NOT NULL,
    "exitTwo" TEXT NOT NULL,
    "timeMorning" TEXT NOT NULL,
    "timeLunch" TEXT NOT NULL,
    "timeAfternoon" TEXT NOT NULL,
    "totalMinutes" INTEGER NOT NULL,
    "totalHours" INTEGER NOT NULL,
    "reminderMinutes" TEXT NOT NULL,
    "hoursReminder" TEXT NOT NULL,
    "minutesReminder" TEXT NOT NULL,
    "definedStatus" "PointStatus" NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Point_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Point_selectedDate_key" ON "Point"("selectedDate");

-- AddForeignKey
ALTER TABLE "Point" ADD CONSTRAINT "Point_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
