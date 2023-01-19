import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Box from './component/Box';
import GreenBox from './component/GreenBox';
import RedBox from './component/RedBox';

function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Woo!</Text>

      <Box message="Blue"/>
      <GreenBox message= "Green"/>
      <RedBox message= "Red"/>

      <StatusBar style="auto" />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
