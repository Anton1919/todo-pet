import { Table } from '@/features/Table/ui/Table';
import { TableFooter } from '@/features/TableFooter';
import { useDateInfo } from '@/shared/lib/hooks/useDateInfo.ts';
import { TableTasks } from '@/features/TableTasks';
import { TableHeader } from '@/features/TableHeader';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { useEffect } from 'react';
import {
  $groupTodosByCategories,
  $todos,
  $totalMonthlyHoursByCategories,
  fetchTimeLogs,
} from '@/app/store/todos.store.ts';
import { useUnit } from 'effector-react';

export const App = function App() {
  const { currentDate, monthDays } = useDateInfo();
  const todos = useUnit($todos);
  const groupTodosByCategories = useUnit($groupTodosByCategories);
  const totalMonthlyHoursByCategories = useUnit($totalMonthlyHoursByCategories);

  useEffect(() => {
    fetchTimeLogs();
  }, []);

  console.log(todos);
  console.log(groupTodosByCategories);
  console.log(totalMonthlyHoursByCategories);

  return (
    <>
      <ThemeSwitcher />
      <Table
        headerSlot={
          <TableHeader monthDays={monthDays} currentDate={currentDate} />
        }
        tasksSlot={<TableTasks monthDays={monthDays} />}
        footerSlot={<TableFooter monthDays={monthDays} />}
      />
    </>
  );
};
