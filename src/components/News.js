import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function News({data}) {
 
  return (
    <View style = {styles.cover}>
      <Image 
      source = {{uri: data.Url}}
      style = {styles.container}

      />
    
    </View>
  )
}



const styles = StyleSheet.create({
  container:{

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  content:{
    width: '100%',
    height: 10,
    backgroundColor: '#3a3939cc',
    flex: 1
  },
  cover:{
    
    width: 412,
    height: 250,
    borderRadius: 10,
    marginTop: 10,
    elevation:2,
    padding: 2,
    marginBottom: 5,
  },
  description:{
    paddingHorizontal: 10,
    fontFamily: 'Raleway_600SemiBold',
    fontSize: 13,
    lineHeight: 20,
    color: '#FFF'
  },
  coverDot:{
    position:'absolute',
    bottom:0,
    flexDirection: 'row',
    alignSelf: 'baseline',
  },
  dotActive:{
    margin: 3,
    color: '#000',

  },
  dot:{
    margin: 3,
    color: '#000',
  }
})