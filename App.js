import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function App() {
    return (
        <View style={styles.main}>
            <View style={styles.one}>

                <View><Text style={styles.text1} >TODO APP</Text></View>
                <TouchableOpacity style={styles.button} onPress={() => console.log('Button Pressed')}>
                    <View >
                        <Text style={styles.buttonText} >+</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.two}>

            </View>



        </View>
    )
}

const styles = StyleSheet.create({
    text1: {
        color: '#FFF',
        fontFamily: 'Jost-normal',
        fontSize: 24,
        fontStyle: 'normal',
        fontWeight: '600',
        padding: 10,

    }, one: {
        flex: 0,
        backgroundColor: '#9395D3',
        flexDirection: 'row',
    justifyContent: 'space-between',
    }
    , two: {
        flex: 6,
        backgroundColor: "#D6D7EF",
    }, main: {
        flex: 1,
    },button:{
        alignItems:"center",
        justifyContent:"center",
        color: '#FFF',
        backgroundColor: '#D6D7EF',
        borderRadius:50,
        margin:5,
        width: 45,
        height: 45,
    },buttonText:{
        color: '#FFF',
        fontSize: 24,
        // padding:10
    }

})