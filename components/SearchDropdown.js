import React, { Component, Fragment, useState, useEffect } from 'react';
import { View, StyleSheet, Keyboard, Text, Image, TouchableOpacity } from 'react-native';
import SearchableDropdown from 'react-native-searchable-dropdown';


const SearchDropdown = ({dropItems, selectedItems, onItemSelect, onRemoveItem}) => {
    const [showElements, setShowElements] = useState(false);
    useEffect(() => {
        const keyBoardDidShowListener = Keyboard.addListener('keyboardDidShow', () => setShowElements(true));
        const keyBoardDidHideListener = Keyboard.addListener('keyboardDidHide', () => setShowElements(false));

        return () => {
            keyBoardDidShowListener.remove();
            keyBoardDidHideListener.remove();
        }
    }, []);
  return (
        //   Multiple Selection
        <View style={styles.container}>
            <View style={styles.labelContainer}>
                <Text>Specialist</Text>
            </View>
            <SearchableDropdown
                multi={true}
                selectedItems={selectedItems}
                onItemSelect={onItemSelect}
                containerStyle={{ paddingHorizontal: 5, flex:1}}
                onRemoveItem={onRemoveItem}
                itemStyle={{
                    paddingHorizontal: 10,
                    paddingVertical:8,
                    marginTop: 4,
                    backgroundColor: '#c9c9c9',
                    borderColor: '#bbb',
                    borderWidth: 1,
                    borderRadius: 10,
                    marginHorizontal:5
                }}
                // itemTextStyle={{ color: '#222' }}
                itemsContainerStyle={{ maxHeight: 160, display:showElements? 'flex' : 'none'}}
                items={dropItems}
                defaultIndex={2}
                // chip={true} //Chips are the bubbles representing the selected items 
                resetValue={false}
                textInputProps={
                {
                    placeholder: "choose here...",
                    underlineColorAndroid: "transparent",
                    style: {
                        paddingHorizontal: 18,
                        zIndex: 0,
                        // borderWidth:1
                    },
                    // onTextChange: text => alert(text)
                }
                }
                listProps={
                {
                    nestedScrollEnabled: true,
                }
                }
            />
            <TouchableOpacity onPress={() => {
                console.log('Close pressed !')
                if(showElements) setShowElements(false)
                console.log('Show Elements: ', showElements)
                }}>
                <Image
                    style={styles.icon}
                    source={require('../assets/ex.png')}
                />
            </TouchableOpacity>
        </View>
  );
}

export default SearchDropdown;

const styles = StyleSheet.create({
    container:{
        marginTop:25,
        flexDirection:'row',
        borderWidth: 1,
        borderColor:'#c9c9c9',
        borderRadius: 15,
        // height:50,
        // alignItems:'center'
    },
    labelContainer: {
        backgroundColor: 'white',
        alignSelf: 'flex-start',
        paddingHorizontal: 10,
        marginLeft:30, 
        position: 'absolute',
        top: -12,
        zIndex:2
    },
    icon: {
        height:20,
        width:20,
        position:'absolute',
        resizeMode:'contain',
        marginHorizontal:13,
        tintColor:'#ecc13b',
        right:1,
        top:15,
        padding:4
}
})