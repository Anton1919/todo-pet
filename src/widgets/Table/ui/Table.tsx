import s from './Table.module.scss';
import { format, getDaysInMonth } from 'date-fns';
import { useEffect, useRef } from 'react';
import clsx from 'clsx';

const tasks = [
  { id: '1', title: 'Development' },
  { id: '2', title: 'Testing' },
  { id: '3', title: 'Planning' },
];

const now = new Date();
const currentYear = now.getFullYear();
const currentMonth = now.getMonth();

const getMonthDays = (year: number, month: number) => {
  const daysInMonth = getDaysInMonth(new Date(year, month, 1));
  const shortFormat = 'EEE';
  return Array.from({ length: daysInMonth }, (_, i) => {
    const date = new Date(year, month, i + 1);
    return {
      dayNum: i + 1,
      dayTitle: format(date, shortFormat),
    };
  });
};

export function Table() {
  const days = getMonthDays(currentYear, currentMonth);
  const currentDate = now.getDate();
  const totalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (totalRef && totalRef.current) {
      totalRef.current.scrollIntoView({ behavior: 'smooth', inline: 'center' });
    }
  }, []);

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

  const tableCellStyles = (isCurrentDate: boolean = false) => {
    return clsx(s['table__day-cell'], {
      [s['table__day-cell--active']]: isCurrentDate,
    });
  };

  const tableTotalStickyStyles = (isGreyBg: boolean = true) => {
    return clsx(s['table__total-sticky'], {
      [s['table__total-sticky--grey']]: isGreyBg,
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

  return (
    <div className={s['table']}>
      <div className={s['table__row']}>
        <h3 className={tableTitleStyles()}>Task</h3>
        <div className={tableDaysStyles()}>
          {days.map(({ dayNum, dayTitle }) => {
            const isCurrent = dayNum === currentDate;
            return (
              <div
                className={tableCellStyles(isCurrent)}
                key={dayNum}
                ref={isCurrent ? totalRef : null}
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

      {tasks.map((task) => (
        <div className={s['table__row']} key={task.id}>
          <div className={tableTitleStyles(false)}>{task.title}</div>
          <div className={tableDaysStyles(false)}>
            {days.map(({ dayNum }) => (
              <div className={s['table__day-cell']} key={dayNum}>
                <span>-</span>
              </div>
            ))}
          </div>
          <h3 className={tableTotalStickyStyles()}>0</h3>
        </div>
      ))}

      <div className={s['table__row']}>
        <div className={tableTitleStyles()}>Total</div>
        <div className={tableDaysStyles()}>
          {days.map(({ dayNum }) => (
            <div className={s['table__day-cell']} key={dayNum}>
              <span className={s['table__day-cell-num']}>0</span>
            </div>
          ))}
        </div>
        <h3 className={tableTotalStickyStyles()}>0</h3>
      </div>
    </div>
  );
}
