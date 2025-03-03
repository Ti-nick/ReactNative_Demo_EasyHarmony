import { Text, View } from 'react-native';
import { verticalScale} from 'react-native-size-matters';
import { StyleSheet } from 'react-native';
import { useEffect } from 'react';

export default function NoteMonitor({noteObjects})
{
    const notesString = noteObjects ? noteObjects.map(item => item.note).join(', ') : '';

    return(
        <View style={styles.monitorContainer}>
            <Text style={styles.text} numberOfLines={1} ellipsizeMode='clip'>
                {notesString}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    monitorContainer:{
        flex: 1, 
        backgroundColor: "rgb(155, 167, 134)", 
        borderTopWidth: 3, 
        borderRightWidth: 3,
        borderColor: "rgb(136, 146, 134)", 
        justifyContent: "center", 
        overflow:"hidden"
    },
    text:{
        fontSize: verticalScale(18), 
        marginLeft: "5%", 
        color: "rgb(76 79 66)"
    }
});