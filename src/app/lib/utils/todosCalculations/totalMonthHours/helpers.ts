import type {
  DayHoursInMonthType,
  TotalHoursType,
} from '@/app/lib/types/types.ts';

export const totalDaysHoursInMonth = (
  daysAndHours: DayHoursInMonthType,
): { totalHours: number } => {
  return Object.values(daysAndHours).reduce((acc, { totalHours }) => {
    if (!acc['totalDayHours']) {
      acc['totalDayHours'] = 0;
    }

    acc['totalDayHours'] += totalHours;

    return acc;
  }, {} as TotalHoursType);
};
