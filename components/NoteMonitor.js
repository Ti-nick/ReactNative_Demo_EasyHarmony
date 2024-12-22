import { Text, View } from 'react-native';

export default function NoteMonitor()
{
    return(
        <View style={{flex: 1, backgroundColor: "rgb(155, 167, 134)", borderTopWidth: 3, borderRightWidth: 3,borderColor: "rgb(136, 146, 134)", justifyContent: "center"}}>
        <Text style={{fontSize: 2.5, left: "5%", color: "rgb(76 79 66)"}}>C4, E5, D#4</Text>
        </View>
    )
}