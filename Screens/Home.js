import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import React, { useRef, useState } from 'react';
import Button from '../components/Button';
import { SpecialityCard } from './Search';
import { useRoute } from '@react-navigation/native';
import HomeCard from '../components/HomeCard';


const items = [
  { 
    id:1,
    title:'Ultrasonography of pelvis',
    doctorName:'Sarah William',
    rating:'5.0',
    location:'27 Bayer View',
    images:[{index:1, source: require('../assets/doctor1.jpg')}, {index:2, source: require('../assets/doctor2.jpg')}],
  },
  { 
    id:2,
    title:'Eyes consulting',
    doctorName:'William Sandstorm',
    rating:'4.5',
    location:'27 Harchivald Street',
    images:[{index:1, source: require('../assets/doctor2.jpg')}, {index:2, source: require('../assets/doctor1.jpg')}],
  }
]

const Home = ({navigation, route}) => {
  const currentRoute = useRoute();
  const {width} = Dimensions.get('window');
  
  const Header = ({route, navigation}) => {
    if (route.params?.searchParams) {
      return (
        <View style={[styles.header, {height:110, alignItems:'center', paddingBottom:0, padding:0}]}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => navigation.goBack()} >
              <Image
                source={require('../assets/back.png')}
                style={{
                  height: 20,
                  width: 20,
                  resizeMode: 'contain',
                  marginLeft: 19,
                  position:'absolute'
                }}
              />
            </TouchableOpacity>
            <Text
              style={{
                textAlign: 'center',
                marginLeft: 100,
                // fontWeight: 'bold',
                color:'#000',
                fontSize:16
              }}>
              {'    '} Search results
            </Text>
          </View>
        </View>
      )
    }

    return (
      <View style={styles.header}>
        <View style={{marginLeft: 13}}>
          <Text style={{color: '#000', fontSize: 20}}>Worry less.</Text>
          <Text style={{color: '#000', fontSize: 20}}>Live healthier.</Text>
          <Text style={{marginTop: 17, color:'#666'}}>Welcome, Jhonny.</Text>
        </View>
        <View style={{height:60, width:60, borderWidth:3, borderRadius:37, alignItems:'center', justifyContent:'center', margin:15}}>
          <Image
            source={require('../assets/doctor.png')}
            style={{
              width: 48,
              height: 48,
              resizeMode: 'contain',
              borderRadius: 26,
            }}
          />
        </View>
      </View>
    )
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <>
          <Header route={route} navigation={navigation}/>
          {route.params?.searchParams ? 
            <View style={{flexDirection:'row', flexWrap:'wrap', justifyContent:'space-around', marginTop:15, paddingHorizontal:5}}>
                {JSON.parse(route.params.searchParams).map(item => <SpecialityCard hideCross={true} key={item.title} title={item.value} />)}
            </View>
            : null
          }
        </>
        <View style={{flexDirection:'row', alignItems:'center', marginHorizontal:25, marginBottom:-10, marginTop:10}}>
          <Text style={{color:'#000', fontSize:15}}>Recommended doctors</Text>
          <Image source={require('../assets/back.png')} style={{height:13, width:13, marginTop:3, resizeMode:'contain', marginLeft:10, transform:[{rotateY:'180deg'}]}} />
        </View>
        
        <FlatList
          horizontal={true}
          pagingEnabled={true}
          data={items}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <HomeCard item={item} navigation={navigation} route={route} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '##f5efdb',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    height: 200,
    backgroundColor: '#f5efdb',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding:10,
    paddingBottom:20,
    marginBottom:20
  },
  body: {
    marginTop: 30,
    backgroundColor: 'white',
    borderColor: 'gray',
    // height: 430,
    margin: 10,
    borderRadius: 5,
  },
  indicatorContainer:{
    position:'absolute',
    zIndex:2,
    marginTop:10,
    paddingHorizontal:15,
    flexDirection:'row'
  },
  indicator:{
    height:3.2,
    width:60,
    borderRadius:2,
    borderWidth:0.1,
    // marginTop:10,
    marginHorizontal:2
  },
  starContainer:{
    flexDirection: 'row',
    backgroundColor: 'orange',
    height: 20,
    width: 45,
    borderRadius: 3,
    alignItems:'center',
    justifyContent:'space-between',
    paddingLeft:2,
    paddingRight:3
  },
  star:{
    height: 14,
    width: 14,
    top:-2.5,
    resizeMode: 'contain',
    tintColor:'ffffff'
  },
  rating:{
    fontSize: 16.5,
    color: 'white',
    // fontWeight:'700',
    top:-1
  }
});
