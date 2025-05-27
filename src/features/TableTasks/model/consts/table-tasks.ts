import type { CategoryType } from '@/app/lib/types/types.ts';

export type TaskType = {
  id: string;
  title: CategoryType;
};

export const tasks: TaskType[] = [
  { id: '1', title: 'Development' },
  { id: '2', title: 'Testing' },
  { id: '3', title: 'Planning' },
];
