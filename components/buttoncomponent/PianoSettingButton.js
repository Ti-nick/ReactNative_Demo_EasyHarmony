import React from 'react';
import { Text, View, Pressable, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import { verticalScale} from 'react-native-size-matters';

export default function PianoSettingButton({children, onPress}){
    const [isPress, setIsPress] = useState(false);

    const buttonStyle = [
        isPress? styles.keyboardSettingButtonPressed:styles.keyboardSettingButton,
        children === "-"? styles.leftButton:null,
        children === "+"? styles.rightButton:null,
        children === "Settings"? styles.settingsButton:null,
    ];

    // useEffect(() => {
    //     console.log(isPress);
    // });

    return(
        <Pressable 
            onPress={onPress}
            onPressIn={() => setIsPress(true)}
            onPressOut={() => setIsPress(false)}
            style = {buttonStyle}
        >
                <Text style = {{fontSize: verticalScale(14), color: "white"}}>{children}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    keyboardSettingButton:{
        flex: 1, 
        height: "100%", 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: "rgb(24,24,24)", 
    },
    keyboardSettingButtonPressed:{
        flex: 1, 
        height: "100%", 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: "rgb(0, 0, 0)", 
    },
    leftButton:{
        marginLeft: 10, 
        marginRight:3, 
        borderTopLeftRadius: 6
    },
    rightButton:{
        marginLeft:3, 
        marginRight: 10,
        borderTopRightRadius: 6
    },
    settingsButton:{
        marginRight: 10,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6
    }
});