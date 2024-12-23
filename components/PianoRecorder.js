import { View } from 'react-native';
import React, { useState } from 'react';
import { Piano } from 'react-piano';

const DURATION_UNIT = 0.2;
const DEFAULT_NOTE_DURATION = DURATION_UNIT;

export default function PianoWithRecording({
  playNote,
  stopNote,
  recording,
  setRecording,
  ...pianoProps
}) {

  const [noteDuration, setNoteDuration] = useState(DEFAULT_NOTE_DURATION);
  const [notesRecorded, setNotesRecorded] = useState(false);

  const onPlayNoteInput = (midiNumber) => {
    setNotesRecorded(false);
  };

  const onStopNoteInput = (midiNumber, { prevActiveNotes }) => {
    if (!notesRecorded) {
      recordNotes(prevActiveNotes, noteDuration);
      setNotesRecorded(true);
      setNoteDuration(DEFAULT_NOTE_DURATION);
    }
  };

  const recordNotes = (midiNumbers, duration) => {
    if (recording.mode !== 'RECORDING') {
      return;
    }
    const newEvents = midiNumbers.map((midiNumber) => ({
      midiNumber,
      time: recording.currentTime,
      duration: duration,
    }));
    setRecording({
      events: recording.events.concat(newEvents),
      currentTime: recording.currentTime + duration,
    });
  };

  const activeNotes =
    recording.mode === 'PLAYING'
      ? recording.currentEvents.map((event) => event.midiNumber)
      : null;

  return (
    <View>
      <Piano
        playNote={playNote}
        stopNote={stopNote}
        onPlayNoteInput={onPlayNoteInput}
        onStopNoteInput={onStopNoteInput}
        activeNotes={activeNotes}
        {...pianoProps}
      />
    </View>
  );
}