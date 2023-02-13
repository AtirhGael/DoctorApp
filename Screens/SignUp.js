import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import CustomTextInput from '../components/CustomTextInput';
import Button from '../components/Button';

const SignUp = ({navigation}) => {
  return (
    <ScrollView
    showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{fontSize: 32, fontWeight:'bold', color:'#000'}}>
            {' '}
            Sign <Text style={{color: '#ecc13b'}}> Up</Text>{' '}
          </Text>
        </View>
        <View style={styles.footer}>
          <CustomTextInput
            name='name'
            keyboardType='default'
            placeholder='Enter your name here'
          />
          <CustomTextInput
            name='email'
            keyboardType='email-address'
            placeholder='Enter your email address here'
          />
          <CustomTextInput
            name='phone'
            keyboardType='phone-pad'
            placeholder='Enter your name here'
          />
          <CustomTextInput
            name='password'
            keyboardType='default'
            secureTextEntry
            placeholder='Enter your name here'
          />
        </View>
        <Button
          name='Sign Up'
          viewStyle={{height:40, width:250, marginTop:5, marginBottom:30}}
          textStyle={{fontSize:15}}
          onPress={() => navigation.navigate('MainTab')}
        />
      </View>
    </ScrollView>
  );
};

export default SignUp;

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
    paddingVertical: 30,
    paddingHorizontal: 15,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
    alignSelf: 'center',
  }
});
