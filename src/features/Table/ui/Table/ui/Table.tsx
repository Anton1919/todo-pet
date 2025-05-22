import s from './Table.module.scss';
import { memo } from 'react';
import { TableHeader } from '@/features/TableHeader/ui';
import { TableTasks } from '@/features/TableTasks';
import { TableFooter } from '@/features/TableFooter';
import { useDateInfo } from '@/shared/lib/hooks/useDateInfo.ts';

export const Table = memo(function Table() {
  const { currentDate, monthDays } = useDateInfo();

  return (
    <div className={s['table']}>
      <TableHeader monthDays={monthDays} currentDate={currentDate} />
      <TableTasks monthDays={monthDays} />
      <TableFooter monthDays={monthDays} />
    </div>
  );
});
