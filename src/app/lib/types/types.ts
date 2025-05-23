export type CategoryType = 'Development' | 'Testing' | 'Planning';

export type TodosType = {
  id: number;
  categoryName: CategoryType;
  title: string;
  description: string;
  hours: number;
  date: string;
};

export type TodosByCategoryType = Record<CategoryType, TodosType[]>;

export type TotalMonthlyHoursByCategoriesType = Record<CategoryType, number>;
