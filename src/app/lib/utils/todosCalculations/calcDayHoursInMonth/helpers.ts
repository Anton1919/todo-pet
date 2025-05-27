import { parse } from 'date-fns';
import type {
  DayHoursInMonthType,
  TodosByCategoryType,
  TodosType,
} from '@/app/lib/types/types.ts';

export const totalDayInMonth = (
  todosByCategory: TodosByCategoryType,
  daysInMonth: number,
  year: number,
  monthDate: Date,
) => {
  return Array.from({ length: daysInMonth }, (_, idx) => {
    return idx + 1;
  }).reduce((accDays, dayNumber) => {
    const allTodosForMonth: TodosType[] = Object.values(todosByCategory).flat();

    const totalHoursForDay = allTodosForMonth
      .filter((todo) => {
        const todoDate = parse(todo.date, 'dd.MM.yyyy', new Date());
        return (
          todoDate.getFullYear() === year &&
          todoDate.getMonth() === monthDate.getMonth() &&
          todoDate.getDate() === dayNumber
        );
      })
      .reduce((sum, todo) => sum + todo.hours, 0);

    accDays[String(dayNumber)] = {
      totalDayHours: totalHoursForDay,
    };

    return accDays;
  }, {} as DayHoursInMonthType);
};
