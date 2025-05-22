import { format, getDaysInMonth } from 'date-fns';

export type HeaderDays = {
  dayNum: number;
  dayTitle: string;
};

export const getMonthDays = (year: number, month: number): HeaderDays[] => {
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
