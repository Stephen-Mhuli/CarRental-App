import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';


function SearchBar(props) {
    return (
        <View style={styles.headerSearch}>
            <View style={styles.headerSearchIcon}>
            <FontAwesome name="search" size={22} color="grey" />
            </View>
        </View>
    );
}

export default SearchBar;

const styles = StyleSheet.create({
    headerSearch: {
        //backgroundColor: '#fff',
        flex:1,
    },
    headerSearchIcon: {
        fontSize: 22,
        padding: 5,
        marginLeft: 40,
    },
})