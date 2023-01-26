import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Title = () => {
  return (
    <View>
      <Text style={styles.title}>Quiz Time Okay?</Text>
    </View>
  )
}

export default Title

const styles = StyleSheet.create({
    title:{
        paddingTop:0,
        fontSize:40,
        fontWeight:'bold',
        color:'black'
    }
})