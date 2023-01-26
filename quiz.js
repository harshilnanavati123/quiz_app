import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
const shuffleArray=(array)=> {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  }
const Quiz = ({ navigation }) => {
    const [questions, setQuestion] = useState()
    const [ques, setQues] = useState(0)
    const [options,setOptions]=useState([])
    const [score,setScore]=useState(0)
    const getApi = async () => {
        const url = 'https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986'
        const response = await fetch(url)
        const data = await response.json()
        // console.log(data)
        console.log(data)
        setQuestion(data.results)
        setOptions(shuffleAndFetchOptions(data.results[0]))
    }

    const nextQues = () => {
        setQues(ques + 1)
        setOptions(shuffleAndFetchOptions(questions[ques+1]))
    }
    const prevQues = () => {
        setQues(ques - 1)
        setOptions(shuffleAndFetchOptions(questions[ques-1]))
    }
    useEffect(() => {
        getApi()
    }, [])
    const shuffleAndFetchOptions = (_option)=>{
        const option = [..._option.incorrect_answers]
        option.push([_option.correct_answer])
        shuffleArray(option)
        return option
    }
    const correctOption = (option)=>{
       if(option==questions[ques].correct_answer){
        setScore(score+10)
       }if(ques!==9){
        setQues(ques + 1)
        setOptions(shuffleAndFetchOptions(questions[ques+1]))
       }if(ques===9){
        showResult()
       }
          }
          const showResult = ()=>{
            navigation.navigate('Result', {score:score})
          }
    return (
        <View style={styles.container}>
            {questions && (
                <View style={{ height: '100%' }}>
                    <View style={styles.top}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>
                            Q. {decodeURIComponent(questions[ques].question)}
                        </Text>
                    </View>
                    <View style={styles.options}>
                        <View>
                            <TouchableOpacity style={styles.innerOption} onPress={()=>correctOption(options[0])}><Text style={{ color: 'white', fontSize: 18 }}>
                                1. {decodeURIComponent(options[0])
                                }</Text></TouchableOpacity>
                            <TouchableOpacity style={styles.innerOption} onPress={()=>correctOption(options[1])}><Text style={{ color: 'white', fontSize: 18 }}>
                                2. {decodeURIComponent(options[1])}
                                </Text></TouchableOpacity>
                            <TouchableOpacity style={styles.innerOption} onPress={()=>correctOption(options[2])}><Text style={{ color: 'white', fontSize: 18 }}>
                                3. {decodeURIComponent(options[2])}
                                </Text></TouchableOpacity>
                            <TouchableOpacity style={styles.innerOption} onPress={()=>correctOption(options[3])}><Text style={{ color: 'white', fontSize: 18 }}>
                                4. {decodeURIComponent(options[3])}
                                </Text></TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.bottom}>
                     { ques !== 9 &&  <TouchableOpacity onPress={prevQues} style={styles.bottommost}><Text style={{
                            fontSize: 20, backgroundColor: 'blue', color: 'white',
                            paddingHorizontal: 10, borderRadius: 8, paddingVertical: 7
                        }}>PREV</Text></TouchableOpacity>}

                      {ques !== 9 &&  <TouchableOpacity onPress={nextQues} style={styles.bottommost}><Text style={{
                            fontSize: 20, backgroundColor: 'blue', color: 'white',
                            paddingHorizontal: 10, borderRadius: 8, paddingVertical: 7
                        }}>NEXT</Text></TouchableOpacity>}

                     {ques === 9 &&  <TouchableOpacity onPress={showResult} style={styles.bottommost}><Text style={{
                            fontSize: 20, backgroundColor: 'blue', color: 'white',
                            paddingHorizontal: 10, borderRadius: 8, paddingVertical: 7
                        }}>RESULT</Text></TouchableOpacity>}
                    </View>
                </View>
            )
            }
        </View>

    )
}

export default Quiz

const styles = StyleSheet.create({
    container: {
        height: '100%',
        borderColor: 'black',
        borderWidth: 3,
        backgroundColor: 'white'
    },
    top: {
        paddingTop: 50,
    },
    options: {
        flex: 1,
        paddingTop: 50,
        margin: 20,
        borderColor: 'black',
        borderWidth: 3,
    },
    innerOption: {
        margin: 10,
        backgroundColor: 'blue',
        padding: 5,
        paddingVertical: 10,
        borderRadius: 10
    },
    bottom: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingBottom: 10,
        color: 'white'
    },
    bottommost: {
        backgroundColor: 'blue',
        borderRadius: 5,
        padding: 8,
        paddingHorizontal: 3

    }
})