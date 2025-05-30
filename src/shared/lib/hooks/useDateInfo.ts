import {
  getMonthDays,
  type HeaderDays,
} from '@/shared/lib/utils/getMonthDays.ts';
import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';

export type DateInfoType = {
  now: Date;
  currentYear: number;
  currentMonth: number;
  currentDate?: number;
  monthDays: HeaderDays[];
  currentMonthName: string;
};

export function useDateInfo(): DateInfoType {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();
  const currentMonthName = format(now, 'LLLL', { locale: enUS });
  const currentDate = now.getDate();
  const monthDays = getMonthDays(currentYear, currentMonth);

  return {
    monthDays,
    currentDate,
    now,
    currentMonth,
    currentYear,
    currentMonthName,
  };
}
