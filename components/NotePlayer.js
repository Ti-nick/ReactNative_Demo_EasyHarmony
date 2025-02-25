import { Audio } from 'expo-av';
import { useEffect, useState } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';

export default function NotePlayer(){
    const [sound, setSound] = useState();
    const [status, setStatus] = useState(null);

    async function playSound(props) {
        const note = "C4";

        console.log('Loading Sound');
        try {
            const { sound } = await Audio.Sound.createAsync(
                require(`../assets/${note}.mp3`),
                { shouldPlay: true }
            );
            setSound(sound);
            console.log('Playing Sound');
            // sound.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
            await sound.playAsync();
        } catch (error) {
            console.error('Error loading or playing sound:', error);
        }
    }

    // function onPlaybackStatusUpdate(status) {
    //     setStatus(status);
    //     console.log('Playback Status:', status);
    // }

    useEffect(() => {
        return sound
            ? () => {
                console.log('Unloading Sound');
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);
    
      return (
        <View style={styles.container}>
          <Button title="Play Sound" onPress={playSound} />
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
      padding: 10,
    },
  });