import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text,StyleSheet,Button } from 'react-native'
import {Feather} from "@expo/vector-icons"
import { TextInput } from 'react-native-gesture-handler'
import Profile from "./src/screens/Profile"



const Home = ({ navigation }) => {
  return (
    <View style={StyleSheet.backgraoundStyle}>
    {/* <Button
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('Profile', { name: 'Jane' })
      }
    /> */}
    {/* <Feather name="Search" /> */}
    <TextInput style={styles.inputStyle} placeholder=" 🔍 Search..."/>
    </View>
  );
};

const styles = StyleSheet.create({
  backgraoundStyle:{
          marginTop:10,
          flex:1
},
      inputStyle: {
        height: 50,
        borderWidth: 2,
        paddingLeft: 10,
        margin: 0,
        borderColor: '#009688',
        backgroundColor: 'gray',
        borderRadius:10,
        fontSize:24
         
      },
})


const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;