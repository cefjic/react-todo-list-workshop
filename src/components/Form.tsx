import React, { FC, FormEvent, useState } from 'react';

import { Button, Input } from '@proprioo/salatim';

import { FormLayout } from './App.styles';

interface OwnProps {
  addTask(content: string): void;
}

const Form: FC<OwnProps> = ({ addTask }) => {
  const [content, setContent] = useState<string>('');

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    addTask(content);
    setContent('');
  };

  return (
    <FormLayout onSubmit={onFormSubmit}>
      <Input
        label="Nouvelle tache"
        disabled={false}
        error={false}
        notched={!!content}
        value={content}
        onChange={(value) => setContent(value)}
      />
      <Button type={'submit'} label="Ajouter" />
    </FormLayout>
  );
};

export default Form;
