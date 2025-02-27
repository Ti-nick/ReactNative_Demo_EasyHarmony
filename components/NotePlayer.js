import { Audio } from 'expo-av';
import { useEffect, useState } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';

const noteToFile = {
  "A0": require('../assets/acousticGrandPiano/A0.mp3'),
  "A1": require('../assets/acousticGrandPiano/A1.mp3'),
  "A2": require('../assets/acousticGrandPiano/A2.mp3'),
  "A3": require('../assets/acousticGrandPiano/A3.mp3'),
  "A4": require('../assets/acousticGrandPiano/A4.mp3'),
  "A5": require('../assets/acousticGrandPiano/A5.mp3'),
  "A6": require('../assets/acousticGrandPiano/A6.mp3'),
  "A7": require('../assets/acousticGrandPiano/A7.mp3'),
  "B0": require('../assets/acousticGrandPiano/B0.mp3'),
  "B1": require('../assets/acousticGrandPiano/B1.mp3'),
  "B2": require('../assets/acousticGrandPiano/B2.mp3'),
  "B3": require('../assets/acousticGrandPiano/B3.mp3'),
  "B4": require('../assets/acousticGrandPiano/B4.mp3'),
  "B5": require('../assets/acousticGrandPiano/B5.mp3'),
  "B6": require('../assets/acousticGrandPiano/B6.mp3'),
  "B7": require('../assets/acousticGrandPiano/B7.mp3'),
  "C1": require('../assets/acousticGrandPiano/C1.mp3'),
  "C2": require('../assets/acousticGrandPiano/C2.mp3'),
  "C3": require('../assets/acousticGrandPiano/C3.mp3'),
  "C4": require('../assets/acousticGrandPiano/C4.mp3'),
  "C5": require('../assets/acousticGrandPiano/C5.mp3'),
  "C6": require('../assets/acousticGrandPiano/C6.mp3'),
  "C7": require('../assets/acousticGrandPiano/C7.mp3'),
  "D1": require('../assets/acousticGrandPiano/D1.mp3'),
  "D2": require('../assets/acousticGrandPiano/D2.mp3'),
  "D3": require('../assets/acousticGrandPiano/D3.mp3'),
  "D4": require('../assets/acousticGrandPiano/D4.mp3'),
  "D5": require('../assets/acousticGrandPiano/D5.mp3'),
  "D6": require('../assets/acousticGrandPiano/D6.mp3'),
  "D7": require('../assets/acousticGrandPiano/D7.mp3'),
  "E1": require('../assets/acousticGrandPiano/E1.mp3'),
  "E2": require('../assets/acousticGrandPiano/E2.mp3'),
  "E3": require('../assets/acousticGrandPiano/E3.mp3'),
  "E4": require('../assets/acousticGrandPiano/E4.mp3'),
  "E5": require('../assets/acousticGrandPiano/E5.mp3'),
  "E6": require('../assets/acousticGrandPiano/E6.mp3'),
  "E7": require('../assets/acousticGrandPiano/E7.mp3'),
  "F1": require('../assets/acousticGrandPiano/F1.mp3'),
  "F2": require('../assets/acousticGrandPiano/F2.mp3'),
  "F3": require('../assets/acousticGrandPiano/F3.mp3'),
  "F4": require('../assets/acousticGrandPiano/F4.mp3'),
  "F5": require('../assets/acousticGrandPiano/F5.mp3'),
  "F6": require('../assets/acousticGrandPiano/F6.mp3'),
  "F7": require('../assets/acousticGrandPiano/F7.mp3'),
  "G1": require('../assets/acousticGrandPiano/G1.mp3'),
  "G2": require('../assets/acousticGrandPiano/G2.mp3'),
  "G3": require('../assets/acousticGrandPiano/G3.mp3'),
  "G4": require('../assets/acousticGrandPiano/G4.mp3'),
  "G5": require('../assets/acousticGrandPiano/G5.mp3'),
  "G6": require('../assets/acousticGrandPiano/G6.mp3'),
  "G7": require('../assets/acousticGrandPiano/G7.mp3'),

  "A#1": require('../assets/acousticGrandPiano/A#1.mp3'),
  "A#0": require('../assets/acousticGrandPiano/A#0.mp3'),
  "A#2": require('../assets/acousticGrandPiano/A#2.mp3'),
  "A#3": require('../assets/acousticGrandPiano/A#3.mp3'),
  "A#4": require('../assets/acousticGrandPiano/A#4.mp3'),
  "A#5": require('../assets/acousticGrandPiano/A#5.mp3'),
  "A#6": require('../assets/acousticGrandPiano/A#6.mp3'),
  "A#7": require('../assets/acousticGrandPiano/A#7.mp3'),
  "C#1": require('../assets/acousticGrandPiano/C#1.mp3'),
  "C#2": require('../assets/acousticGrandPiano/C#2.mp3'),
  "C#3": require('../assets/acousticGrandPiano/C#3.mp3'),
  "C#4": require('../assets/acousticGrandPiano/C#4.mp3'),
  "C#5": require('../assets/acousticGrandPiano/C#5.mp3'),
  "C#6": require('../assets/acousticGrandPiano/C#6.mp3'),
  "C#7": require('../assets/acousticGrandPiano/C#7.mp3'),
  "D#1": require('../assets/acousticGrandPiano/D#1.mp3'),
  "D#2": require('../assets/acousticGrandPiano/D#2.mp3'),
  "D#3": require('../assets/acousticGrandPiano/D#3.mp3'),
  "D#4": require('../assets/acousticGrandPiano/D#4.mp3'),
  "D#5": require('../assets/acousticGrandPiano/D#5.mp3'),
  "D#6": require('../assets/acousticGrandPiano/D#6.mp3'),
  "D#7": require('../assets/acousticGrandPiano/D#7.mp3'),
  "F#1": require('../assets/acousticGrandPiano/F#1.mp3'),
  "F#2": require('../assets/acousticGrandPiano/F#2.mp3'),
  "F#3": require('../assets/acousticGrandPiano/F#3.mp3'),
  "F#4": require('../assets/acousticGrandPiano/F#4.mp3'),
  "F#5": require('../assets/acousticGrandPiano/F#5.mp3'),
  "F#6": require('../assets/acousticGrandPiano/F#6.mp3'),
  "F#7": require('../assets/acousticGrandPiano/F#7.mp3'),
  "G#1": require('../assets/acousticGrandPiano/G#1.mp3'),
  "G#2": require('../assets/acousticGrandPiano/G#2.mp3'),
  "G#3": require('../assets/acousticGrandPiano/G#3.mp3'),
  "G#4": require('../assets/acousticGrandPiano/G#4.mp3'),
  "G#5": require('../assets/acousticGrandPiano/G#5.mp3'),
  "G#6": require('../assets/acousticGrandPiano/G#6.mp3'),
  "G#7": require('../assets/acousticGrandPiano/G#7.mp3'),
};

export default function NotePlayer(){
    const [sound, setSound] = useState();

    async function playSound(note) {

        console.log('Loading Sound');
        try {
            const { sound } = await Audio.Sound.createAsync(
                noteToFile[note],
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
          <Button title="Play Sound" onPress={() => {playSound("D5")}} />
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