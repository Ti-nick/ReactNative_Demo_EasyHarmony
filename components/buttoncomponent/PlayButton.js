import React, { useState, useEffect } from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';
import { verticalScale} from 'react-native-size-matters';
import { playNotesSequentially } from '../NotePlayer';

export default function PlayButton({noteObjects})
{
    const [isPress, setIsPress] = useState(false);
    const [sound, setSound] = useState();

    useEffect(() => {
        return sound
            ? () => {
                console.log('Unloading Sound');
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);

    return(
        <Pressable 
            onPressIn={() => setIsPress(true)}
            onPressOut={() => setIsPress(false)}
            onPress={() => playNotesSequentially(noteObjects, setSound)}
            style={[styles.buttonContainer, isPress?{backgroundColor: "rgb(139 34 39)"}:null]}
        >
            <Text style={{color: "white", fontSize: verticalScale(12)}}>▶︎</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    buttonContainer:{
        aspectRatio: 1, 
        height: '100%', 
        borderWidth: "1.5", 
        borderColor: "black", 
        borderRadius: 6,
        backgroundColor: "rgb(234, 55, 62)", 
        alignItems: 'center', 
        justifyContent: 'center'
    },

});