import type { DayHoursInMonthType } from '@/app/lib/types/types.ts';
import { totalDaysHoursInMonth } from './helpers';

type TotalMonthHoursType = Record<string, DayHoursInMonthType>;

export const totalMonthHours = (dayHoursInMonth: TotalMonthHoursType) => {
  return Object.entries(dayHoursInMonth).reduce((accMonth, value) => {
    const [monthName, daysAndHours] = value;

    accMonth[monthName] = totalDaysHoursInMonth(daysAndHours);

    return accMonth;
  }, {} as DayHoursInMonthType);
};
