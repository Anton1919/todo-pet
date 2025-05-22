import clsx from 'clsx';
import { memo, useRef } from 'react';
import { useTableScrollToCurrentDate } from '@/features/Table/model/lib/hooks/useTableScrollToCurrentDate.ts';
import type { HeaderDays } from '@/shared/lib/utils/getMonthDays.ts';
import s from './TableHeader.module.scss';

type PropsType = {
  monthDays: HeaderDays[];
  currentDate?: number;
};

export const TableHeader = memo(function TableHeader({
  monthDays,
  currentDate,
}: PropsType) {
  const todayRef = useRef<HTMLDivElement | null>(null);

  useTableScrollToCurrentDate(todayRef, true);

  const tableCellStyles = (isCurrentDate: boolean = false) => {
    return clsx(s['table__day-cell'], {
      [s['table__day-cell--active']]: isCurrentDate,
    });
  };

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

  const tableTCellNumStyles = (isCurrentDate: boolean = false) => {
    return clsx(s['table__day-cell-num'], {
      [s['table__day-cell-num--active']]: isCurrentDate,
    });
  };

  const tableTCellTitleStyles = (isCurrentDate: boolean = false) => {
    return clsx(s['table__day-cell-title'], {
      [s['table__day-cell-title--active']]: isCurrentDate,
    });
  };

  const tableTotalStickyStyles = (isGreyBg: boolean = true) => {
    return clsx(s['table__total-sticky'], {
      [s['table__total-sticky--grey']]: isGreyBg,
    });
  };

  return (
    <div className={s['table__row']}>
      <h3 className={tableTitleStyles()}>Tasks</h3>
      <div className={tableDaysStyles()}>
        {monthDays.map(({ dayNum, dayTitle }) => {
          const isCurrent = dayNum === currentDate;
          return (
            <div
              className={tableCellStyles(isCurrent)}
              key={dayNum}
              ref={isCurrent ? todayRef : null}
            >
              <span className={tableTCellNumStyles(isCurrent)}>{dayNum}</span>
              <span className={tableTCellTitleStyles(isCurrent)}>
                {dayTitle}
              </span>
            </div>
          );
        })}
      </div>
      <h3 className={tableTotalStickyStyles(false)}>Total</h3>
    </div>
  );
});
