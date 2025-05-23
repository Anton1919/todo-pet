import type {
  TotalMonthlyHoursByCategoriesType,
  TodosByCategoryType,
} from '@/app/lib/types/types.ts';

export const initialTodosByCategories: TodosByCategoryType = {
  Development: [],
  Testing: [],
  Planning: [],
};

export const initialTotalMonthlyHoursByCategories: TotalMonthlyHoursByCategoriesType =
  {
    Development: 0,
    Testing: 0,
    Planning: 0,
  };
