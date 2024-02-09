'use client';

import { useRef } from 'react';

export default function NoteSidebar({ createNote, notesList = [] }) {
  const taskDescription = useRef();
  const remainingTasks = notesList.filter((note) => note.noteStatus === 'open');
  const completedTasks = notesList.filter(
    (note) => note.noteStatus === 'complete'
  );

  const submitAction = (e) => {
    e.preventDefault();
    createNote(taskDescription.current.value);
    taskDescription.current.value = '';
  };

  return (
    <aside className="notes__box notes__sidebar">
      <form onSubmit={submitAction}>
        <label htmlFor="taskDescription" className="notes__sidebar-label">Task description</label>
        <textarea
          name="taskDescription"
          id="taskDescription"
          className="notes__sidebar-input"
          cols="30"
          rows="10"
          ref={taskDescription}
        ></textarea>
        <button className="notes__button">Add task</button>
      </form>
      <div className="notes__sidebar-information">
        <h3 className="notes__sidebar-status">Remaining tasks</h3>
        <p className="notes__sidebar-counter">{remainingTasks.length}</p>
        <h3 className="notes__sidebar-status">Completed tasks</h3>
        <p className="notes__sidebar-counter">{completedTasks.length}</p>
      </div>
    </aside>
  );
}
