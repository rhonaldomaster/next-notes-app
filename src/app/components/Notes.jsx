'use client';

import { useState } from 'react';
import NoteList from './NoteList';
import NoteSidebar from './NoteSidebar';

export default function Notes() {
  const [notes, setNote] = useState([]);
  const createNote = (text) => {
    setNote([
      ...notes,
      {
        noteStatus: 'open',
        noteText: text,
        key: notes.length + 1,
        completionDate: null,
      },
    ]);
  };
  const updateNoteStatus = (id, noteNewStatus) => {
    const completedOn =
      noteNewStatus === 'complete'
        ? new Date().toLocaleString('es-co', { timeZone: 'America/Bogota' })
        : '';
    const updatedNotes = notes.map((note) =>
      note.key === id
        ? { ...note, noteStatus: noteNewStatus, completionDate: completedOn }
        : note
    );
    setNote(updatedNotes);
  };

  return (
    <section className="notes">
      <NoteSidebar createNote={createNote} notesList={notes}></NoteSidebar>
      <NoteList notes={notes} updateNoteStatus={updateNoteStatus}></NoteList>
    </section>
  );
}
