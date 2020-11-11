import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import {Feather} from "@expo/vector-icons"
import { TextInput } from 'react-native-gesture-handler'

const SearchBar = () => {
    return (
        <View>
            <Feather name="Search" style={styles.iconStyle}/>
            <TextInput style={styles.inputStyle} placeholder="Search..."/>
        </View>
    )
}

const styles = StyleSheet.create({
    backgraoundStyle:{
marginTop:10,
height:50,
backgroundColor:"gray",
borderRadius:5,
flexDirection:"row",
marginBottom:10,
marginHorizontal:15

    },
    
        inputStyle: {
            flex:1,
            fontSize:18,
            
        },
        
            iconStyle: {
                fontSize:35,
                alignSelf:"center",
                marginHorizontal:15
            }
})
export default SearchBar
