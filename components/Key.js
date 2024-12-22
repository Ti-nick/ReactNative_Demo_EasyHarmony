import { Text, View, Pressable } from 'react-native';
import React, { useState } from 'react';
import styles from './styles.js';

export default function Key({children, accidentalKeyPosition, accidentalKeyWidth, accidental, active}){

    const [isPress, setIsPress] = useState(false);

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

 return (
    <Pressable 
        onPressIn={() => setIsPress(true)}
        onPressOut={() => setIsPress(false)}
        style = {keyStyle}
    >
        <View style={styles.noteLabelContainer}>
            <Text style={noteStyle}>{children}</Text>
        </View>
    </Pressable>
 )

};