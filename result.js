import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Result = ({route,navigation}) => {
    const {score} = route.params
    // console.log(params)
    const resultBanner = score>40?'https://img.freepik.com/free-vector/successful-business-man-holding-trophy_1150-35042.jpg?size=626&ext=jpg&ga=GA1.2.2082863452.1674221015&semt=sph':'https://img.freepik.com/free-vector/hand-drawn-bankruptcy-concept_52683-36166.jpg?size=338&ext=jpg&ga=GA1.1.2082863452.1674221015&semt=sph'
  return (
    <View style={styles.container}>
        
      <Text style={{alignSelf:'center',
    backgroundColor:'yellow',color:'black',paddingHorizontal:40,borderRadius:10,fontWeight:'bold',fontSize:20}}>Result</Text>
      <Text style={{alignSelf:'center',
    backgroundColor:'yellow',color:'black',padding:10,paddingHorizontal:40,marginTop:30,borderRadius:10,fontWeight:'bold',fontSize:20}}>{score}</Text>
      <Image style={styles.image} source={{uri:resultBanner}}/>
      <TouchableOpacity onPress={()=>{navigation.navigate('Home')}}><Text style={{alignSelf:'center',
    backgroundColor:'yellow',color:'black',padding:10,paddingHorizontal:40,marginTop:30,borderRadius:10,fontWeight:'bold',fontSize:20}}>Back To Home</Text></TouchableOpacity>
    </View>
  )
}

export default Result

const styles = StyleSheet.create({
    container:{
        paddingTop:50,
        backgroundColor:'black',
        height:'100%'
    },
    image:{
        height:300,
        width:300,
        alignSelf:'center',
        marginTop:50

    }
})