import 'react-native-gesture-handler';
import * as React from 'react';
import { TextInput } from 'react-native-gesture-handler'
import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList,StyleSheet, Text, View,Image } from 'react-native';
import Axios from 'axios';





const Home = () => {
 
 
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("")
  
    useEffect(() => {
      Axios.get('https://developers.zomato.com/api/v2.1/search?entity_id=1&entity_type=city&q=New%20Delhi&sort=cost&order=desc',
      {
      headers:{'user-key':'7f79883e5acc935e480f048b718f8f0c'}
      }
      )
      .then(({ data }) => {
          setData(data.restaurants)
        })
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []);
  

// For Search option 
    const filteredData = data.filter((item) => {
      return item.restaurant.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
    })



   
    return (
      <View>
         <TextInput style={styles.inputStyle} placeholder=" 🔍 Search..." onChangeText={search=>setSearch(search)}/>
        {isLoading ? <ActivityIndicator /> : (
          <FlatList
            data={filteredData}
            keyExtractor={(item, index) => {
              return index.toString();
            }}
            renderItem={({ item }) => {
              return (
              <View style={{margin:2}}>
                <Image source={item.restaurant.thumb?{uri:item.restaurant.thumb}:null} style={{width: 400, height: 400}}/>
              <Text style={{fontSize:30,color:'red'}}>{item.restaurant.name}</Text>
              <Text style={{fontSize:30,color:`#${item.restaurant.user_rating.rating_color}`}}>Average Rating: {item.restaurant.user_rating.aggregate_rating}</Text>
              <Text>{item.restaurant.location.address}</Text>
              </View>
              )
            }}
          />
        )}
      </View>
    );
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
        heading:{
            fontSize:35,
            alignItems:"center",
            color:"red"
        }
  })

export default Home
