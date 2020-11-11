import 'react-native-gesture-handler';
import * as React from 'react';
import {View, TouchableOpacity,Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from './src/components/Home'
import MyProfile from './src/components/MyProfile'
import Login from './src/components/Login'
import SignUp from './src/components/SignUp'
// Import Custom Sidebar
import SideNav from './src/components/SideNav'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        // For setting Custom Sidebar Menu
        drawerContent={(props) => <SideNav {...props} />}>
        <Drawer.Screen
          name="Home"
          options={{
            drawerLabel: 'Home page Option',
            // Section/Group Name
            groupName: 'Section 1',
            activeTintColor: '#e91e63',
          }}
          component={Home}
        />
        <Drawer.Screen
          name="My Profile"
          options={{
            drawerLabel: 'My Profile page Option',
            // Section/Group Name
            groupName: 'Section 2',
            activeTintColor: '#e91e63',
          }}
          component={MyProfile}
        />
        <Drawer.Screen
          name="Login"
          options={{
            drawerLabel: 'Login page Option',
            // Section/Group Name
            groupName: 'Section 2',
            activeTintColor: '#e91e63',
          }}
          component={Login}
        />
         <Drawer.Screen
          name="SignUp"
          options={{
            drawerLabel: 'SignUp page Option',
            // Section/Group Name
            groupName: 'Section 2',
            activeTintColor: '#e91e63',
          }}
          component={SignUp}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;