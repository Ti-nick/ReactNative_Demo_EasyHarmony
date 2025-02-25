import { Dimensions, View } from "react-native";
import Key from "./Key";
import styles from './styles.js';

const screenWidth = Dimensions.get('window').width;

export default function Keyboard({octave, setNoteRecorder}) {
    const naturalNotes = ["C", "D", "E", "F", "G", "A", "B"]
    const accidentalNotes = ["C#", "D#", null, "F#", "G#", "A#", null]

    const naturalKeyWidth = screenWidth / 7;
    const accidentalKeysize = naturalKeyWidth * 0.7;

    return (
        <View style={styles.keyboardWrapper}>
            {naturalNotes.map((note) => {
                return <Key key={note} accidental={false} active={false} setNoteRecorder={setNoteRecorder}>{note + octave}</Key>
            })}
            {accidentalNotes.map((note, index) => {
                const accidentalKeyPosition = naturalKeyWidth * (index + 1) - (accidentalKeysize / 2)
                if (note)
                return <Key key={index} accidentalKeyPosition={accidentalKeyPosition} accidentalKeyWidth={accidentalKeysize} accidental={true} active={false} setNoteRecorder={setNoteRecorder}>{note + octave}</Key>
            })}
        </View>
    )
}