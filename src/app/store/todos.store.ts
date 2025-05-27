import { createEffect, createEvent, createStore, sample } from 'effector';
import { waitFn } from '@/shared/utils';
import type { TodosByMonthType, TodosType } from '@/app/lib/types/types.ts';
import { timeLogEntriesFetchRoute } from '@/app/lib/consts/endpoints.ts';
import { initialTodosByMonth } from '@/app/lib/consts/initStateStore.ts';
import { monthlyCategoryHours } from '@/app/lib/utils/todosCalculations/monthlyCategoryHours/monthlyCategoryHours.ts';
import { groupTodosByMonth } from '@/app/lib/utils/todosCalculations/groupTodosByMonth/groupTodosByMonth.ts';
import { calcDayHoursInMonth } from '@/app/lib/utils/todosCalculations/calcDayHoursInMonth/calcDayHoursInMonth.ts';
import { totalMonthHours } from '@/app/lib/utils/todosCalculations/totalMonthHours/totalMonthHours.ts';

export const fetchTodosFx = createEffect<void, TodosType[], Error>(async () => {
  await waitFn(2000, 3000);
  const response = await fetch(timeLogEntriesFetchRoute);

  if (!response.ok) {
    throw new Error(`Failed to fetch ${response.statusText}`);
  }

  return response.json();
});

export const $todos = createStore<TodosType[]>([]).on(
  fetchTodosFx.doneData,
  (_, todos) => todos,
);

export const $groupTodosByMonth = createStore<TodosByMonthType>(
  initialTodosByMonth,
).on(fetchTodosFx.doneData, (_, todosByCategory) =>
  groupTodosByMonth(todosByCategory),
);

export const $totalMonthlyHoursByCategories = $groupTodosByMonth.map(
  (groupedEntries) => monthlyCategoryHours(groupedEntries),
);

export const $dayHoursInMonth = $groupTodosByMonth.map((groupedEntries) => {
  return calcDayHoursInMonth(groupedEntries);
});

export const $totalDaysHoursInMonth = $dayHoursInMonth.map(
  (dayHoursInMonth) => {
    return totalMonthHours(dayHoursInMonth);
  },
);

export const $isLoading = fetchTodosFx.pending;

export const $error = createStore<string | null>(null)
  .on(fetchTodosFx.failData, (_, error) => error.message)
  .reset(fetchTodosFx);

export const fetchTimeLogs = createEvent();

sample({
  clock: fetchTimeLogs,
  target: fetchTodosFx,
});
