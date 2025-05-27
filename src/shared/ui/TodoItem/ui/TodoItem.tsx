import s from './TodoItem.module.scss';
import { memo } from 'react';
import type { TodosType } from '@/app/lib/types/types.ts';

type PropsType = {
  todo: TodosType;
};

export const TodoItem = memo(function TodoItem({ todo }: PropsType) {
  const { title, hours } = todo;
  return (
    <div className={s.todo}>
      <span className={s.title}>{title}</span>
      <span className={s.hours}>{hours}h</span>
    </div>
  );
});
