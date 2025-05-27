import type {
  DayHoursInMonthType,
  TotalDayHoursType,
} from '@/app/lib/types/types.ts';

export const totalDaysHoursInMonth = (
  daysAndHours: DayHoursInMonthType,
): { totalDayHours: number } => {
  return Object.values(daysAndHours).reduce((acc, { totalDayHours }) => {
    if (!acc['totalDayHours']) {
      acc['totalDayHours'] = 0;
    }

    acc['totalDayHours'] += totalDayHours;

    return acc;
  }, {} as TotalDayHoursType);
};
