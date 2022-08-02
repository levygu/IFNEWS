import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image} from 'react-native'
import React from 'react'
import { Header } from 'react-native/Libraries/NewAppScreen'
import { useNavigation } from '@react-navigation/native'

export default function Menu() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style = {styles.bigcontainer}>
    <View style = {styles.header}>
    <Text style = {styles.title}> Menu</Text>
    </View>
    <TouchableOpacity
    onPress={() => {navigation.navigate("AllNews")}}
    style = {styles.container}>
      <View style={{paddingHorizontal:5}}>
        <Image
        source={require('../assets/images/newspaper.png')}
        style={{ width: 40, height: 40, resizeMode:'cover'}}/>
      </View>
      <Text style = {styles.textbutton}>Notícias</Text>
    </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 0.24,
    marginRight: '50%',
    backgroundColor: '#fff',
    marginLeft: 20,
    marginTop: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal:10,
    elevation: 10
  },
  bigcontainer: {
    flex:1,
    backgroundColor :'#E5E5E5',
  },
  header: {
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    padding: 5,
    justifyContent: 'center',
    marginHorizontal: 20,
    
  },
  title:{
    fontFamily:'Raleway_800ExtraBold',
    fontSize: 20,
    color:'#000'
  },
  textbutton:{
    fontFamily:'Raleway_600SemiBold',
    fontSize:14,
  }
})

