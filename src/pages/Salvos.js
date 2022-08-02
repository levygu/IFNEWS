import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

export default function Salvos() {
  return (
    <SafeAreaView style = {styles.allcontent}>
    <View style= {styles.header}>
      <Text style ={styles.title}>Under Maintenance</Text>
    </View>
    <TouchableOpacity
    style= {styles.wrapper}
    
    >
    <Feather name='tool' size={50}  color={'#0D6D1E'}/>
    <View style = {styles.cover}>
    <Text>Voltar para Home</Text>
    </View>
    </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create ({
  title:{
    fontFamily:'Raleway_800ExtraBold',
    fontSize: 20,
    color:'#000'
  },
  header: {
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    
  },
  wrapper: {
    flex: 0.9,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: '50%',
    marginBottom: 10,
  },
  allcontent: {
    flex: 1,
  }
})