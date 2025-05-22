import { memo } from 'react';
import s from './TableFooter.module.scss';
import clsx from 'clsx';
import type { HeaderDays } from '@/shared/lib/utils/getMonthDays.ts';

type PropsType = {
  monthDays: HeaderDays[];
};

export const TableFooter = memo(function TableFooter({
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
    <div className={s['table__row']}>
      <div className={tableTitleStyles()}>Total</div>
      <div className={tableDaysStyles()}>
        {monthDays.map(({ dayNum }) => (
          <div className={s['table__day-cell']} key={dayNum}>
            <span className={s['table__day-cell-num']}>0</span>
          </div>
        ))}
      </div>
      <h3 className={tableTotalStickyStyles()}>0</h3>
    </div>
  );
});
