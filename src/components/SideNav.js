import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const SideNav = (props) => {
    return (
        <View style={{backgroundColor:"#003333", flex:1}}>
            <Text style={{margin:27, color:"red", fontSize:45}}>RestoApp</Text>
            <TouchableOpacity onPress={() => props.navigation.navigate('Home', { name: 'Home' })}>
                <Text style={{margin:7, color:"white", fontSize:35}}>🏠 Home</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => props.navigation.navigate('My Profile', { name: 'My Profile' })}>
                <Text style={{margin:7, color:"white", fontSize:35}}>👨 My Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => props.navigation.navigate('Login', { name: 'Login' })}>
                <Text style={{margin:7, color:"white", fontSize:35}}> 🔐Login</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => props.navigation.navigate('SignUp', { name: 'SignUp' })}>
                <Text style={{margin:7, color:"white", fontSize:35}}> 📝SignUp</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SideNav
