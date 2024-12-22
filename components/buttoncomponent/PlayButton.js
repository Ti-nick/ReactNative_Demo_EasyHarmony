import { Text, View } from 'react-native';
import { verticalScale} from 'react-native-size-matters';

export default function PlayButton()
{
    return(
        <View style={{aspectRatio: 1, height: '100%', borderWidth: "1.5", borderColor: "black", borderRadius: 6,backgroundColor: "rgb(234, 55, 62)", alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{color: "white", fontSize: verticalScale(12)}}>▶︎</Text>
        </View>
    )
}