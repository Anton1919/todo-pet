import { createEffect, createEvent, createStore, sample } from 'effector';
import { waitFn } from '@/shared/utils';
import { timeLogEntriesFetchRoute } from '@/app/lib/consts/endpoints.ts';
import type { TodosByCategoryType, TodosType } from '@/app/lib/types/types.ts';
import {
  calculateTotalMonthlyHoursByCategories,
  groupTodosByCategories,
} from '@/app/lib/utils/todosCalculations.ts';
import { initialTodosByCategories } from '@/app/lib/consts/initStateStore.ts';

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

export const $groupTodosByCategories = createStore<TodosByCategoryType>(
  initialTodosByCategories,
).on(fetchTodosFx.doneData, (_, todosByCategory) =>
  groupTodosByCategories(todosByCategory),
);

export const $totalMonthlyHoursByCategories = $groupTodosByCategories.map(
  (groupedEntries) => calculateTotalMonthlyHoursByCategories(groupedEntries),
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
