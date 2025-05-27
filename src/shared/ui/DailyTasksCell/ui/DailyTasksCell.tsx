import clsx from 'clsx';
import s from './DailyTasksCell.module.scss';
import { memo } from 'react';
import type { TodosType } from '@/app/lib/types/types.ts';
import { TodoItem } from '@/shared/ui/TodoItem';

type PropsType = {
  todosList: TodosType[];
};

export const DailyTasksCell = memo(function DailyTasksCell({
  todosList = [],
}: PropsType) {
  const cellStyles = clsx(s['day-cell'], {
    [s['moreThanTwoTask']]: todosList.length > 2,
  });

  return (
    <div className={cellStyles}>
      {todosList.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
});
