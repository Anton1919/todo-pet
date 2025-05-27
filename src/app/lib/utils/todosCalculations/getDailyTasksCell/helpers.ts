import type {
  TodosByCategoryDayType,
  TodosByCategoryType,
  TodosType,
} from '@/app/lib/types/types.ts';
import { getDate, parse } from 'date-fns';

const createKeysForDailyTodo = (todos: TodosType[]) => {
  return todos.reduce(
    (acc, todo) => {
      const date = parse(todo.date, 'dd.MM.yyyy', new Date());
      const dayNum = getDate(date);

      if (!acc[dayNum]) {
        acc[dayNum] = [];
      }

      acc[dayNum].push(todo);

      return acc;
    },
    {} as Record<number, TodosType[]>,
  );
};

export const todoCategoriesByDaily = (todosByCategory: TodosByCategoryType) => {
  return Object.entries(todosByCategory).reduce(
    (acc, [categoryName, todos]) => {
      if (!acc[categoryName]) {
        acc[categoryName] = [];
      }

      acc[categoryName] = createKeysForDailyTodo(todos);

      return acc;
    },
    {} as TodosByCategoryDayType,
  );
};
