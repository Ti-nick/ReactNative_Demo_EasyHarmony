import React, { useState } from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';
import { verticalScale} from 'react-native-size-matters';

export default function PlayButton()
{
    const [isPress, setIsPress] = useState(false);

    return(
        <Pressable 
            onPressIn={() => setIsPress(true)}
            onPressOut={() => setIsPress(false)}
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