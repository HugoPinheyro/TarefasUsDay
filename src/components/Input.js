import React from 'react'
import {View, TextInput, StyleSheet,Text } from 'react-native'




const Input = ({onChangeText, value}) => (
  <View>
    <TextInput  style={styles.input}
     onChangeText={onChangeText}
     placeholder={"Digite uma Tarefa"}
     value={value}
     underlineColorAndroid="#000"

  />


  </View>
)




const styles = StyleSheet.create({
  input:{
    paddingLeft: 15,
    paddingBottom:15,
    backgroundColor: '#ffffff',



  },








})
export default Input
