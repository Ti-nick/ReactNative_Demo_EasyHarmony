import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import MenuBarSection from './components/MenuBarSection'
import NoteDisplaySection from './components/NoteDisplaySection';
import PianoSection from './components/PianoSection';
import RecordSection from './components/RecordSection';

export default function App() {

  return(
    <SafeAreaView style={styles.sectionContainer}>
      {/* Add the StatusBar with light content */}
      <StatusBar barStyle="light-content" backgroundColor="rgb(42, 40, 40)" />

      <MenuBarSection/>
      <NoteDisplaySection/>
      <PianoSection/>
      <RecordSection/>

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
