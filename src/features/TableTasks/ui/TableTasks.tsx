import clsx from 'clsx';
import { memo } from 'react';
import type { HeaderDays } from '@/shared/lib/utils/getMonthDays.ts';
import s from './TableTasks.module.scss';

export type TaskType = {
  id: string;
  title: string;
};

const tasks: TaskType[] = [
  { id: '1', title: 'Development' },
  { id: '2', title: 'Testing' },
  { id: '3', title: 'Planning' },
];

type PropsType = {
  monthDays: HeaderDays[];
};

export const TableTasks = memo(function TableTasks({
  monthDays = [],
}: PropsType) {
  const tableTitleStyles = (isBold: boolean = true) => {
    return clsx(s['table__title'], {
      [s['table__title--bold']]: isBold,
    });
  };

  const tableDaysStyles = (isGreyBg: boolean = true) => {
    return clsx(s['table__days'], {
      [s['table__days--grey']]: isGreyBg,
    });
  };

  const tableTotalStickyStyles = (isGreyBg: boolean = true) => {
    return clsx(s['table__total-sticky'], {
      [s['table__total-sticky--grey']]: isGreyBg,
    });
  };

  return (
    <>
      {tasks.map((task) => (
        <div className={s['table__row']} key={task.id}>
          <div className={tableTitleStyles(false)}>{task.title}</div>
          <div className={tableDaysStyles(false)}>
            {monthDays.map(({ dayNum }) => {
              return (
                <div className={s['table__day-cell']} key={dayNum}>
                  <span>-</span>
                </div>
              );
            })}
          </div>
          <h3 className={tableTotalStickyStyles()}>0</h3>
        </div>
      ))}
    </>
  );
});
