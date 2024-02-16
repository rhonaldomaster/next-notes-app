'use client';

import styles from '../page.module.css';
import '../components/notes.css';
import Note from '../components/Note';
import { useSearchParams } from 'next/navigation';

export default function NoteDetail() {
  const searchParams = useSearchParams();
  const completionDate = searchParams.get('completion') ? new Date(parseInt(searchParams.get('completion'))) : null;

  return (
    <main className={styles.main}>
      <Note
        key={searchParams.get('id') ?? 1}
        id={searchParams.get('id') ?? 1}
        noteStatus={searchParams.get('status')}
        noteText={searchParams.get('text')}
        completionDate={completionDate}
      ></Note>
    </main>
  );
}
