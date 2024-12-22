import { Text, View } from 'react-native';
import { verticalScale} from 'react-native-size-matters';

export default function NoteMonitor()
{
    return(
        <View style={{flex: 1, backgroundColor: "rgb(155, 167, 134)", borderTopWidth: 3, borderRightWidth: 3,borderColor: "rgb(136, 146, 134)", justifyContent: "center", overflow:"hidden"}}>
            <Text style={{fontSize: verticalScale(18), marginLeft: "5%", color: "rgb(76 79 66)"}} numberOfLines={1} ellipsizeMode='clip'>C4 → E5 → D#4 C4 → E5 → D#4 C4 → E5 → D#4 C4 → E5 → D#4</Text>
        </View>
    )
}