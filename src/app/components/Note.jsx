'use client';

import { useRef, useState } from 'react';

export default function Note(props) {
  const [status, setStatus] = useState(props.noteStatus ?? 'open');
  const [text] = useState(props.noteText ?? '');
  const [noteKey] = useState(props.id ?? 1);
  const note = useRef();

  const completeTask = () => {
    setStatus('complete');
    props.updateNoteStatus(parseInt(note.current.dataset.key), 'complete');
  };

  return (
    <li className="notes__box notes__list-item" key={noteKey} ref={note} data-key={noteKey}>
      <p>{text}</p>
      {status === 'open' ? (
        <button className="notes__button" type="button" onClick={completeTask}>
          Mark as complete
        </button>
      ) : (
        <p role="status">Completed on {props.completionDate}</p>
      )}
    </li>
  );
}
