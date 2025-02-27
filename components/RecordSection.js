import { Text, View , Pressable} from 'react-native';
import { verticalScale} from 'react-native-size-matters';
import { StyleSheet } from 'react-native';

export default function RecordSection({setNoteRecorder})
{
    return(
        <View style={{flex:1, flexDirection: "row"}}>
            <Pressable onPressOut={() => setNoteRecorder([])} style={styles.acButtonContainer}><Text style={styles.nonRecordingButton}>AC</Text></Pressable>
            <Pressable style={styles.buttonContainer}><Text style={styles.recordingButton}>●</Text></Pressable>
            <Pressable style={styles.buttonContainer}><Text style={styles.nonRecordingButton}>⋯</Text></Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer:{
        flex: 1, 
        backgroundColor: "rgb(85,85,85)", 
        borderWidth: "1.5", 
        borderColor: "rgb(24,24,24)", 
        borderRadius: 6, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    acButtonContainer:{
        flex: 1, 
        backgroundColor: "rgb(255, 154, 39)", 
        borderWidth: "1.5", 
        borderColor: "rgb(24,24,24)", 
        borderRadius: 6, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    recordingButton:{
        color: "rgb(234, 55, 62)",
        fontSize: verticalScale(25),
    },
    nonRecordingButton:{
        color: "white",
        fontSize: verticalScale(18),
    },
});