import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useContext} from 'react';
import {width, height, totalSize} from 'react-native-dimension';
import {ScrollView} from 'react-native-gesture-handler';
import { AuthContext } from '../context/AuthContext';


const Welcome = ({navigation}) => {
  const {setIsDoctoAccount} = useContext(AuthContext);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require('../assets/logo.png')}
            style={{
              height: 400,
              width: 250,
              resizeMode: 'contain',
            }}
          />
        </View>
        <View style={styles.footer}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignSelf: 'center',
            }}>
            <View style={styles.arrow} />
          </View>
          <Text style={styles.title}> A new way to find </Text>
          <Text style={[styles.title, {color: '#ecc13b'}]}> your doctor</Text>
          <View style={{alignSelf: 'center'}}>
            <View style={styles.button}>
              <TouchableOpacity
                onPress={() => {
                  setIsDoctoAccount(false);
                  navigation.navigate('SignIn')}}
                style={styles.signIn}>
                <Text style={[styles.Text, {color: '#000000'}]}>
                  join as client
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buton}>
              <TouchableOpacity
                onPress={() => {
                  setIsDoctoAccount(true);
                  navigation.navigate('SignIn')}}
                style={styles.signIn}>
                <Text style={[styles.Text, {color: '#ecc13b'}]}>
                  join as doctor
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5efdb',
    // width: width(100),
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 280,
    backgroundColor: '#f5efdb',
  },
  footer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  //     logo: {
  //         width: height_logo,
  //         height: height_logo
  //     },
  title: {
    color: '#000000',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  Text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 30,
    backgroundColor: '#ecc13b',
    alignItems: 'center',
    borderRadius: 50,
    width: 250,
    // marginLeft: 45,
  },
  buton: {
    alignItems: 'flex-end',
    marginTop: 30,
    backgroundColor: '#000000',
    alignItems: 'center',
    borderRadius: 50,
    width: 250,
    // marginLeft: 45,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  arrow: {
    height: 10,
    width: 60,
    backgroundColor: '#ecc13b',
    borderRadius: 5,
    bottom: 10,
  },
});
