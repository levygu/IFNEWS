import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


import News from '../components/News';
import Editals from '../components/Editals';
import Generals from '../components/Generals';
import { useGetData } from '../services/hooks/useGetData';
export default function Home() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [editals, setEditals] = useState([]);
  const [hotNews, setHotNews] = useState([]);
  const [banners, setBanners] = useState([]);

  const { getEditals, getHotNews, getBanners } = useGetData()
  const callGetData = async () => {
    const editalsResponse = await getEditals();
    const hotNewsResponse = await getHotNews();
    const banners = await getBanners();
    if (!editals.error && !hotNews.error && !banners.error){
      setEditals(editalsResponse)
      setHotNews(hotNewsResponse)
      setBanners(banners)
      setLoading(false)
      
    }
  }
  useEffect(() => {
    callGetData()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView 
    nestedScrollEnabled = {true}
    showsVerticalScrollIndicator = {false}>
    <FlatList 
    nestedScrollEnabled = {true}
    horizontal = {true}
    data = {banners}
    keyExtractor = {item => item.id}
    renderItem = {({item})=> <News data={item} />}
    showsHorizontalScrollIndicator = {false}
    />
    <FlatList
        nestedScrollEnabled = {true}
        ListHeaderComponentStyle= {{flexDirection: 'row', marginBottom:10, alignItems: 'center', paddingHorizontal: 15}}
        ListHeaderComponent={
          <>
      <Text style = {[styles.title, {marginTop: 20}]}>Editais</Text>

          </>
        }
        data={editals}
        keyExtractor = { item => item.id}
        renderItem = {({item})=> <Editals data = {item} />}
        
    />
    
    <View style = {{flexDirection: 'row', marginBottom:10, alignItems: 'center', paddingHorizontal: 15}}>
      <Text style = {[styles.title, {marginTop: 20}]}>Notícias em Destaque</Text>
    </View>
    <FlatList
      nestedScrollEnabled = {true}
      data={hotNews}
      keyExtractor = {item => item.id}
      renderItem = {({item}) => <Generals data = {item}/>}
      
    />
    <TouchableOpacity
    onPress={() => {navigation.navigate("AllNews")}}
    style = {styles.buttonNext}    
    >
    <Text style={styles.textbutton}>
    Ver todas as notícias
    </Text>
    </TouchableOpacity>
    </ScrollView>
    </SafeAreaView>
    
  )
}


const styles = StyleSheet.create({
  header:{
    paddingHorizontal:15,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: 20
  },
  title:{
    fontFamily: 'Raleway_700Bold',
    fontSize: 20,
  },
  container:{
    flex:1,
  },
  buttonNext:{
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    position: 'relative',
    flexDirection: 'row-reverse',
    padding:2,
    justifyContent: 'center',
    borderRadius:10,
    marginRight:'50%',
    marginLeft:10,
    marginBottom:10,
    marginTop: 5,
    shadowOpacity: 10,
    shadowColor: '#fff',
    elevation: 2
  },
  textbutton:{
    color: '#000',
    fontFamily: 'Raleway_700Bold',
    fontSize: 13,
  }

})