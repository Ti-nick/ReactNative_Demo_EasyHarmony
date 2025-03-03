import { Text, View, Pressable } from 'react-native';
import React, { useState, useRef } from 'react';
import styles from './styles.js';
import { playSound } from './NotePlayer';


export default function Key({children, accidentalKeyPosition, accidentalKeyWidth, accidental, active, setNoteRecorder}) {

    const [isPress, setIsPress] = useState(false);
    const [sound, setSound] = useState();
    let starttime = useRef(0);
    let endtime = useRef(0);

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
        
    }

    const handlePressIn = () => {
        setIsPress(true);
        starttime.current = Date.now();
        setNoteRecorder((prev) => [
            ...prev,
            { note: children, duration: null } // Temporary duration placeholder
        ]);
        console.log('Press Start Time: ', starttime.current);
        playSound(children, setSound);
    }

    const handlePressOut = async () => {
        setIsPress(false);
        if(sound){
            await sound.stopAsync();
            await sound.unloadAsync();
        }
        endtime.current = Date.now();
        let duration = endtime.current - starttime.current;
        setNoteRecorder((prev) => {
            const updatedNotes = [...prev];
            updatedNotes[updatedNotes.length - 1].duration = duration;
            return updatedNotes;
        });
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