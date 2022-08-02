import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { useDataStore } from '../services/dataStore'
 

export default function Editals({data}) {
  const { setSelectedData } = useDataStore()
  const navigation = useNavigation();
  const onSelectItem = () => {
    setSelectedData(data)
    navigation.navigate("Detalhes")
  }
  return (

    <TouchableOpacity onPress={() => onSelectItem()} style={styles.editals}>
        <Text style = {styles.description}>{data.editalsTitle}</Text>
  

    </TouchableOpacity>
    
  )
}

const styles = StyleSheet.create({
    description: {
    paddingHorizontal: 15,
    fontFamily: 'Raleway_500Medium',
    fontSize: 15,
    lineHeight: 22,
    color: '#0D6D1E',
    padding: 4,
    textAlign: 'justify'
    },
    line: {
    },
    editals:{   
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        paddingHorizontal: 15,
        borderBottomWidth: 0.8,
        borderBottomColor: '#E5E5E5',
        marginTop: 5,
        marginLeft: 15,
        
    }


})