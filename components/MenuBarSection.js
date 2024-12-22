import { Text, View } from 'react-native';
import { verticalScale} from 'react-native-size-matters';

export default function MenuBarSection()
{
    return(
        <View style={{flex: 0.6, justifyContent: "center"}}>
            <Text style={{left: verticalScale(20), color:"white", fontSize: verticalScale(14)}}>く</Text>
        </View>
    )
}