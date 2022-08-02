import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native-gesture-handler';

import { useGetData } from '../services/hooks/useGetData';
import Generals from '../components/Generals';

export default function AllNews() {
    const [loading, setLoading] = useState(true);
    const [generalNews, setGeneralNews] = useState([])
    const { getGeneralNews } = useGetData()
  const callGetData = async () => {
    const generalsNewsResponse = await getGeneralNews();
    if (!generalNews.error){
      setGeneralNews(generalsNewsResponse)
      setLoading(false)
      
    }
  }
  useEffect(() => {
    callGetData()
  }, [])

  return (
      <View>
      <FlatList 
      ListHeaderComponentStyle={styles.header}
      ListHeaderComponent={
        <>
        <Text style = {styles.title}>Notícias do IFTO</Text>
        </>
      }
      showsVerticalScrollIndicator = {false}
      data = {generalNews}
      keyExtractor = {item => item.id}
      style = {{paddingHorizontal: 0, marginLeft: 0,}}
      renderItem = {({item})=> <Generals data = {item}/>}


      />
      </View>
  )
}

const styles = StyleSheet.create({
    header:{
        paddingHorizontal:15,
        marginTop: 10,
        borderBottomWidth: 5,
        borderBottomColor: '#E5E5E5',
        padding: 5,
        marginHorizontal: 15,
        marginRight: 15,
      },
    title:{
        fontFamily: 'Raleway_700Bold',
        fontSize: 20,
      },
})