import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import CustomTextInput from '../components/CustomTextInput';
import Button from '../components/Button';

const SignIn = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
      <View style={styles.header}>
          <Text style={{fontSize: 32, fontWeight:'bold', color:'#000'}}>
            {' '}
            Sign <Text style={{color: '#ecc13b'}}> In</Text>{' '}
          </Text>
        </View>
        <View style={styles.footer}>
            <CustomTextInput
              name='email'
              keyboardType='email-address'
              placeholder='Enter your email address here'
            />
            <CustomTextInput
              name='password'
              keyboardType='default'
              secureTextEntry
              placeholder='Enter your name here'
            />
          <Text
            style={{
              fontSize: 15,
              color:'#000',
              textAlign: 'center',
              marginTop: 10,
            }}>
            Forgot password? <Text style={{color: '#ecc13b'}}> Reset </Text>{' '}
          </Text>
          <View>
            <Button
              name='Sign In'
              viewStyle={{height:40, width:250, marginTop:20}}
              textStyle={{fontSize:15}}
              onPress={() => navigation.navigate('MainTab')}
            />
            <View>
              <Text style={{textAlign: 'center', marginTop: 25, clor:'#444'}}>
                Don't have an account?
              </Text>
            </View>
            <Button
              name='Sign Up'
              viewStyle={{height:40, width:250, backgroundColor:'#000', marginVertical:15}}
              textStyle={{fontSize:15, color:'#ecc13b'}}
              onPress={() => navigation.navigate('SignUp')}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 280,
    backgroundColor: '#f5efdb',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  footer: {
    backgroundColor: '#fff',
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  TextInput: {
    borderRadius: 20,
  },
  buton: {
    alignItems: 'flex-end',
    marginTop: 30,
    backgroundColor: '#000000',
    alignItems: 'center',
    borderRadius: 50,
    width: 250,
    alignSelf: 'center',
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  button: {
    alignItems: 'center',
    marginTop: 30,
    backgroundColor: '#ecc13b',
    alignItems: 'center',
    borderRadius: 50,
    width: 250,
    alignSelf: 'center',
  },
  labelContainer: {
    backgroundColor: 'white', // Same color as background
    alignSelf: 'flex-start', // Have View be same width as Text inside
    paddingHorizontal: 3, // Amount of spacing between border and first/last letter
    marginStart: 10, // How far right do you want the label to start
    zIndex: 1, // Label must overlap border
    elevation: 1, // Needed for android
    shadowColor: 'white', // Same as background color because elevation: 1 creates a shadow that we don't want
    position: 'absolute', // Needed to be able to precisely overlap label with border
    top: -12, // Vertical position of label. Eyeball it to see where label intersects border.
  },
  inputContainer: {
    borderWidth: 1, // Create border
    borderRadius: 15, // Not needed. Just make it look nicer.
    padding: 8, // Also used to make it look nicer
    zIndex: 0, // Ensure border has z-index of 0
  },
});
