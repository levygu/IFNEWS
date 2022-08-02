import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { useDataStore } from '../services/dataStore'
import { ScrollView } from 'react-native-gesture-handler';

export default function NewsGenerals() {
    const { selectedData } = useDataStore();
    const verificator = selectedData.newsImageUrl;
    let flag = true;
    if (verificator == null){
      flag = false;
    }
  return (
    <ScrollView
    showsVerticalScrollIndicator = {false}>
        <Text style = {styles.title }>{selectedData.newsTitle}</Text>
        <Text style = {styles.subtitle}>{selectedData.newsDescription}</Text>
        <Text style = {styles.underTitle}>Autor(a): {selectedData.newsAuthor} {'\n'}Data: {selectedData.newsDate}</Text>
        
        <Image
        source={{uri: selectedData.newsImageUrl}}
        style = {[styles.cover, {
          height: flag ? 300 : 0,
          width: flag ? '100%' : 0}]}
        />
      <Text style= {styles.newsBody}>{selectedData.newsBody}</Text>
     
    </ScrollView>
  )
}

const styles = StyleSheet.create ({
    newsBody:{
        padding: 15,
        textAlign: "justify",
        fontFamily: 'Raleway_500Medium',
        fontSize: 13,
        lineHeight: 22,

    },
    title: {
        paddingHorizontal: 30,
        alignItems: 'center',
        marginTop:10,
        fontFamily: 'Raleway_700Bold',
        fontSize: 20,
        color: '#0D6D1E',

    },
    cover: {
        flex: 1,
        flexDirection: 'row',
        resizeMode: 'contain',
    },
    underTitle:{
      padding: 5,
      fontFamily: 'Raleway_600SemiBold',
      fontSize: 10,
      color:'blue',
      paddingHorizontal: 25,
    },
    subtitle:{
      fontFamily: 'Raleway_600SemiBold',
      fontSize: 12,
      paddingHorizontal: 25,
      padding: 5,
      color: '#C41400',

    }
})