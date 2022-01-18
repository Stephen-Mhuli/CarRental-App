import React, { useState }from 'react';
import { StyleSheet, View, Text, FlatList, Image } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native';

function CarsAvailable(props) {

    const [Cars, setCars] = useState([
        { src: require('../assets/Cars/tesla2021.jpg'), id: 1, model: 'Tesla Model T', price: "140$/Day", year: 2020},
        { src: require('../assets/Cars/audiAB.jpg'), id: 2, model: 'Audi TT Model', price: "125$/Day", year: 2018},
        { src: require('../assets/Cars/toyotacar1.png'), id: 3, model: 'Toyota Model X', price: "100$/Day",year: 2019},
        { src: require('../assets/Cars/jaguarcar2020.jpg'), id: 4, model: 'Subaru Impreza', price: "150$/Day", year: 2021},
        { src: require('../assets/Cars/mercedesbenz.jpg'),id: 5, model: 'Mercedes Benz', price: "124$/Day",year: 2021},
        { src: require('../assets/Cars/bentleycar.jpg'),id: 6, model: 'Bentley  X', price: "155$/Day", year: 2022},
        { src: require('../assets/Cars/maseraticar2.jpeg'), id: 7, model: 'Maserati XT', price: "130$/Day",year: 2019},
        { src: require('../assets/Cars/maseraticar.png'), id: 8, model: 'Maserati  X', price: "115$/Day", year: 2017},
        { src: require('../assets/Cars/jaguarcar.jpeg'), id: 9, model: 'Jaguar Model R', price: "180$/Day", year: 2019 },
        { src: require('../assets/Cars/toyotacar.jpg'), id: 10, model: 'Toyota Model XY', price: "127$/Day",year: 2012},
    ]);
    return (
        <View style={styles.container}>
            <View >
                <View style={styles.carHeader}>
                   <Text style={styles.carText}>Available Cars</Text>
                   <View style={styles.carFilter}>
                      <AntDesign name="filter" size={26} color="lightgrey" />
                   </View>
                </View>
            <SafeAreaView>
                <FlatList       
                data={Cars}
                keyExtractor={(item) => item.id}
                renderItem={ ({ item}) => (
                    <View>
                        <View style={styles.imageContainer}>
                             <Image 
                               source={item.src} 
                               style={styles.carList}
                              />
                             <View style={styles.modelYear}>
                               <Text style={styles.modelText}>{item.model}</Text>
                               <Text style={styles.yearText}>{item.year}</Text>
                              </View>
                         
                        </View>
                        <View style={styles.priceDetails}>
                              <Text style={styles.price}>{item.price}</Text>
                               <View style={styles.detailsView}>
                                <Text style={styles.details}>Details</Text>
                              </View>
                        </View>
                    </View>
                    
                   
                  )}
                
                />
            </SafeAreaView>

                
            </View>
        </View>
    );
}

export default CarsAvailable;

const styles = StyleSheet.create({
    container: {
        marginTop: 16,
        marginLeft: 5,
        //backgroundColor: 'dodgerblue'
        
    },
    carHeader: {
        flexDirection: 'row',
        marginLeft: 5,
        borderRadius: 10
    },
    carText: {
        fontSize: 22,
        color: 'black',
        fontWeight: 'bold',

    },
    carFilter: {
        marginLeft: 170,
    },
    carList: {
        width:200,
        height:150,
        resizeMode:'contain',
        //backgroundColor: 'blue',
        margin: 8,
        paddingRight: 2
    },
    imageContainer: {
        flexDirection: 'row'
    },
    modelYear: {
        marginTop: 25
    },
    modelText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
    },
    yearText: {
        marginLeft: 65,
        fontSize: 23,
        color: 'lightgrey',
    },
    priceDetails: {
        flexDirection: 'row'
    },
    price: {
        padding: 5,
        fontSize: 20
    },
    detailsView:{
        marginLeft: 90,
        backgroundColor: 'dodgerblue',
        paddingHorizontal: 40,
        paddingVertical: 15,
        borderTopLeftRadius: 30,
        borderBottomRightRadius: 30
    },
    details: {
        fontSize: 18
    }
})