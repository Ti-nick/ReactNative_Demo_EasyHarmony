import { View } from 'react-native';
import PlayButton from './buttoncomponent/PlayButton';
import NoteMonitor from './NoteMonitor';
import HarmonySelectButton from './buttoncomponent/HarmonySelectButton';
import { useEffect } from 'react';
import {getScaleNotes, getHarmonyNotes} from './KeyLogic';


export default function NoteDisplaySection({noteRecorder, noteConverter, setNoteConverter, songKey, songMajorMinor})
{
    useEffect(() => {
        const currentScale = getScaleNotes(songKey, songMajorMinor);
        const harmonyNotes = getHarmonyNotes(noteRecorder, currentScale, 3);
        setNoteConverter(harmonyNotes);
        console.log(noteRecorder);
        console.log(harmonyNotes);
    }, [noteRecorder, songKey, songMajorMinor]);

    return(
        <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
            <View style={{flexDirection: "row", height: "40%", width: "90%", margin: 5}}>
                <PlayButton noteObjects={noteRecorder}/>
                <NoteMonitor noteObjects={noteRecorder}/>
            </View>

            <View style={{flexDirection: "row", height: "40%", width: "90%", margin: 5}}>
                <PlayButton noteObjects={noteConverter}/>
                <NoteMonitor noteObjects={noteConverter}/>
                <HarmonySelectButton/>
            </View>     
        </View>
    )
}