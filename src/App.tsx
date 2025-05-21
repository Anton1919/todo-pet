import { useEffect, useRef } from 'react';
import { Table } from '@/widgets/Table';

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
      <Table />
    </>
  );
}
