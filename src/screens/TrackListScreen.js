import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const TrackListScreen = () => {
  const navigation = useNavigation()
  return (
    <>
      <Text>Track List Screen</Text>
      <Button
        title='Go to Track Detail'
        onPress={() => navigation.navigate('TrackDetail')}
      />
    </>
  )
}

const styles = StyleSheet.create({})

export default TrackListScreen
