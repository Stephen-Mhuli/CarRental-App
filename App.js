import { StyleSheet, Text, View } from 'react-native';


import HomeScreen from './screens/HomeScreen';

export default function App() {
  return (
    <View style={styles.container}>
       <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3',
    marginTop: 30,
    marginLeft: 5
  },
});
