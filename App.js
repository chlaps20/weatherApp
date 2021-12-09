import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WeatherList from './WeatherList'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Weekly Weather Forecast </Text>
      <WeatherList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#3d4147',
    alignItems: 'center',
    marginTop:50,
  }, 
  title: {
    fontSize:25,
    padding:10,
    textAlign:"center",
    marginBottom:10,
    color:'#fff'
},
});
