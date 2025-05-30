import { getMonthDays } from '@/shared/lib/utils/getMonthDays.ts';
import type { DateInfoType } from '@/shared/lib/hooks/useDateInfo.ts';
import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';

export function getDateInfo(): DateInfoType {
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
