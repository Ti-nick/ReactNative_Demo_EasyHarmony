import { View } from 'react-native';
import Keyboard from './Keyboard';
import PianoSettingButton from './buttoncomponent/PianoSettingButton';

export default function PianoSection()
{
    return(
        <View style={{flex:6}}>
            {/* Setting Section */}
            <View style = {{flex: 1, flexDirection: "row"}}>
                {/* Octave Section */}
                <View style = {{flexDirection: "row", flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <PianoSettingButton>-</PianoSettingButton>
                    <PianoSettingButton>+</PianoSettingButton>
                </View>
                
                {/* Key Adjustment Section */}
                <PianoSettingButton>Settings</PianoSettingButton>
            </View>

            {/* Piano Section */}
            <View style={{flex: 4.5, position: "relative", flexDirection: "row",}}>
                <Keyboard octave={4}/>
            </View>
            <View style={{flex: 4.5, position: "relative", flexDirection: "row",}}>
                <Keyboard octave={5}/>
            </View>
            
        </View>
    )
}