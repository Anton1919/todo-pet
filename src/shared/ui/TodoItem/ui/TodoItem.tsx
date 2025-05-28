import s from './TodoItem.module.scss';
import { memo, useState } from 'react';
import type { TodosType } from '@/app/lib/types/types.ts';
import EditSvg from '@/shared/assets/icons/edit.svg';
import DeleteSvg from '@/shared/assets/icons/delete.svg';
import clsx from 'clsx';
import Tooltip from '@mui/material/Tooltip';

type PropsType = {
  todo: TodosType;
};

export const TodoItem = memo(function TodoItem({ todo }: PropsType) {
  const { title, hours } = todo;
  const [isTitleHovered, setIsTitleHovered] = useState(false);
  const statusText = todo.isCompleted ? 'Done' : 'In process';

  const statusLabel = clsx(s.statusLabel, {
    [s.inProgress]: !todo.isCompleted,
    [s.done]: todo.isCompleted,
  });

  return (
    <div className={s.todo}>
      <Tooltip
        title={statusText}
        placement="left"
        arrow
        disableHoverListener={isTitleHovered}
        slotProps={{
          tooltip: {
            sx: {
              fontSize: '0.85rem',
            },
          },
        }}
      >
        <span className={statusLabel} />
      </Tooltip>

      <div className={s.contentWrapper}>
        <Tooltip
          title={title}
          placement="top"
          arrow
          slotProps={{
            tooltip: {
              sx: {
                fontSize: '0.85rem',
              },
            },
          }}
        >
          <span
            className={s.title}
            onMouseEnter={() => setIsTitleHovered(true)}
            onMouseLeave={() => setIsTitleHovered(false)}
          >
            {title}
          </span>
        </Tooltip>
        <span className={s.hours}>{hours}h</span>
      </div>
      <div className={s.iconsWrapper}>
        <Tooltip
          title="Edit"
          placement="top"
          arrow
          slotProps={{
            tooltip: {
              sx: {
                fontSize: '0.85rem',
              },
            },
          }}
        >
          <span
            className={s.editIcon}
            onMouseEnter={() => setIsTitleHovered(true)}
            onMouseLeave={() => setIsTitleHovered(false)}
          >
            <EditSvg />
          </span>
        </Tooltip>
        <Tooltip
          title="Delete"
          placement="top"
          arrow
          onMouseEnter={() => setIsTitleHovered(true)}
          onMouseLeave={() => setIsTitleHovered(false)}
          slotProps={{
            tooltip: {
              sx: {
                fontSize: '0.85rem',
              },
            },
          }}
        >
          <span className={s.deleteIcon}>
            <DeleteSvg />
          </span>
        </Tooltip>
      </div>
    </div>
  );
});
