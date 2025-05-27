import { Table } from '@/features/Table/ui/Table';
import { TableFooter } from '@/features/TableFooter';
import { useDateInfo } from '@/shared/lib/hooks/useDateInfo.ts';
import { TableHeader } from '@/features/TableHeader';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { useEffect } from 'react';
import {
  $dailyTasksCell,
  $dayHoursInMonth,
  $groupTodosByMonth,
  $todos,
  $totalDaysHoursInMonth,
  $totalMonthlyHoursByCategories,
  fetchTimeLogs,
} from '@/app/store/todos.store.ts';
import { useUnit } from 'effector-react';
import { TableTasks } from '@/features/TableTasks';

export const App = function App() {
  const { currentDate, monthDays } = useDateInfo();
  const dailyTasksCell = useUnit($dailyTasksCell);
  const todos = useUnit($todos);
  const totalMonthlyHoursByCategories = useUnit($totalMonthlyHoursByCategories);
  const groupTodosByMonth = useUnit($groupTodosByMonth);
  const dayHours = useUnit($dayHoursInMonth);
  const totalDaysHoursInMonth = useUnit($totalDaysHoursInMonth);

  useEffect(() => {
    fetchTimeLogs();
  }, []);

  return (
    <>
      <ThemeSwitcher />
      <Table
        headerSlot={
          <TableHeader monthDays={monthDays} currentDate={currentDate} />
        }
        tasksSlot={
          <TableTasks
            monthDays={monthDays}
            groupTodosByMonth={dailyTasksCell}
          />
        }
        footerSlot={<TableFooter monthDays={monthDays} />}
      />
    </>
  );
};
