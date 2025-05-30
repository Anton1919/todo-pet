import { Button } from '@mui/material';

type PropsType = {
  onClick: (value: boolean) => void;
};

export const AddTodoForm = function AddTodoForm({ onClick }: PropsType) {
  return (
    <Button
      size={'small'}
      variant={'contained'}
      color={'primary'}
      onClick={() => onClick(true)}
    >
      {'Add todo form'}
    </Button>
  );
};
