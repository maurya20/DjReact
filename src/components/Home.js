import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text,StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

const Home = () => {
    return (
        <View>
            <TextInput style={styles.inputStyle} placeholder=" 🔍 Search..."/>
        </View>
    )
}

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

export default Home
