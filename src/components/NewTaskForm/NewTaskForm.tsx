import { ChangeEvent, FormEvent, useState } from 'react';

import { messages } from '../../messages';
import { InputText } from '../InputText/InputText';

import { CreateButton } from './CreateButton/CreateButton';
import styles from './NewTaskForm.module.css';

interface NewTaskFormProps {
  onAddTask: (task: string) => void;
}

export function NewTaskForm({ onAddTask }: NewTaskFormProps) {
  const [newTaskText, setNewTaskText] = useState<string>('');

  function handleChangeNewTaskInput(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value);
  }

  function handleNewTaskInputInvalid(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity(messages.newTask.input.invalid);
    setNewTaskText(event.target.value);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    setNewTaskText('');
    onAddTask(newTaskText);
  }

  const isNewTaskInputEmpty = newTaskText.length === 0;

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <InputText
        id="new-task-input"
        placeholder={messages.newTask.input.placeholder}
        value={newTaskText}
        onChange={handleChangeNewTaskInput}
        onInvalid={handleNewTaskInputInvalid}
      />

      <CreateButton type="submit" disabled={isNewTaskInputEmpty} />
    </form>
  );
}
