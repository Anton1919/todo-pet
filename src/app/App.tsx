import { ThemeSwitcher } from '@/features/ThemeSwitcher/ThemeSwitcher.tsx';
import { Table } from '@/features/Table/ui/Table';

export const App = function App() {
  return (
    <>
      <ThemeSwitcher />
      <Table />
    </>
  );
};
