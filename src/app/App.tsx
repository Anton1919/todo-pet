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
  $totalHoursInMonth,
  $totalMonthlyHoursByCategories,
  fetchTimeLogs,
} from '@/app/store/todos.store.ts';
import { useUnit } from 'effector-react';
import { TableTasks } from '@/features/TableTasks';
import s from './App.module.scss';
import { TableMenu } from '@/features/TableMenu';
import {
  $monthList,
  $selectedMonth,
  $selectedYear,
  $yearsList,
  setMonth,
  setOpenModal,
  $isOpenModal,
  setYear,
} from '@/app/store/tableMenu.store.ts';
import { SelectDate } from '@/features/SelectDate';
import { AddTodoForm } from '@/features/AddTodoForm';
import { TodoModal } from '@/features/TodoModal';

export const App = function App() {
  const { currentDate, monthDays } = useDateInfo();
  const dailyTasksCell = useUnit($dailyTasksCell);
  const todos = useUnit($todos);
  const totalMonthlyHoursByCategories = useUnit($totalMonthlyHoursByCategories);
  const groupTodosByMonth = useUnit($groupTodosByMonth);
  const dayHours = useUnit($dayHoursInMonth);
  const totalHoursInMonth = useUnit($totalHoursInMonth);
  const monthList = useUnit($monthList);
  const yearsList = useUnit($yearsList);

  const selectedMonth = useUnit($selectedMonth);
  const selectedYear = useUnit($selectedYear);

  const isOpenModal = useUnit($isOpenModal);

  useEffect(() => {
    fetchTimeLogs();
  }, []);

  const handleOpenModal = (value: boolean) => {
    setOpenModal(value);
  };

  return (
    <div className={s.container}>
      <TodoModal
        isOpen={isOpenModal}
        handleClose={() => setOpenModal(false)}
        handleAdd={() => setOpenModal(false)}
        title={'Create task'}
        formContent={
          'Duis mollis, est non commodo luctus, nisi erat porttitor ligula.\n' +
          '              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.'
        }
      />
      <TableMenu>
        <ThemeSwitcher />
        <AddTodoForm onClick={handleOpenModal} />
        <SelectDate
          selectedValue={selectedMonth}
          itemList={monthList}
          onChange={setMonth}
          label={'Month'}
        />
        <SelectDate
          selectedValue={selectedYear}
          itemList={yearsList}
          onChange={setYear}
          label={'Year'}
        />
      </TableMenu>

      <Table
        headerSlot={
          <TableHeader monthDays={monthDays} currentDate={currentDate} />
        }
        tasksSlot={
          <TableTasks
            monthDays={monthDays}
            selectedMonth={selectedMonth}
            groupTodosByMonth={dailyTasksCell}
            monthlyCategoryHours={totalMonthlyHoursByCategories[selectedMonth]}
          />
        }
        footerSlot={
          <TableFooter
            monthDays={monthDays}
            dayHours={dayHours[selectedMonth]}
            totalHoursInMonth={totalHoursInMonth[selectedMonth]}
          />
        }
      />
    </div>
  );
};
