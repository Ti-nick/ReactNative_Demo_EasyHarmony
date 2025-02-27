import { View } from 'react-native';
import PlayButton from './buttoncomponent/PlayButton';
import NoteMonitor from './NoteMonitor';
import HarmonySelectButton from './buttoncomponent/HarmonySelectButton';
import {getScaleNotes} from './KeyLogic';

export default function NoteDisplaySection({noteRecorder, songKey})
{
    return(
        <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
            <View style={{flexDirection: "row", height: "40%", width: "90%", margin: 5}}>
                <PlayButton/>
                <NoteMonitor noteRecorder={noteRecorder}/>
            </View>

            <View style={{flexDirection: "row", height: "40%", width: "90%", margin: 5}}>
                <PlayButton/>
                <NoteMonitor noteRecorder={noteRecorder}/>
                <HarmonySelectButton/>
            </View>     
        </View>
    )
}