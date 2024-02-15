'use client';

import { useEffect, useRef, useState } from 'react';

export default function Note(props) {
  const [status, setStatus] = useState(props.noteStatus ?? 'open');
  const [text] = useState(props.noteText ?? '');
  const [noteKey] = useState(props.id ?? 1);
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  const note = useRef();

  const completeTask = () => {
    setStatus('complete');
    props.updateNoteStatus(parseInt(note.current.dataset.key), 'complete');
  };

  const handleStart = () => {
    setStartTime(props.completionDate);
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  useEffect(() => {
    if (status === 'complete') {
      note.current.classList.add('notes__list-item--complete');
      handleStart();
    }
  }, [status]);

  return (
    <li
      className="notes__box notes__list-item"
      key={noteKey}
      ref={note}
      data-key={noteKey}
    >
      <p className="notes__text">{text}</p>
      {status === 'open' ? (
        <button className="notes__button" type="button" onClick={completeTask}>
          Mark as complete
        </button>
      ) : (
        <p className="notes__status" role="status">Completed {secondsPassed.toFixed(0)}s ago</p>
      )}
    </li>
  );
}
