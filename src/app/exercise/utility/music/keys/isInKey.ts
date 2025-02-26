import { NoteNumberOrName } from '../notes/NoteNumberOrName';
import { Key } from './Key';
import { Note } from 'tone/Tone/core/type/NoteUnits';
import {
  toNoteName,
  toNoteNumber
} from '../notes/toNoteName';
import { transpose } from '../transpose';
import { getDistanceOfKeys } from './getDistanceOfKeys';

const CMajorFirstOctave: Note[] =  ['C1', 'D1', 'E1', 'F1', 'G1', 'A1', 'B1'];

export function isInKey(note: NoteNumberOrName, key: Key) {
  function transposeToFirstOctave(note: NoteNumberOrName): Note {
    return toNoteName((toNoteNumber(note) - toNoteNumber('C1')) % 12 + toNoteNumber('C1'));
  }
  const noteTransposedToFirstOctave: Note = transposeToFirstOctave(note);
  const distanceOfKeyFromC = getDistanceOfKeys(key, 'C');
  const scaleOfKey: Note[] = transpose(CMajorFirstOctave, distanceOfKeyFromC);
  const scaleOfKeyInFirstOctave = scaleOfKey.map(transposeToFirstOctave);
  return scaleOfKeyInFirstOctave.map(toNoteNumber).includes(toNoteNumber(noteTransposedToFirstOctave));
}
