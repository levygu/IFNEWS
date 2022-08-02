import { View, Text } from 'react-native'
import React from 'react'
import { useDataStore } from '../services/dataStore';

export default function() {
  const { selectedData } = useDataStore();
  return (
    <View>
      <Text>{selectedData.editalsDate}</Text>
    </View>
  )
}