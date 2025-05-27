import type {
  DayHoursInMonthType,
  TodosByMonthType,
} from '@/app/lib/types/types.ts';
import { getDaysInMonth } from 'date-fns';
import { totalDayInMonth } from './helpers';

export const calcDayHoursInMonth = (
  groupedEntries: TodosByMonthType,
  year = 2025,
) => {
  return Object.entries(groupedEntries).reduce(
    (accMonths, [monthName, todosByCategory]) => {
      const monthDate = new Date(`${monthName} 1, ${year}`);
      const daysInMonth = getDaysInMonth(monthDate);

      const hoursPerDayInMonth = totalDayInMonth(
        todosByCategory,
        daysInMonth,
        year,
        monthDate,
      );

      accMonths[monthName] = hoursPerDayInMonth;
      return accMonths;
    },
    {} as Record<string, DayHoursInMonthType>,
  );
};
