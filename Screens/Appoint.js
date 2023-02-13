import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import Map from '../components/Map';
import MapView from 'react-native-maps';
import Button from '../components/Button';
// import MapView from 'react-native-maps';

const Appoint = ({navigation}) => {
  return (
    // <ScrollView>

    // </ScrollView>
    <ScrollView
      // contentContainerStyle={{paddingBottom:200}}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => navigation.goBack()} >
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
                {'   '}
              Appointment
            </Text>
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.personCard}>
            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
              <Image
                source={require('../assets/doctor.png')}
                style={{
                  height: 80,
                  width: 80,
                  resizeMode:'contain'
                }}
              />
            </View>
            <View style={styles.text}>
              <Text style={{fontSize: 22, right: 8, color:'black'}}>
                {' '}
                Dr. Margot Robbie
              </Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontSize: 15, fontWeight:'700', top: 8, right: 7, color:'#929292'}}>
                  {' '}
                  Dentist . Physician
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    backgroundColor: 'orange',
                    height: 21,
                    width: 52,
                    borderRadius: 6,
                    marginTop: 5,
                    alignItems:'center',
                    justifyContent:'space-around'
                  }}>
                  <Image
                    source={require('../assets/star.png')}
                    style={{
                      height: 18,
                      width: 23,
                      resizeMode: 'contain',
                      tintColor:'ffffff'
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 16.5,
                      color: 'white',
                      fontWeight:'700',
                      marginRight:4,
                      marginBottom:3
                      
                    }}>
                    5.0
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.timeCard}>
            <Text style={{fontSize: 18, color:'#929292'}}>DATE {'& '}TIME</Text>
            <View style={{flexDirection:'row'}}>
              <View style={{flex:1}}>
                <Text style={{fontSize: 16, color:'black'}}>21 Tuesday, January</Text>
              </View>
              <View
                style={{
                  height: 25,
                  width: 1.5,
                  backgroundColor: '#ecc13b',
                }}
                />
                <View  style={{flex:1}}>
                  <Text style={{fontSize: 16, marginHorizontal:10, color:'black'}}>3:00 - 4:00</Text>
                </View>
            </View>
          </View>
          <View style={styles.addressCard} >
            <View>
              <Text style={{fontSize: 18, color:'#929292'}}>ADDRESS</Text>
              <View style={{marginTop:8,height:45, justifyContent:'space-around'}}>
                <Text style={{fontSize: 16, color:'black'}}>
                  Body And Mind Care
                </Text>
                <Text style={{fontSize: 14, color:'#929292'}}>
                  511 Chasity Park Suit Block 1, Houston Texas
                </Text>
              </View>
            </View>
            {/* this is the map */}
       
              <Map
                initialRegion={{
                  latitude: 37.78825,
                  longitude: -122.4324,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
              />
          </View>
          <View style={styles.insuranceCard}>
            <Text style={{fontSize: 18, color:'#929292'}}>INSURANCE POLICY</Text>
            <View>
              <Text style={{fontSize: 16, color:'black'}}>Insurance Lorem Ipsum</Text>  
            </View>
          </View>
          <Button
            name='CONFIRM'
            onPress = {() => console.log('Confirm Pressed !')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Appoint;

const styles = StyleSheet.create({
  container: {
    // margin: 3,
    backgroundColor: '#fff',
    marginBottom:280
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    backgroundColor: '#f5efdb',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  body: {
    marginTop: 30,
    backgroundColor: 'white',
    borderColor: 'gray',
    height: 500,
    // margin: 5,
    borderRadius: 15,
    // flex: 1,
  },
  personCard:{
    flexDirection: 'row',
    // justifyContent:'space-around',
    alignItems:'center',
    borderBottomWidth:1,
    borderBottomColor:'#c9c9c9',
    paddingHorizontal:15,
    paddingVertical:20,
  },
  timeCard:{
    justifyContent: 'space-around',
    paddingHorizontal:15,
    borderBottomWidth:1,
    borderBottomColor:'#c9c9c9',
    height:100
  },
  addressCard:{
    paddingHorizontal:15,
    paddingTop:15
  },
  insuranceCard: {
    justifyContent: 'space-around',
    paddingTop:10,
    paddingBottom:5,
    paddingHorizontal:15,
    borderTopWidth:1,
    borderTopColor:'#c9c9c9',
    borderBottomWidth:1,
    borderBottomColor:'#c9c9c9',
    height:70,
    marginBottom:40
  },
  text: {
    color: '#000',
    flex:2,
    alignItems:'flex-start'
  },
  button: {
    alignItems: 'center',
    justifyContent:'center',
    marginTop: 40,
    backgroundColor: '#ecc13b',
    alignItems: 'center',
    borderRadius: 50,
    width: 300,
    height:50,
    alignSelf: 'center',
  },
});
