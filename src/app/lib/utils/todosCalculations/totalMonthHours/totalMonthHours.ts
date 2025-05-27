import type { DayHoursInMonthType } from '@/app/lib/types/types.ts';
import { totalDaysHoursInMonth } from './helpers';

export const totalMonthHours = (
  dayHoursInMonth: Record<string, DayHoursInMonthType>,
) => {
  return Object.entries(dayHoursInMonth).reduce((accMonth, value) => {
    const [monthName, daysAndHours] = value;

    accMonth[monthName] = totalDaysHoursInMonth(daysAndHours);

    return accMonth;
  }, {} as DayHoursInMonthType);
};
