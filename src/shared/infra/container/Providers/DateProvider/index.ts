import { container } from "tsyringe";
import { IDateProviderDayjs } from "./IDateProviderDayjs";
import { DayjsDateProvider } from "./implementations/DayjsDateProvider";

container.registerSingleton<IDateProviderDayjs>(
  "DayjsDateProvider",
  DayjsDateProvider
);
