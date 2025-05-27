import type {
  DailyTasksCellType,
  TodosByMonthType,
} from '@/app/lib/types/types.ts';
import { todoCategoriesByDaily } from './helpers';

export const getDailyTasksCell = (groupTodosByMonth: TodosByMonthType) => {
  return Object.entries(groupTodosByMonth).reduce(
    (acc, [monthName, todosByCategory]) => {
      if (!acc[monthName]) {
        acc[monthName] = {};
      }

      acc[monthName] = todoCategoriesByDaily(todosByCategory);

      return acc;
    },
    {} as DailyTasksCellType,
  );
};
