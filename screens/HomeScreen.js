import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import BrandSlider from '../components/BrandSlider';
import CarsAvailable from '../components/CarsAvailable';

import Header from '../components/Header';

function HomeScreen(props) {
    return (
        <View>
            <Header />
            <BrandSlider />
            <CarsAvailable />
        </View>
    );
}

export default HomeScreen;