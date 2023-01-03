
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.dummyText}>Hello there!!!</Text>
      <Button title='Click Mee'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dummyText:{
    color: 'blue',
    backgroundColor: 'white',
    borderWidth: 2,
    padding: 16,
    margin:16,
    borderColor:'red',
  }
});
