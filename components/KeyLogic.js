// Note: This file contains the logic for the keys and scales
const noteLogic = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

// Function to get the notes in a scale
export function getScaleNotes(key, scale){
  let scaleNotes = [];
  let keyIndex = noteLogic.indexOf(key);
  let scaleIntervals = getScaleIntervals(scale);
  scaleIntervals.forEach(interval => {
    let noteIndex = (keyIndex + interval) % 12;
    scaleNotes.push(noteLogic[noteIndex]);
  });
  return scaleNotes;
}

// Function to get the intervals of a scale
function getScaleIntervals(scale){
  switch(scale){
    case "Major":
      return [0, 2, 4, 5, 7, 9, 11];
    case "Minor":
      return [0, 2, 3, 5, 7, 8, 10];
    default:
      return [];
  }
}

// Function to get the notes in a key
export function getKeyNotes(key){
  let keyNotes = [];
  let keyIndex = noteLogic.indexOf(key);
  for(let i = 0; i < 7; i++){
    let noteIndex = (keyIndex + i) % 12;
    keyNotes.push(noteLogic[noteIndex]);
  }
  return keyNotes;
}

// Function to get the notes in a chord
export function getChordNotes(key, chord){
  let chordNotes = [];
  let keyIndex = noteLogic.indexOf(key);
  let chordIntervals = getChordIntervals(chord);
  chordIntervals.forEach(interval => {
    let noteIndex = (keyIndex + interval) % 12;
    chordNotes.push(noteLogic[noteIndex]);
  });
  return chordNotes;
}

// Function to get the intervals of a chord
function getChordIntervals(chord){
  switch(chord){
    case "Major":
      return [0, 4, 7];
    case "Minor":
      return [0, 3, 7];
    case "Diminished":
      return [0, 3, 6];
    case "Augmented":
      return [0, 4, 8];
    default:
      return [];
  }
}
