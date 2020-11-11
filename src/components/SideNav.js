import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const SideNav = (props) => {
    return (
        <View style={{backgroundColor:"#003333", flex:1}}>
            <Text style={{margin:27, color:"red", fontSize:45}}>Menu</Text>
            <TouchableOpacity onPress={() => props.navigation.navigate('FirstPage', { name: 'FirstPage' })}>
                <Text style={{margin:7, color:"white", fontSize:35}}>🏠Home</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => props.navigation.navigate('SecondPage', { name: 'SecondPage' })}>
                <Text style={{margin:7, color:"white", fontSize:35}}>👨My Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => props.navigation.navigate('ThirdPage', { name: 'ThirdPage' })}>
                <Text style={{margin:7, color:"white", fontSize:35}}> 🔐Login</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => props.navigation.navigate('ThirdPage', { name: 'ThirdPage' })}>
                <Text style={{margin:7, color:"white", fontSize:35}}> 📝SignUp</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SideNav
