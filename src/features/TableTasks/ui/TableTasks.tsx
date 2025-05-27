import clsx from 'clsx';
import { memo } from 'react';
import type { HeaderDays } from '@/shared/lib/utils/getMonthDays.ts';
import type { DailyTasksCellType } from '@/app/lib/types/types.ts';
import { DailyTasksCell } from '@/shared/ui/DailyTasksCell';
import { tasks } from '@/features/TableTasks/model/consts/table-tasks.ts';
import s from './TableTasks.module.scss';

type PropsType = {
  monthDays: HeaderDays[];
  groupTodosByMonth: DailyTasksCellType;
};

export const TableTasks = memo(function TableTasks({
  monthDays = [],
  groupTodosByMonth,
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
              const selectedMonth = 'May';
              const category = task.title;
              return (
                <DailyTasksCell
                  key={dayNum}
                  todosList={groupTodosByMonth[selectedMonth][category][dayNum]}
                />
              );
            })}
          </div>
          <h3 className={tableTotalStickyStyles()}>0</h3>
        </div>
      ))}
    </>
  );
});
