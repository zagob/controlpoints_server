import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { IDateProviderDayjs } from "../IDateProviderDayjs";

dayjs.extend(utc);

class DayjsDateProvider implements IDateProviderDayjs {}

export { DayjsDateProvider };
