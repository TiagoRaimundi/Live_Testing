import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const navigation = useNavigation();

const HomePage = () => {
  return (
    <Button title="Começar" onPress={()=>{navigation.navigate('LivePageHost')}}/>
  )
}

export default HomePage

const styles = StyleSheet.create({})