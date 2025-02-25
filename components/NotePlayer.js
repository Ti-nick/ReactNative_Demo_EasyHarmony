import { Audio } from 'expo-av';
import { useEffect, useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';

export default function NotePlayer(){
    const [sound, setSound] = useState();

    async function playSound() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync( require('../assets/PianoC4.mp3')
        );
        setSound(sound);
        console.log('Playing Sound');
        await sound.playAsync();
      }
    
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