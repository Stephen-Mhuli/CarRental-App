import React, { useState }from 'react';
import { StyleSheet, View, Text, FlatList, Image } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

function CarsAvailable(props) {

    const [Cars, setCars] = useState([
        { src: require('../assets/Cars/tesla2021.jpg'), id: 1, model: 'Tesla Model T', price: "140$/Day", year: 2020},
        { src: require('../assets/Cars/audiAB.jpg'), id: 2, model: 'Audi AB TT Model', price: "125$/Day", year: 2018},
        { src: require('../assets/Cars/toyotacar.jpg'), id: 3, model: 'Toyota Model X', price: "100$/Day",year: 2019},
        { src: require('../assets/Cars/jaguarcar2020.jpg'), id: 4, model: 'Subaru Impreza Model', price: "150$/Day", year: 2021},
        { src: require('../assets/Cars/mercedesbenz.jpg'),id: 5, model: 'Mercedes Benz Model', price: "124$/Day",year: 2021},
        { src: require('../assets/Cars/bentleycar.jpg'),id: 6, model: 'Bentley Model X', price: "155$/Day", year: 2022},
        { src: require('../assets/Cars/maseraticar2.jpeg'), id: 7, model: 'Maserati Model XT', price: "130$/Day",year: 2019},
        { src: require('../assets/Cars/maseraticar.png'), id: 8, model: 'Maserati Model X', price: "115$/Day", year: 2017},
        { src: require('../assets/Cars/jaguarcar.jpeg'), id: 9, model: 'Jaguar Model R', price: "180$/Day", year: 2019 },
    ]);
    return (
        <View style={styles.container}>
            <View >
                <View style={styles.carHeader}>
                   <Text style={styles.carText}>Available Cars</Text>
                   <View style={styles.carFilter}>
                      <AntDesign name="filter" size={26} color="grey" />
                   </View>
                </View>
                
                <FlatList
                      
                data={Cars}
                renderItem={ ({ item, index }) => (
                    <Image 
                    source={item.src} 
                    style={styles.carList}
                    />
                    
                  )}
                
                />
                <Text>{Cars.model}</Text>
            </View>
        </View>
    );
}

export default CarsAvailable;

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginLeft: 5,
        
    },
    carHeader: {
        flexDirection: 'row',
    },
    carText: {
        fontSize: 22,
    },
    carFilter: {
        marginLeft: 170,
    },
    carList: {
        width:200,
        height:150,
        resizeMode:'contain',
        margin: 8,
    }
})