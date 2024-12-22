import { TouchableWithoutFeedback, Text, View } from 'react-native';
import styles from './styles.js';

export default function Key({children, accidentalKeyPosition, accidentalKeyWidth, accidental, active}){
    const keyStyle = [
        styles.key,
        accidental ? styles.accidentalKey : styles.naturalKey,
        accidental ? {width: accidentalKeyWidth}:{},
        active && styles.activeKey,
        accidentalKeyPosition !== undefined && {left: accidentalKeyPosition}
    ];

    const noteStyle = [
        styles.noteLabel,
        accidental ? styles.accidentalNoteLabel : styles.naturalNoteLabel,
    ];

 return (
    <TouchableWithoutFeedback>
        <View style = {keyStyle}>
            <View style={styles.noteLabelContainer}>
                <Text style={noteStyle}>{children}</Text>
            </View>
        </View>
    </TouchableWithoutFeedback>
 )

};