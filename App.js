import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Raleway_700Bold, Raleway_600SemiBold, Raleway_500Medium, Raleway_800ExtraBold} from '@expo-google-fonts/raleway';
import Routes from './src/router';



export default function App() {



  let [fontsLoaded] = useFonts({
    Raleway_700Bold,
    Raleway_600SemiBold,
    Raleway_500Medium,
    Raleway_800ExtraBold,
  });

  if(!fontsLoaded){
    return <AppLoading/>;
  }
  
  return (
    <>
    <StatusBar style='dark-content' backgroundColor='#000' translucent={false} />
    <Routes/>
    </>
  );


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
}