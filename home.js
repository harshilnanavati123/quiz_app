import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import Title from '../component/title'

const Home = ({navigation}) => {
  return (
    <View style={styles.bannerContainer}>
      <Title/>
      <Image source={{uri:'https://img.freepik.com/free-vector/question-answers-background-with-search-symbol_1017-27388.jpg?size=338&ext=jpg'}}
      style={styles.banner} />
      <TouchableOpacity onPress={()=>{navigation.navigate('Quiz')}}>
<Text style={{fontSize:25,fontWeight:'bold',color:'white',backgroundColor:'blue',
paddingHorizontal:100,paddingVertical:10,borderRadius:20,marginTop:30}}>Start</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    banner:{
        height:300,
        width:300,
    },
    bannerContainer:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'black',
        height:'100%',
    }
})