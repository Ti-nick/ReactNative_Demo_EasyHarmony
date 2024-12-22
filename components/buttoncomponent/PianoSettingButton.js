import React from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from "react-native";

export default function PianoSettingButton({children}){
    const buttonStyle = [
        styles.keyboardSettingButton,
        children === "-"? styles.leftButton:null,
        children === "+"? styles.rightButton:null,
        children === "Settings"? styles.settingsButton:null,
    ];

    return(
        <View style = {buttonStyle}>
            <Text style = {{fontSize: 2.2, color: "white"}}>{children}</Text>
        </View>
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