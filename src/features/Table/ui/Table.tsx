import { memo, type ReactNode } from 'react';
import s from './Table.module.scss';

type PropsType = {
  headerSlot?: ReactNode;
  tasksSlot?: ReactNode;
  footerSlot?: ReactNode;
};

export const Table = memo(function Table({
  headerSlot,
  tasksSlot,
  footerSlot,
}: PropsType) {
  return (
    <div className={s['table']}>
      {headerSlot}
      {tasksSlot}
      {footerSlot}
    </div>
  );
});
