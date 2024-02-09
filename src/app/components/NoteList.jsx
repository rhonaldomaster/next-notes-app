'use client';

import Note from './Note';

export default function NoteList({ notes, updateNoteStatus }) {
  return notes?.length > 0 ? (
    <ul className="notes__list">
      {
        notes?.map((note, index) => (
          <Note
            key={index + 1}
            id={index + 1}
            noteStatus={note.noteStatus}
            noteText={note.noteText}
            updateNoteStatus={updateNoteStatus}
            completionDate={note.completionDate}
          ></Note>
        ))
      }
    </ul>
  ) : (
    <p className="notes__list">There aren't notes</p>
  );
}
