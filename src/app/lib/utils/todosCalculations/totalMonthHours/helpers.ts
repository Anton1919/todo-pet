import type {
  DayHoursInMonthType,
  TotalHoursType,
} from '@/app/lib/types/types.ts';

export const totalDaysHoursInMonth = (daysAndHours: DayHoursInMonthType) => {
  return Object.values(daysAndHours).reduce((acc, { totalHours }) => {
    if (!acc['totalHours']) {
      acc['totalHours'] = 0;
    }

    acc['totalHours'] += totalHours;

    return acc;
  }, {} as TotalHoursType);
};
