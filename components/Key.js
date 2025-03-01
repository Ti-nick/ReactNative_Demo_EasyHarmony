import { Text, View, Pressable } from 'react-native';
import React, { useState } from 'react';
import styles from './styles.js';
import { playSound } from './NotePlayer';


export default function Key({children, accidentalKeyPosition, accidentalKeyWidth, accidental, active, setNoteRecorder}) {

    const [isPress, setIsPress] = useState(false);
    const [sound, setSound] = useState();

    const keyStyle = [
        styles.key,
        accidental ? styles.accidentalKey : styles.naturalKey,
        accidental ? {width: accidentalKeyWidth}:{},
        active && styles.activeKey,
        accidentalKeyPosition !== undefined && {left: accidentalKeyPosition},
        isPress ? accidental ? styles.activeAccidentalKey : styles.activeNaturalKey : null
    ];

    const noteStyle = [
        styles.noteLabel,
        accidental ? styles.accidentalNoteLabel : styles.naturalNoteLabel,
    ];

    const handlePress = () => {
        setNoteRecorder((prev) => {
            return [...prev, children];
        });
    }

    const handlePressIn = () => {
        setIsPress(true);
        playSound(children, setSound);
    }

    const handlePressOut = () => {
        setIsPress(false);
        sound.stopAsync();
        sound.unloadAsync();
    }

 return (
    <Pressable 
        onPressIn={() => handlePressIn()}
        onPressOut={() => handlePressOut()}
        onPress={handlePress}
        style = {keyStyle}
    >
        <View style={styles.noteLabelContainer}>
            <Text style={noteStyle}>{children}</Text>
        </View>
    </Pressable>
 )

};