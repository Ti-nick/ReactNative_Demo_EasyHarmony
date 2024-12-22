import { View } from 'react-native';
import RecordingToolButton from './buttoncomponent/RecordingToolButton';

export default function RecordSection()
{
    return(
        <View style={{flex:1, flexDirection: "row"}}>
            <RecordingToolButton>AC</RecordingToolButton>
            <RecordingToolButton>●</RecordingToolButton>
            <RecordingToolButton>⋯</RecordingToolButton>
        </View>
    )
}