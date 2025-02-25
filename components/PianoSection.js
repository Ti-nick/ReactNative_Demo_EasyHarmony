import { View } from 'react-native';
import Keyboard from './Keyboard';
import PianoSettingButton from './buttoncomponent/PianoSettingButton';
import { useState, useEffect } from 'react';

export default function PianoSection()
{
    const [octave, setOctave] = useState(4);

    const octaveHandler = (event) => {
        if(event === "+")
        {
            setOctave(octave + 1);
        }
        else if(event === "-")
        {
            setOctave(octave - 1);
        }
    }

    useEffect(() => {
        console.log(octave);
    }, [octave]);

    return(
        <View style={{flex:6}}>
            {/* Setting Section */}
            <View style = {{flex: 1, flexDirection: "row"}}>
                {/* Octave Section */}
                <View style = {{flexDirection: "row", flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <PianoSettingButton onPress={() => octaveHandler("-")}>-</PianoSettingButton>
                    <PianoSettingButton onPress={() => octaveHandler("+")}>+</PianoSettingButton>
                </View>
                
                {/* Key Adjustment Section */}
                <PianoSettingButton>Settings</PianoSettingButton>
            </View>

            {/* Piano Section */}
            <View style={{flex: 4.5, position: "relative", flexDirection: "row",}}>
                <Keyboard octave={octave}/>
            </View>
            <View style={{flex: 4.5, position: "relative", flexDirection: "row",}}>
                <Keyboard octave={octave + 1}/>
            </View>
            
        </View>
    )
}