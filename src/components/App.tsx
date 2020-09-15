import React, { Fragment, useState } from 'react';
import uniqid from 'uniqid';

import { Container } from '@proprioo/salatim';

import { Count, GlobalStyle, TasksWrapper } from './App.styles';
import Form from './Form';
import Task, { TaskProps } from './Task';

function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [nbRemoved, setNbRemoved] = useState<number>(0);

  const addTask = (content: string) => {
    const id = uniqid();
    setTasks([...tasks, { content, id }]);
  };

  const removeTask = (idToRemove: string) => {
    setTasks(tasks.filter(({ id }) => id !== idToRemove));
  };

  const incrementRemoved = () => {
    setNbRemoved(nbRemoved + 1);
  };

  return (
    <Fragment>
      <GlobalStyle />
      <Container>
        <TasksWrapper>
          {tasks.map((card) => (
            <Task
              {...card}
              onRemove={removeTask}
              incrementRemoved={incrementRemoved}
              key={card.id}
            />
          ))}
        </TasksWrapper>
        <Count>Tâches finies : {nbRemoved}</Count>
        <Form addTask={addTask} />
      </Container>
    </Fragment>
  );
}

export default App;
