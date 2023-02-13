import {StyleSheet, Text, View, TouchableOpacity, Image, Modal} from 'react-native';
import React, {useState, useContext} from 'react';
import {ScrollView, TouchableWithoutFeedback} from 'react-native-gesture-handler';
import DroppableBar from '../components/DroppableBar';
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';
import UserPersInfo from '../components/UserPersInfo';
import Schedule from '../components/Schedule';
import { AuthContext } from '../context/AuthContext';

const Profile = ({navigation}) => {
  // const [modalVisible, setModalVisible] = useState(false);
  const {isDoctorAccount} = useContext(AuthContext);
  console.log('Is doctor account (Profile): ',isDoctorAccount )

  const CalendarModal = ({visible, children}) => {
    return  (
      <Modal animationType='slide' visible={visible} transparent>
        {children}
      </Modal>
    )
  }
  return (
    <>
      <ScrollView
      // contentContainerStyle={{paddingBottom:160}}
      >
        <View style={styles.container}>
        <View style={styles.header}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
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
                Profile
              </Text>
            </View>
          </View>
          <View style={styles.body}>
            <View style={{alignSelf:'center', alignItems:'center'}}>
              <Image
              source={require('../assets/doctor.png')}
              style={{
                top: 20,
                height: 110,
                width: 110,
                borderRadius: 100,
                borderWidth:3,
                borderColor:'#ecc13b',
                backgroundColor: 'gray',
              }}
              />
              <View style={{top: 20, left: 14}}>
                <Text style={{fontWeight: 'bold', fontSize: 20, color:'#777'}}>User Name</Text>
                <Text style={{fontSize: 17, right: 10, color:'#777'}}>user@name.com</Text>
              </View>
            </View>

            {
              isDoctorAccount ? <View style={{flexDirection:'row', marginTop:40}}>
                <TouchableOpacity activeOpacity={0.7} >
                  <View style={styles.largeIcons}>
                    <Image
                      source={require('../assets/addPicture.png')}
                      style={{height:30, width:30, tintColor:'#ecce13'}}
                    />
                    <Text style={{color:'#555', marginTop:4}}>Add picture</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7}>
                  <View style={styles.largeIcons}>
                    <Image
                      source={require('../assets/calendar.png')}
                      style={{height:24, width:24, resizeMode:'contain', tintColor:'#ecce13'}}
                    />
                    <Text style={{color:'#555', marginTop:8}}>Set Calendar</Text>
                  </View>
                </TouchableOpacity>
              </View> : null
            }
            
            <View style={{marginTop:isDoctorAccount? 35 : 70, marginHorizontal:3}} >
              <Text style={{fontWeight: 'bold', fontSize:16, color:'#000'}}> Others</Text>
              <View>
              </View>
              <UserPersInfo/>
              
              {/* <DroppableBar
              droppable
                title='Appointments'
                iconSource ={require('../assets/cal.png')}
                onPress={() => setModalVisible(true)}
              /> */}
              <DroppableBar
                title='Logout'
                iconSource={require('../assets/logout.png')}
                onPress={() => console.log('Logging Out...')}
              />
            </View>
          </View>
          <View style={styles.footer}></View>
        </View>
      </ScrollView>
      
      {/* <CalendarModal visible={modalVisible} >
        <View style={styles.modalView}>
          <View style={styles.scheduleContainer}>
            <Schedule
              showTimeCards
              buttonContainerStyle={{paddingVertical:8, backgroundColor:'#fff'}}
              buttonName='CONFIRM'
              onButtonPress={() => console.log('Confirm Pressed !')}
              />
          </View>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <View style={{height:50, width:50, borderRadius:25, marginTop:20, backgroundColor:'#ecc13b', alignItems:'center', justifyContent:'center'}}>
              <Image
                style={{height:50, width:50, tintColor:'#fff'}}
                source={require('../assets/ex.png')}
              />
            </View>
          </TouchableOpacity>
        </View>
      </CalendarModal> */}
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    // marginBottom:110
    // backgroundColor: '#fff',
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
    // backgroundColor: '#fff',
    borderColor: 'gray',
    height: 700,
    margin: 5,
    borderRadius: 15,
    // flex: 1,
  },
  others: {
    height: 60,
    flexDirection: 'row',
    backgroundColor: '#ecce13',
    top: 70,
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  image: {
    height: 30,
    width: 30,
    top: 10,
  },
  largeIcons: {
    alignItems:'center',
    justifyContent:'center',
    height:80,
    width:100,
    backgroundColor:'#fff',
    borderRadius:10,
    marginHorizontal:6
  },
  collapseBody:{
    // borderWidth:2,
    // height:400,
    width:'100%',
    backgroundColor:'#fff',
    borderRadius:5,
    padding:16,
    transform:[{translateY:70}]
  },
  infoCard:{
    backgroundColor:'#f5efdb',
    padding:10,
    borderRadius:2,
    marginTop:4,
    marginBottom:10
  },
  dropCardText: {
    color:'#000'
  },
  modalView:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'rgba(0,0,0,0.3)',
    paddingHorizontal:8
  },
  scheduleContainer:{
    height:450,
    width:'100%',
    marginTop:20,
    borderRadius:25,
    overflow:'hidden',
  },
});
