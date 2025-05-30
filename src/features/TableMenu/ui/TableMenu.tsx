import s from './TableMenu.module.scss';
import { memo, type ReactNode } from 'react';

type PropsType = {
  children: ReactNode;
};

export const TableMenu = memo(function TableMenu({ children }: PropsType) {
  return <div className={s.container}>{children}</div>;
});
