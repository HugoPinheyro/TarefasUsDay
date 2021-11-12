import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar,View, StyleSheet,
Dimensions, Text, TouchableOpacity } from "react-native";
import TodoListItem from './TodoListItem'
import Datatime from './Datatime'
import DateItem from './DateItem'

function Details({ route, navigation }) {

const { itemId, itemName, itemCor } = route.params;


const data = [
  {id: itemId },
  {name: itemName},
  {color:<Datatime/>},
]
const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
          <Text style={styles.text}>{item.id}</Text>
          <Text style={styles.text}>{item.name}</Text>
          <Text style={styles.text}>{item.color}
          </Text>
      </View>

      )
  }

return (
    <SafeAreaView style={styles.container}>
    <FlatList
    data={data}
    renderItem={renderItem}
    keyExtractor={item => item.id}
    numColumns={2}
    />
    </SafeAreaView>
    );
  }


const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
height: 400
  },
  item: {

    alignItems: "start",
    backgroundColor: 'dodgerblue',
   /*backgroundColor: '#00995c',*/
    flexGrow: 1,
    margin: 5,
    padding: 20,
    flexBasis: 0,

  },
  title: {
    fontSize: 20,
  },
  text: {
      color: "#ffffff"
    }



});

export default Details;
