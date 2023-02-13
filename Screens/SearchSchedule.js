import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Calender from '../components/calender';

const Page7 = () => {
  return (
    <View style={{width: '100%', height: '100%'}}>
      <ScrollView style={{width: '100%', height: '100%', flex: 1}}>
        <View style={styles.container}>
          <View style={styles.header}>
            <View>
              <View>
                <TouchableOpacity>
                  <Image
                    source={require('../assets/back.png')}
                    style={styles.img}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  margin: 15,
                }}>
                <View style={styles.row}></View>
                <View style={styles.row}></View>
                <View style={styles.row}></View>
                <View style={styles.row}></View>
              </View>
              <Text style={{fontSize: 20, top: -120, color: '#000', left: 10}}>
                {' '}
                Select The Time
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={require('../assets/doctor.png')}
                  style={{
                    height: 100,
                    width: 100,
                    top: -80,
                    right: -10,
                  }}
                />
                <View style={styles.text}>
                  <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                    {' '}
                    Dr. Margot Robbie
                  </Text>
                  <Text style={{fontSize: 17, top: 8}}>
                    {' '}
                    Dentist . Pyisicsian
                  </Text>
                </View>
              </View>
              <View style={styles.calender}>
                <Calender />
              </View>
            </View>

            <Text style={{backgroundColor: '#000'}}>hello world</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Page7;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 2,
    backgroundColor: '##f5efdb',
  },
  header: {
    height: 700,
    backgroundColor: '#f5efdb',
    margin: 5,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  body: {
    margin: 10,
    height: 100,
    backgroundColor: '#000',
  },
  footer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  img: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
    left: 10,
    top: 15,
    marginBottom: 170,
  },
  row: {
    backgroundColor: '#ecc13b',
    height: 10,
    width: 75,
    borderRadius: 5,
    marginTop: -130,
  },
  text: {
    left: 35,
    top: -55,
    color: '#000',
  },
  calender: {
    height: 400,
    backgroundColor: '#f5efdb',
    top: -50,
  },
  time: {
    height: 0,
    width: 50,
    backgroundColor: 'gray',
  },
});
// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// import {ScrollView} from 'react-native-gesture-handler';

// // const Page7 = () => {
// //   return (
// //     <ScrollView>

// //     </ScrollView>
// //   )
// // }

// // export default Page7

// // const styles = StyleSheet.create({})
