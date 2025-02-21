import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import MenuBarSection from './components/MenuBarSection'
import NoteDisplaySection from './components/NoteDisplaySection';
import PianoSection from './components/PianoSection';
import RecordSection from './components/RecordSection';
// import FirstAudioTest from './components/FirstAudioTest';

// import { useState } from 'react';

export default function App() {
  // const [recording, setRecording] = useState();
  // const [recordings, setRecordings] = useState([]);

  // async function startRecording(){}
  // async function stopRecording(){}
  // function getDurationFormatted(milliseconds){  }
  // function getRecordingLines(){}
  // function clearRecordings(){}

  return(
    <SafeAreaView style={styles.sectionContainer}>
      {/* Add the StatusBar with light content */}
      <StatusBar barStyle="light-content" backgroundColor="rgb(42, 40, 40)" />

      <MenuBarSection/>
      <NoteDisplaySection/>
      <PianoSection/>
      <RecordSection/>

      <View style={{flex: 0.4}}>
        {/* <FirstAudioTest/> */}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  sectionContainer:{
    flex:1,
    backgroundColor: 'rgb(42, 40, 40)',
  },
});
