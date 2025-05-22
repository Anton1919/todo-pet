import { type RefObject, useEffect } from 'react';

export function useTableScrollToCurrentDate(
  ref: RefObject<HTMLDivElement | null>,
  isScrollToCurrentDate: boolean = false,
) {
  useEffect(() => {
    if (!isScrollToCurrentDate) return;

    if (ref?.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
      });
    }
  }, [isScrollToCurrentDate, ref]);
}
