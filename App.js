
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Enter your Name'/>
        <Button title='Add Name'/>
      </View>
      <View style={styles.nameContainer}>
        <Text>Name List..</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
appContainer:{
paddingTop:50,
paddingHorizontal:16,
flex:1
},
inputContainer:{
  flex:1,
  flexDirection:'row',
  justifyContent: 'space-between',
  alignItems:'center',
  borderBottomWidth: 1,
  borderColor: '#ccc',
  marginBottom:24
  
},
textInput:{
  width: '70%',
  borderWidth:1,
  borderColor: '#ccc',
  marginRight:8,
  padding:8
  
},
nameContainer:{
flex:5,
}
});
