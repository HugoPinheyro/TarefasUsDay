import React from 'react'
import {View, Text, Button, TouchableOpacity} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Details from '../components/Details'

function NextPage({navigation}) {
  return (
    <View>
      <Text>New Page Here</Text>
      <Button title="Next"onPress={() => navigation.navigate('Home')}/>
    </View>
  );
}

export default NextPage
