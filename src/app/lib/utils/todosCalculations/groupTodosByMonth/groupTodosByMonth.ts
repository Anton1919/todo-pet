import { format, parse } from 'date-fns';
import { enUS } from 'date-fns/locale';
import type { TodosByMonthType, TodosType } from '@/app/lib/types/types.ts';

export const groupTodosByMonth = (newEntries: TodosType[]) => {
  return newEntries.reduce((acc, cur) => {
    const date = parse(cur.date, 'dd.MM.yyyy', new Date());
    const monthName = format(date, 'LLLL', { locale: enUS });
    const categoryKey = cur.categoryName;

    if (!acc[monthName]) {
      acc[monthName] = {};
    }

    if (!acc[monthName][categoryKey]) {
      acc[monthName][categoryKey] = [];
    }

    acc[monthName][categoryKey].push(cur);

    return acc;
  }, {} as TodosByMonthType);
};
