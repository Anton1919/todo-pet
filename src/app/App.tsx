import { Table } from '@/features/Table/ui/Table';
import { TableFooter } from '@/features/TableFooter';
import { useDateInfo } from '@/shared/lib/hooks/useDateInfo.ts';
import { TableTasks } from '@/features/TableTasks';
import { TableHeader } from '@/features/TableHeader';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';

export const App = function App() {
  const { currentDate, monthDays } = useDateInfo();

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
