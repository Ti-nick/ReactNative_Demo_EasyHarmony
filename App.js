import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import MenuBarSection from './components/MenuBarSection'
import NoteDisplaySection from './components/NoteDisplaySection';
import PianoSection from './components/PianoSection';
import RecordSection from './components/RecordSection';
import { useState, useEffect } from 'react';

export default function App() {

  const [noteRecorder, setNoteRecorder] = useState([]);
  const [noteConverter, setNoteConverter] = useState([]);
  const [songKey, setSongKey] = useState("C");
  const [songMajorMinor, setSongMajorMinor] = useState("Major");

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
