import 'react-native-gesture-handler';
import * as React from 'react';
import { TextInput } from 'react-native-gesture-handler'
import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList,StyleSheet, Text, View,Image } from 'react-native';
import Axios from 'axios';





const Home = () => {
 
 
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
  
    useEffect(() => {
      Axios.get('http://jsonplaceholder.typicode.com/users')
        .then(({ data }) => {
          setData(data)
        })
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []);
  
    return (
      <View>
         <TextInput style={styles.inputStyle} placeholder=" 🔍 Search..."/>
        {isLoading ? <ActivityIndicator /> : (
          <FlatList
            data={data}
            keyExtractor={(item, index) => {
              // console.log("index", index)
              return index.toString();
            }}
            renderItem={({ item }) => {
              return (
              <View style={{margin:2}}>
                <Image source={{uri:`https://picsum.photos/200/${item.id+290}`}} style={{width: 400, height: 400}}/>
              <Text style={{fontSize:30,color:'red'}}>{item.name}</Text>
              <Text>{item.username} {item.email}</Text>
              <Text>{item.address.city}</Text>
              </View>
              )
            }}
          />
        )}
      </View>
    );
  };


     
   
//     return (
//         <View>
//             <TextInput style={styles.inputStyle} placeholder=" 🔍 Search..."/>
//             <Text style={styles.heading}>Your Movies List</Text>
//             <FlatList
//           data={data}
//           keyExtractor={(data) => data.id}
//           renderItem={({ item }) => (
//             <Text>{item.title}, {item.releaseYear}</Text>
//           )}
//         />  
//         <Text style={styles.heading}>List of users</Text>
//         <FlatList
//         data={users}
//         keyExtractor={(data) => data.id}
//         renderItem={({item}) => (
//               <Text>{item.name}</Text>
//         )}
//         /> 
        
//         </View>
//     )
// }
 
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
        heading:{
            fontSize:35,
            alignItems:"center",
            color:"red"
        }
  })

export default Home
