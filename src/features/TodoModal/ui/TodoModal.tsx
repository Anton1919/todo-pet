import { Button, Modal, Typography } from '@mui/material';
import CloseSvg from '@/shared/assets/icons/close.svg';
import s from './TodoModal.module.scss';
import type { ReactNode } from 'react';

type PropsType = {
  title: string;
  formContent: ReactNode;
  isOpen: boolean;
  handleClose: () => void;
  handleAdd: () => void;
};

export const TodoModal = function TodoModal({
  isOpen,
  handleClose,
  formContent,
  title,
  handleAdd,
}: PropsType) {
  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className={s.contentWrapper}>
        <div className={s.titleWrapper}>
          <Typography variant="h6" fontWeight="bold" component="h2">
            {title}
          </Typography>

          <Button onClick={handleClose} sx={{ p: 0, minWidth: 0 }}>
            <span className={s.icon}>
              <CloseSvg />
            </span>
          </Button>
        </div>

        <div className={s.form}>
          <Typography>{formContent}</Typography>
        </div>

        <div className={s.buttonsWrapper}>
          <Button
            size={'small'}
            variant={'contained'}
            color={'error'}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            size={'small'}
            variant={'contained'}
            color={'success'}
            onClick={handleAdd}
          >
            Save
          </Button>
        </div>
      </div>
    </Modal>
  );
};
