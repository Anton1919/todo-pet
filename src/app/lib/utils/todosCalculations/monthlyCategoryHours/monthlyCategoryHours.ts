import { todosHoursSummary } from './helpers';
import type {
  TodosByMonthType,
  TotalMonthlyHoursType,
} from '@/app/lib/types/types.ts';

export const monthlyCategoryHours = (groupedEntries: TodosByMonthType) => {
  return Object.entries(groupedEntries).reduce(
    (acc, [month, todoByCategory]) => {
      acc[month] = todosHoursSummary(todoByCategory);
      return acc;
    },
    {} as TotalMonthlyHoursType,
  );
};
