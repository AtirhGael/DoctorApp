import React from 'react';
import {View, Text, StyleSheet, TextInput, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CustomTextInput = ({name, placeholder, keyboardType, imageSource, imageStyles, onIconPress, ...rest}) => {
    return (
        <View style={{marginTop: 22}}>
            <View style={styles.inputContainer}>
              <View style={styles.labelContainer}>
                <Text style={{color:'#777'}}>{name}</Text>
              </View>
              <View style={{flexDirection:'row', alignItems:'center'}}>
                <TextInput
                  placeholderTextColor='#929292'
                  keyboardType={keyboardType}
                  placeholder={placeholder}
                  style={styles.textInput}
                  {...rest}
                  />
                {imageSource ?
                  <TouchableOpacity onPress={onIconPress} activeOpacity={0.8} >
                    <Image
                      style={[styles.image, imageStyles]}
                      source={imageSource}
                    />  
                  </TouchableOpacity>
                   : null
                }
              </View>
            </View>
        </View>
    )
}

export default CustomTextInput;

const styles = StyleSheet.create({
  labelContainer: {
    backgroundColor: 'white',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    marginLeft:30,
    shadowColor: 'white', 
    position: 'absolute',
    top: -12,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor:'#c9c9c9',
    borderRadius: 15,
    paddingHorizontal: 8,
    zIndex: 0,
  },
  textInput: {
    color:'#000',
    // fontWeight:'bold',
    paddingHorizontal:10,
    flex:1,
    // borderWidth:1
  },
  image:{
    height:25,
    width:20,
    resizeMode:'contain',
    marginHorizontal:5,
    tintColor:'#c9c9c9'
  }
})