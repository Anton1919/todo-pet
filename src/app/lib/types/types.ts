import type { MonthNameType } from '@/app/lib/consts/global.ts';

export type CategoryType = 'Development' | 'Testing' | 'Planning';

export type TodosType = {
  id: number;
  categoryName: CategoryType;
  title: string;
  description: string;
  hours: number;
  date: string;
  isActive: boolean;
  isCompleted: boolean;
  startedAtTimestamp: string | null;
};

export type TodosByCategoryType = Record<CategoryType, TodosType[]>;

export type TodosByMonthType = Record<MonthNameType, TodosByCategoryType>;

export type TodosByCategoryDayType = Record<
  CategoryType,
  Record<number, TodosType[]>
>;

export type DailyTasksCellType = Record<MonthNameType, TodosByCategoryDayType>;

export type TotalHoursByCategoriesType = Record<CategoryType, number>;

export type TotalMonthlyHoursType = Record<
  MonthNameType,
  TotalHoursByCategoriesType
>;

export type TotalHoursType = { totalHours: number };

export type DayHoursInMonthType = Record<string, TotalHoursType>;
