import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import SearchBar from './SearchBar';


function Header(props) {
    return (
        <View style={styles.header}>
            <View style={styles.headerChoose} >
            <Text style={styles.headerChooseText}><Text style={styles.text}>Choose</Text> a Car</Text>
            </View>
            <SearchBar /> 
            
        </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    header : {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,

    },

    headerChoose: {
     flex:2,
     //backgroundColor: '#fff',

    },   
    headerChooseText: {
        fontSize: 22,
        padding: 5,
        marginLeft: 10,
        color: 'black'
        //fontWeight: 'bold'
        
    },
    text: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 25,
    }


})