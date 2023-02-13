import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

const DroppableBar = ({title, iconSource, droppable, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.bar}>
                <View style={{flex:1, flexDirection:'row', alignItems:'center'}}>
                    <Image
                        source={iconSource}
                        style={[styles.image, {marginLeft:10, marginRight:8}]}
                    />
                    <Text style={{color: '#000'}}>
                    {' '+ title +' '}
                    </Text>
                </View>
                <View style={styles.dropArrowContainer} >
                    {droppable ? 
                        <Image
                            source={require('../assets/dropdown.png')}
                            style={{height:20, width:20, resizeMode:'contain'}}
                            />
                    : null}
                </View>
            </View>
        </TouchableOpacity>
        )
}

export default DroppableBar;

const styles = StyleSheet.create({
    bar: {
    height: 50,
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginTop:13,
    borderRadius: 10,
    justifyContent: 'space-between',
    },
    image: {
    height: 30,
    width: 30,
    resizeMode:'contain'
    },
    dropArrowContainer:{
        height:'100%',
        width:50,
        alignItems:'center',
        justifyContent:'center'
    }  
})