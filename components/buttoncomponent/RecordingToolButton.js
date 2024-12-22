import React from 'react';
import { Text, View } from 'react-native';
import { verticalScale} from 'react-native-size-matters';
import { StyleSheet } from 'react-native';

export default function RecordingToolButton({children})
{

    return(
        <View style={styles.buttonContainer}>
            <Text style={children === "●"? styles.recordingButton:styles.nonRecordingButton}>{children}</Text>
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
    recordingButton:{
        color: "rgb(234, 55, 62)",
        fontSize: verticalScale(25),
    },
    nonRecordingButton:{
        color: "white",
        fontSize: verticalScale(18),
    },
});