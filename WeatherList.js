import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { Text, View,StyleSheet,ScrollView ,Image} from 'react-native'





const WeatherList = () => {

    return (
        <ScrollView style-={styles.scrollView}>
           
            <CurrentTemp />
        </ScrollView>
    )
}

const CurrentTemp = () => {
    


    const img = {uri: 'http://openweathermap.org/img/wn/10d@2x.png'}
    let [data,setData] = useState({});
    let [isLoading,setIsLoading] = useState(false)

    const fetchData = async () => {
        const resp = await fetch("https://api.openweathermap.org/data/2.5/onecall?lat=43.715889&lon=-79.936501&exclude=hourly,minutely,alerts&units=metric&appid=a20c3bf0f711d326499a1142898d6a87");
        const data = await resp.json();
        setData(data);
        setIsLoading(false);
      };
    
      useEffect(() => {
        fetchData();
      }, []);
    

    return (
        
        <View style={styles.tempData}>
            {/* Weather Image */}
            <View style={styles.container}>
            <Image source={img} style={styles.img}/>
            <View >
                {/* Weather Image   */}
                <Text style={styles.day}>{JSON.stringify()}</Text>
                <Text style={styles.forecast}>{JSON.stringify()}</Text>
            </View>
            {/* Temperature */}
            <Text style={styles.temp}>{JSON.stringify()}&#176;C</Text>
            </View>
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
        flexDirection:'column',
        borderWidth:1,
        borderRadius:10,
        width:400,
        height:75,
    },
    img: {
        width:100,
        height:85,
    },
    temp: {
        color:'red',
        fontSize:20
    },
    day: {
        color:'blue',
        fontSize:15
    },
    forecast:{
        color:'green'
    }

})
  

export default WeatherList;
