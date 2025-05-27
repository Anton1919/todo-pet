import type {
  TodosByCategoryType,
  TotalHoursByCategoriesType,
} from '@/app/lib/types/types.ts';

export const todosHoursSummary = (todoByCategory: TodosByCategoryType) => {
  return Object.entries(todoByCategory).reduce(
    (acc, [categoryKey, todoArray]) => {
      acc[categoryKey] = todoArray.reduce((acc, cur) => {
        return acc + cur.hours;
      }, 0);
      return acc;
    },
    {} as TotalHoursByCategoriesType,
  );
};
