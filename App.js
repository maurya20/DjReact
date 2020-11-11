import 'react-native-gesture-handler';
import * as React from 'react';
import {View, TouchableOpacity,Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FirstPage from './src/pages/FirstPage'
import SecondPage from './src/pages/SecondPage'
import ThirdPage from './src/pages/ThirdPage'

// Import Custom Sidebar
import SideNav from './src/components/SideNav'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// const NavigationDrawerStructure = (props) => {
//   //Structure for the navigatin Drawer
//   const toggleDrawer = () => {
//     //Props to open/close the drawer
//     props.navigationProps.toggleDrawer();
//   };

//   return (
//     <View style={{flexDirection: 'row'}}>
//       <TouchableOpacity onPress={toggleDrawer}>
//       <Text>🔑</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };



function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        // For setting Custom Sidebar Menu
        drawerContent={(props) => <SideNav {...props} />}>
        <Drawer.Screen
          name="FirstPage"
          options={{
            drawerLabel: 'First page Option',
            // Section/Group Name
            groupName: 'Section 1',
            activeTintColor: '#e91e63',
          }}
          component={FirstPage}
        />
        <Drawer.Screen
          name="SecondPage"
          options={{
            drawerLabel: 'Second page Option',
            // Section/Group Name
            groupName: 'Section 2',
            activeTintColor: '#e91e63',
          }}
          component={SecondPage}
        />
        <Drawer.Screen
          name="ThirdPage"
          options={{
            drawerLabel: 'Third page Option',
            // Section/Group Name
            groupName: 'Section 2',
            activeTintColor: '#e91e63',
          }}
          component={ThirdPage}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;