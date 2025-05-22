import {
  getMonthDays,
  type HeaderDays,
} from '@/shared/lib/utils/getMonthDays.ts';

type DateInfoType = {
  now: Date;
  currentYear: number;
  currentMonth: number;
  currentDate?: number;
  monthDays: HeaderDays[];
};

export function useDateInfo(): DateInfoType {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();
  const currentDate = now.getDate();
  const monthDays = getMonthDays(currentYear, currentMonth);

  return { monthDays, currentDate, now, currentMonth, currentYear };
}
