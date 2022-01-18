import React, { useState }from 'react';
import { StyleSheet, View, Text, FlatList, Image, TouchableOpacity } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native';

function CarsAvailable(props) {

    const [Cars, setCars] = useState([
        { src: require('../assets/Cars/tesla2021.jpg'), id: 1, model: 'Tesla Model T', price: "140$", year: 2020},
        { src: require('../assets/Cars/audiAB.jpg'), id: 2, model: 'Audi TT Model', price: "125$", year: 2018},
        { src: require('../assets/Cars/toyotacar1.png'), id: 3, model: 'Toyota Model X', price: "100$",year: 2019},
        { src: require('../assets/Cars/jaguarcar2020.jpg'), id: 4, model: 'Subaru Impreza', price: "150$", year: 2021},
        { src: require('../assets/Cars/mercedesbenz.jpg'),id: 5, model: 'Mercedes Benz', price: "124$",year: 2021},
        { src: require('../assets/Cars/bentleycar.jpg'),id: 6, model: 'Bentley  X', price: "155$", year: 2022},
        { src: require('../assets/Cars/maseraticar2.jpeg'), id: 7, model: 'Maserati XT', price: "130$",year: 2019},
        { src: require('../assets/Cars/maseraticar.png'), id: 8, model: 'Maserati  X', price: "115$", year: 2017},
        { src: require('../assets/Cars/jaguarcar.jpeg'), id: 9, model: 'Jaguar Model R', price: "180$", year: 2019 },
        { src: require('../assets/Cars/toyotacar.jpg'), id: 10, model: 'Toyota Model XY', price: "127$",year: 2012},
    ]);
    return (
        <View style={styles.container}>
            <View >
                <View style={styles.carHeader}>
                   <Text style={styles.carText}>Available Cars</Text>
                   <View style={styles.carFilter}>
                      <AntDesign name="filter" size={26} color="darkgrey" />
                   </View>
                </View>
            <SafeAreaView style={styles.listsStyle}>
                <FlatList       
                data={Cars}
                keyExtractor={(item) => item.id}
                renderItem={ ({ item}) => (
                    <View style={styles.List}>
                        <View style={styles.imageContainer}>
                              <TouchableOpacity>
                                 <Image 
                                  source={item.src} 
                                  style={styles.carList}
                                 />
                              </TouchableOpacity>
                             
                             <View style={styles.modelYear}>
                                 <Text style={styles.modelText}>{item.model}</Text>
                                 <Text style={styles.yearText}>{item.year}</Text>
                              </View>
                         
                        </View>
                        <View style={styles.priceDetails}>
                              <Text style={styles.price}>{item.price}<Text style={styles.perDay}>/Day</Text></Text>
                               <View style={styles.detailsView}>
                                   <TouchableOpacity>
                                      <Text style={styles.details}>Details</Text>
                                   </TouchableOpacity>
                                
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
        marginLeft:12
    },

    carFilter: {
        marginLeft: 170,
    },

    List: {
        backgroundColor: 'white',
        padding:2 ,
        margin:10 ,
        borderRadius: 10,
        borderBottomRightRadius: 30,
        borderTopLeftRadius: 20
    },

    carList: {
        width:150,
        height:120,
        resizeMode:'contain',
        marginTop:15,
        margin: 4,
        paddingRight: 0,
        
    },

    imageContainer: {
        flexDirection: 'row',
    },

    modelYear: {
        marginTop: 30,
        marginLeft: 40,
    },

    modelText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
    },

    yearText: {
        marginLeft: 80,
        fontSize: 20,
        color: 'darkgrey',
    },

    priceDetails: {
        flexDirection: 'row',
        marginBottom: 5
    },

    price: {
        padding: 5,
        fontSize: 15
    },

    perDay: {
        color: 'grey'
    },

    detailsView:{
        marginLeft: 120,
        backgroundColor: 'dodgerblue',
        paddingHorizontal: 40,
        paddingVertical: 12,
        borderTopLeftRadius: 30,
        borderBottomRightRadius: 30
    },

    details: {
        fontSize: 20
    }
})