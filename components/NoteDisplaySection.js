import { View } from 'react-native';
import PlayButton from './buttoncomponent/PlayButton';
import NoteMonitor from './NoteMonitor';
import HarmonySelectButton from './buttoncomponent/HarmonySelectButton';

export default function NoteDisplaySection()
{
    return(
        <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
            <View style={{flexDirection: "row", height: "40%", width: "90%", margin: 5}}>
                <PlayButton/>
                <NoteMonitor/>
            </View>

            <View style={{flexDirection: "row", height: "40%", width: "90%", margin: 5}}>
                <PlayButton/>
                <NoteMonitor/>
                <HarmonySelectButton/>
            </View>     
        </View>
    )
}