import { createEvent, createStore } from 'effector';
import { getDateInfo } from '@/shared/lib/utils/getDateInfo.ts';
import type { MonthNameType } from '@/app/lib/consts/global.ts';
import { $dailyTasksCell, $todos } from '@/app/store/todos.store.ts';
import { format, parse } from 'date-fns';

const { currentYear, currentMonthName } = getDateInfo();

export const setMonth = createEvent<string>();
export const setYear = createEvent<string>();

export const setOpenModal = createEvent<boolean>();
export const $isOpenModal = createStore<boolean>(false).on(
  setOpenModal,
  (_, isOpen) => isOpen,
);

export const $selectedMonth = createStore<string>(currentMonthName).on(
  setMonth,
  (_, month) => month,
);

export const $selectedYear = createStore<string>(String(currentYear)).on(
  setYear,
  (_, year) => year,
);

export const $monthList = $dailyTasksCell.map((dailyTasksCell) => {
  return Object.keys(dailyTasksCell) as MonthNameType[];
});

export const $yearsList = $todos.map((todos) => {
  return Array.from(
    new Set(
      todos.map((todo) =>
        format(parse(todo.date, 'dd.MM.yyyy', new Date()), 'yyyy'),
      ),
    ),
  );
});
