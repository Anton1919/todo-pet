import type {
  TotalMonthlyHoursByCategoriesType,
  TodosByCategoryType,
  TodosType,
} from '@/app/lib/types/types.ts';
import { initialTotalMonthlyHoursByCategories } from '@/app/lib/consts/initStateStore.ts';

export const groupTodosByCategories = (newEntries: TodosType[]) => {
  return newEntries.reduce((acc, cur) => {
    const key = cur['categoryName'];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(cur);

    return acc;
  }, {} as TodosByCategoryType);
};

export const calculateTotalMonthlyHoursByCategories = (
  groupedEntries: TodosByCategoryType,
) => {
  const totals: TotalMonthlyHoursByCategoriesType =
    initialTotalMonthlyHoursByCategories;

  for (const categoryName in groupedEntries) {
    const key = categoryName as TodosType['categoryName'];
    totals[key] = groupedEntries[key]?.reduce((acc, cur) => acc + cur.hours, 0);
  }
  return totals;
};
