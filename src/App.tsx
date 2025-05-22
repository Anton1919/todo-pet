import { useEffect, useRef } from 'react';
import { Table } from '@/widgets/Table';
import { ThemeSwitcher } from '@/features/ThemeSwitcher/ThemeSwitcher.tsx';

export function App() {
  const todayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (todayRef?.current) {
      todayRef.current.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
      });
    }
  }, []);

  return (
    <>
      <ThemeSwitcher />
      <Table />
    </>
  );
}
