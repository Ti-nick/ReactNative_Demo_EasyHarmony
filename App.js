import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import MenuBarSection from './components/MenuBarSection'
import NoteDisplaySection from './components/NoteDisplaySection';
import PianoSection from './components/PianoSection';
import RecordSection from './components/RecordSection';
import { useState, useEffect } from 'react';
import { preloadSounds } from './components/NotePlayer';

export default function App() {

  const [isReady, setIsReady] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [noteRecorder, setNoteRecorder] = useState([]);
  const [noteConverter, setNoteConverter] = useState([]);
  const [songKey, setSongKey] = useState("C");
  const [songMajorMinor, setSongMajorMinor] = useState("Major");

  useEffect(() => {
    async function loadSounds() {
      // console.log('Preloading sounds...');
      await preloadSounds(setLoadingProgress);
      // console.log('Sounds preloaded!');
      setIsReady(true);
    }
    loadSounds();
  }
  , []);

  if(!isReady){
    return(
      <SafeAreaView style={{flex: 1, backgroundColor: 'rgb(42, 40, 40)', alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{color: 'white', fontSize: 20}}>Loading Sounds...</Text>
        <Text style={{color: 'white', fontSize: 20}}>{loadingProgress}%</Text>
      </SafeAreaView>
    )
  }
  
  return(
    <SafeAreaView style={styles.sectionContainer}>
      {/* Add the StatusBar with light content */}
      <StatusBar barStyle="light-content" backgroundColor="rgb(42, 40, 40)" />

      <MenuBarSection/>
      <NoteDisplaySection noteRecorder={noteRecorder} noteConverter={noteConverter} setNoteConverter={setNoteConverter} songKey={songKey} songMajorMinor={songMajorMinor}/>
      <PianoSection setNoteRecorder={setNoteRecorder} songKey={songKey} setSongKey={setSongKey}/>
      <RecordSection setNoteRecorder={setNoteRecorder}/>
      <View style={{flex: 0.4}}></View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  sectionContainer:{
    flex:1,
    backgroundColor: 'rgb(42, 40, 40)',
  },
});
