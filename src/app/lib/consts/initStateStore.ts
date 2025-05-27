import { MONTH_ARRAY } from '@/app/lib/consts/global.ts';
import type { TodosByMonthType } from '@/app/lib/types/types.ts';

export const initialTodosByMonth: TodosByMonthType = MONTH_ARRAY.reduce(
  (acc, month) => {
    acc[month] = { Development: [], Testing: [], Planning: [] };
    return acc;
  },
  {} as TodosByMonthType,
);
