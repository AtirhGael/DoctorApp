import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Schedule from '../components/Schedule';

const Timetable = ({navigation}) => {
  
  return (
    <>
      <View style={styles.header}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  source={require('../assets/back.png')}
                  style={{
                    position:'absolute',
                    height: 20,
                    width: 20,
                    resizeMode: 'contain',
                    marginLeft: 19,
                  }}
                />
              </TouchableOpacity>
              <Text
                style={{
                  fontSize:20,
                  alignSelf:'center',
                  marginLeft: 100,
                  color: '#000',
                }}>
                  {'         '}
                Timetable
              </Text>
            </View>
          </View>
      <Schedule
        showTimeCards
        buttonContainerStyle={{paddingVertical:8, backgroundColor:'#fff'}}
        // buttonName='CONFIRM'
        onButtonPress={() => console.log('Confirm Pressed !')}
        agendaStyle={{minHeight:400}}
        // calendarType
        />
    </>
  )
}

export default Timetable;

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    backgroundColor: '#f5efdb',
    // borderBottomLeftRadius: 20,
    // borderBottomRightRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})