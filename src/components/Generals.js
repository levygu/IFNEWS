import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { useDataStore } from '../services/dataStore'

export default function Generals({data}) {
const { setSelectedData } = useDataStore()
  const navigation = useNavigation();
  const onSelectItem = () => {
    setSelectedData(data)
    navigation.navigate("Generals")
  }
  return (

    <TouchableOpacity onPress={() => onSelectItem()} style={styles.container}>
        <Text style={styles.title}>{data.newsSubtitle}</Text>
        <Text style={styles.description}>
            {data.newsTitle}
        </Text>
        <View style = {styles.wrapper}>
          <Image 
          source={{uri:data.newsImageUrl}}
          />
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingHorizontal: 15,
        borderBottomWidth: 0.8,
        borderBottomColor: '#E5E5E5',
        marginTop: 5,
        marginLeft: 15,
    },
    description:{
        paddingHorizontal: 15,
        fontFamily: 'Raleway_500Medium',
        fontSize: 15,
        lineHeight: 22,
        color: '#0D6D1E',
        justifyContent: 'center',
        padding: 4,
        textAlign: 'justify'
    },
    title:{
        fontFamily: 'Raleway_600SemiBold',
        fontSize: 13,
        lineHeight: 22,
        color: '#C41400',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    wrapper:{
      
    }
})