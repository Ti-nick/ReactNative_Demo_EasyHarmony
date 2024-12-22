import React from 'react';
import { Text, View } from 'react-native';

export default function RecordingToolButton({children})
{
    return(
        <View style={{flex:1, backgroundColor: "rgb(85,85,85)", borderWidth: "1.5", borderColor: "rgb(24,24,24)", borderRadius: 6, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{color:"white", fontSize: 3}}>{children}</Text>
        </View>
    )
}