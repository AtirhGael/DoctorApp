import React from "react";
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';

const Button = ({name, onPress, viewStyle, textStyle}) => {
    return (
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={onPress}>
                <View style={[styles.button, viewStyle]}>
                    <Text style={[{fontSize:18, color:'black'}, textStyle]} >{name}</Text>
                </View>
            </TouchableOpacity>
    )
}

export default Button;
const styles= StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: '#ecc13b',
        alignItems: 'center',
        borderRadius: 50,
        width: 250,
        height:40,
        alignSelf: 'center',
      },
});