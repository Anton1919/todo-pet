import type { MONTH_ARRAY } from '@/app/lib/consts/global.ts';

export type CategoryType = 'Development' | 'Testing' | 'Planning';

export type TodosType = {
  id: number;
  categoryName: CategoryType;
  title: string;
  description: string;
  hours: number;
  date: string;
};

export type MonthNameType = (typeof MONTH_ARRAY)[number];

export type TodosByMonthType = {
  [K in MonthNameType]: TodosByCategoryType;
};

export type TodosByCategoryType = Record<CategoryType, TodosType[]>;

export type TotalHoursByCategoriesType = Record<CategoryType, number>;

export type TotalMonthlyHoursType = Record<
  MonthNameType,
  TotalHoursByCategoriesType
>;

export type TotalDayHoursType = { totalDayHours: number };

export type DayHoursInMonthType = Record<string, TotalDayHoursType>;
