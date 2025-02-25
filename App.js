import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import MenuBarSection from './components/MenuBarSection'
import NoteDisplaySection from './components/NoteDisplaySection';
import PianoSection from './components/PianoSection';
import RecordSection from './components/RecordSection';
import NotePlayer from './components/NotePlayer';
import { useState, useEffect } from 'react';

export default function App() {

  const [noteRecorder, setNoteRecorder] = useState([]);
  const [songKey, setSongKey] = useState("C");

  useEffect(() => {
    console.log(noteRecorder);
  }, [noteRecorder]);

  return(
    <SafeAreaView style={styles.sectionContainer}>
      {/* Add the StatusBar with light content */}
      <StatusBar barStyle="light-content" backgroundColor="rgb(42, 40, 40)" />

      <MenuBarSection/>
      <NoteDisplaySection noteRecorder={noteRecorder}/>
      <PianoSection setNoteRecorder={setNoteRecorder} songKey={songKey} setSongKey={setSongKey}/>
      <RecordSection/>
      <NotePlayer/>
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
