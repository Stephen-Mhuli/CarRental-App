import React, { useState }from 'react';
import { StyleSheet, View, Text, FlatList, Image } from 'react-native';

function BrandSlider(props) {

    const [Images ,setImages] = useState([
        { src: require('../assets/BrandsLogo/tesla4.jpg'), id: 1 },
        { src: require('../assets/BrandsLogo/audi.png'), id: 2},
        { src: require('../assets/BrandsLogo/toyota.png'), id: 3},
        { src: require('../assets/BrandsLogo/subaru2.png'), id: 4},
        { src: require('../assets/BrandsLogo/mercedes.png'),id: 5},
        { src: require('../assets/BrandsLogo/bentley.png'),id: 6},
        { src: require('../assets/BrandsLogo/maserati.jpg'), id: 7},
        { src: require('../assets/BrandsLogo/lamborghini.png'), id: 8},
        { src: require('../assets/BrandsLogo/jaguar.jpg'), id: 9},
    ]);

    return (
        <View style={styles.brand}>
            <View>
                <Text style={styles.brandText}>Brands</Text>
            </View>
            <FlatList
               horizontal={true} 
               showsHorizontalScrollIndicator={false} 
               data={Images}
               //keyExtractor={(item) => item.id}
               renderItem={ ({ item, index }) => (
               <Image 
               source={item.src}    
               style={styles.imagesLogo}
               />
             )}
           />
        </View>
    );
}

export default BrandSlider;

const styles = StyleSheet.create({
    brand: {
        justifyContent: 'center',
        alignItems: 'flex-start' ,
        marginTop: 15,
        //marginLeft: 10
    },

    imagesLogo: {
        width:120,
        height:120,
        //borderWidth:1,
        //borderColor:'grey',
        resizeMode:'contain',
        margin:8
    },

    brandText: {
        color: 'grey',
        fontWeight: 'bold',
        fontSize: 20,
        padding: 5,
        marginLeft: 5,
    }
})