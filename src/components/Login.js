import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text,StyleSheet } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'

const Login = () => {
    return (
        <View style={styles.backgraoundStyle}>
            <TextInput style={styles.inputStyle} placeholder="Enter Email"/>
            <TextInput style={styles.inputStyle} placeholder="Enter Password"/>
            <TouchableOpacity>
                <Text style={styles.submitStyle}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    backgraoundStyle:{
            marginTop:1,
            flex:1,
            backgroundColor:"gray",
  },
        inputStyle: {
          height: 50,
          borderWidth: 2,
          paddingLeft: 10,
          margin: 20,
          borderColor: '#009688',
          backgroundColor: 'white',
          borderRadius:10,
          fontSize:24  
        },
        submitStyle:{
            borderRadius:10,
            fontSize:30,
            borderWidth: 2,
            borderColor: 'cyan',
            marginHorizontal:123,
            paddingLeft:10,
            backgroundColor:"blue",
            color:"white",
           
        }
  })


export default Login
