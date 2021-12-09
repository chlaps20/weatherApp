import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { Text, View,StyleSheet,ScrollView ,Image,FlatList} from 'react-native'


/*

 <View style={styles.tempData}> 
             Weather Image   
                <Image source={img} style={styles.img}/>
                    { Weather Day and main forecase}
                <View>
                    <Text style={styles.day}>{item.current}</Text>
                    <Text style={styles.forecast}>Main Forecase</Text>
                </View>
                    {/* weather Temperature }
                    <Text style={styles.temp}>Temperature&#176;C</Text>
                </View> 
*/


const WeatherList = () => {

    return (
        <View style-={styles.scrollView}>
           
            <CurrentTemp />
        </View>
    )
}

const CurrentTemp = () => {
    
    const img = (icon) => {
      return { uri: `http://openweathermap.org/img/wn/${icon}@2x.png`}
       
    }

    const timeConversion = (day) => {
        var a = new Date(day * 1000);
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
       
        return date + " / " + month + " / " + year;
    }

    let [data,setData] = useState({});
    let [isLoading,setIsLoading] = useState(true)

    const fetchData = async () => {
        const resp = await fetch("https://api.openweathermap.org/data/2.5/onecall?lat=43.715889&lon=-79.936501&exclude=hourly,minutely,alerts&units=metric&appid=4a96669b6edfbc0ae2f0b734ab86f8e2")
        const data = await resp.json();
        setData(data);
        setIsLoading(false);
      };
    
      useEffect(() => {
        fetchData();
      }, []);
    

    return (
        

        <View style={styles.container}>

      {isLoading ? <Text>Loading...</Text> : 

        
    (     
           <FlatList
            data={data.daily}
            keyExtractor={(item) => item.weather[0].id}
            style={styles.flatList}
            renderItem={({ item }) => (
                <View style={styles.tempData} key={item.weather[0].id}> 
                {/* Weather image*/}
                <Image source={img(item.weather[0].icon)} style={styles.img}/>
                    {/* Weather Day and main forecase */}
                <View style={{alignItems:'center'}}>
                    
                    <Text style={styles.day}>{timeConversion(item.dt)}</Text>
                    <Text style={styles.forecast}>{item.weather[0].main}</Text>
                </View>
                    {/* weather Temperature */}
                    <Text style={styles.temp}>{Math.floor(item.temp.day)}&#176;C</Text>
                </View> 
            )}
          />

          )}
 
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center'
      },
     
   
    tempData: {
        flex:1,
        flexDirection:'row',
        borderWidth:1,
        borderRadius:10,
        borderColor:'#eee',
        justifyContent:'space-between',
        alignItems:'center',
        width:370,
        height:85,
        margin:10,
        backgroundColor:"#777f8c",
        paddingRight:10
    },
    img: {
        width:100,
        height:85,
    },
    temp: {
        color:'#00bbff',
        fontSize:20
    },
    day: {
        color:'blue',
        fontSize:15,
        textAlign:'center',
        marginBottom:5
    },
    forecast:{
        color:'#1cd48a'
    }

})
  

export default WeatherList;
