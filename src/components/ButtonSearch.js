import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
import { Feather } from '@expo/vector-icons'

export default function ButtonSearch({size, focused}){
    return (
        <View style = {[styles.container, { backgroundColor: focused ? '#0D5D1E' : '#0D6D1E' }]}>
            <Feather name='search' size={size} color = {focused ? '#C41400' : '#fff'}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:60,
        height:60,
        borderRadius:30,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        
    }
})