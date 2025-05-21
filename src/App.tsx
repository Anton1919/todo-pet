import s from './App.module.scss';
import { format, getDaysInMonth } from 'date-fns';
import { useEffect, useRef } from 'react';

const now = new Date();
const currentYear = now.getFullYear();
const currentMonth = now.getMonth();
const currentDate = now.getDate();

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

const tasks = [
  { id: '1', title: 'Development' },
  { id: '2', title: 'Testing' },
  { id: '3', title: 'Planning' },
];

export function App() {
  const days = getMonthDays(currentYear, currentMonth);
  const todayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (todayRef?.current) {
      todayRef.current.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
      });
    }
  }, []);
  return (
    <div className={s.tableWrapper}>
      {/* Header */}
      <div className={s.tableRow}>
        <div className={s.taskTitleSticky}>Task</div>
        <div className={s.daysRow}>
          {days.map(({ dayNum, dayTitle }) => {
            console.log(currentDate === dayNum);
            return (
              <div
                className={s.dayCell}
                key={dayNum}
                ref={currentDate === dayNum ? todayRef : null}
              >
                <span className={s.dayNum}>{dayNum}</span>
                <span className={s.dayTitle}>{dayTitle}</span>
              </div>
            );
          })}
        </div>
        <div className={s.totalSticky}>Total</div>
      </div>
      {/* Task rows */}
      {tasks.map((task) => (
        <div className={s.tableRow} key={task.id}>
          <div className={s.taskTitleSticky}>{task.title}</div>
          <div className={s.daysRow}>
            {days.map(({ dayNum }) => (
              <div className={s.dayCell} key={dayNum}>
                <span>-</span>
              </div>
            ))}
          </div>
          <div className={s.totalSticky}>-</div>
        </div>
      ))}
      {/* Total row */}
      <div className={s.tableRow}>
        <div className={s.taskTitleSticky}>Total</div>
        <div className={s.daysRow}>
          {days.map(({ dayNum }) => (
            <div className={s.dayCellTotal} key={dayNum}>
              <span>0</span>
            </div>
          ))}
        </div>
        <div className={s.totalSticky}>0</div>
      </div>
    </div>
  );
}
