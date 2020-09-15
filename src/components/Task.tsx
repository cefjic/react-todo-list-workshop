import React, { FC, useEffect } from 'react';

import { Button, Card } from '@proprioo/salatim';

import { FlexWrapper, TaskContent } from './Task.styles';

export interface TaskProps {
  id: string;
  content: string;
}

interface OwnProps extends TaskProps {
  onRemove(id: string): void;
  incrementRemoved(): void;
}

const Task: FC<OwnProps> = ({ id, content, onRemove, incrementRemoved }) => {
  useEffect(() => {
    return () => {
      incrementRemoved();
    };
  });

  return (
    <Card label={id}>
      <FlexWrapper>
        <TaskContent>{content}</TaskContent>
        <Button label="Finir" onClick={() => onRemove(id)} />
      </FlexWrapper>
    </Card>
  );
};

export default Task;
