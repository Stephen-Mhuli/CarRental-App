import React, { useState }from 'react';
import { StyleSheet, View, Text, FlatList, Image, TouchableOpacity, TouchableHighlight } from 'react-native';

function BrandSlider(props) {

    const [Images ,setImages] = useState([
        { src: require('../assets/BrandsLogo/bmw.png'), id: 1 },
        { src: require('../assets/BrandsLogo/auditp.png'), id: 2},
        { src: require('../assets/BrandsLogo/toyota.png'), id: 3},
        { src: require('../assets/BrandsLogo/subarutp.png'), id: 4},
        { src: require('../assets/BrandsLogo/mercedes.png'),id: 5},
        { src: require('../assets/BrandsLogo/teslatp.png'),id: 6},
        { src: require('../assets/BrandsLogo/maseratp.png'), id: 7},
        { src: require('../assets/BrandsLogo/nissan.png'), id: 8},
        { src: require('../assets/BrandsLogo/jaguartp.png'), id: 9},
    ]);

    const handleClick = () =>{

    }

    return (
        <View style={styles.brand}>
            <View>
                <Text style={styles.brandText}>Brands</Text>
            </View>
            <FlatList
               horizontal={true} 
               showsHorizontalScrollIndicator={false} 
               data={Images}
               keyExtractor={(item) => item.id}
               renderItem={ ({ item }) => (
                <TouchableOpacity onPress={handleClick}>
                    <View style={styles.brandStyle}>
                       <Image 
                         source={item.src}    
                         style={styles.imagesLogo}
                        />
                     </View>
                </TouchableOpacity>
                
               
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
        width:100,
        height:100,
        resizeMode:'contain',
        margin:4
    },

    brandText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
        padding: 8,
        marginLeft: 10,
        //backgroundColor: 'blue'
    },
    brandStyle: {
        borderRadius: 30,
        backgroundColor: 'white',
        paddingLeft: 1,
        paddingRight: 1,
    }
})