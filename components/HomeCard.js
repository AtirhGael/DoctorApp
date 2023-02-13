import React, {useState, useRef} from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';
import Button from './Button';

const HomeCard = ({item, navigation, route}) => {
    const currentRoute = useRoute();
    const {width} = Dimensions.get('window');

    const [currentIndex, setCurrentIndex] = useState(null);
    const viewConfig = useRef ({viewAreaCoveragePercentThreshold: 50}).current;
    const viewableItemsChanged = useRef(({viewableItems}) => {
        setCurrentIndex(viewableItems[0].key);
      }
    ).current;

const appointRoute = currentRoute.name === 'Home' ? 'Timetable' :'SelectTime';

return (
    <View style={{margin:20, width:width-40, borderRadius:15, backgroundColor:'#fff'}}>
    <View style={styles.indicatorContainer}>
        {item.images.map(item =>  <View key={item.index} style={[styles.indicator, {backgroundColor: item.index === currentIndex ? '#fff':'rgba(255, 255, 255, 0.3)'}]} />)}
    </View>
    {console.log(item)}
    <FlatList
        data={item.images}
        keyExtractor={item => item.index}
        contentContainerStyle={{height:width-100, alignItems:'center'}}
        renderItem={({item}) => (
        <View style={{borderRadius:15, overflow:'hidden', height:width-100, width:width-40}}>
            <Image source={item.source} style={{resizeMode:'contain', height:width-40, width: width-40}}/>
        </View>
        )}
        horizontal={true}
        nestedScrollEnabled={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={32}
        viewabilityConfig={viewConfig}
        onViewableItemsChanged={viewableItemsChanged}
    />
    <View style={{padding:12}}>
        <Text style={{color:'#ed8c00', fontSize:16}}>
        {item.title}
        </Text>
        <Text style={{marginVertical:7, fontWeight:'bold'}}>{'By Dr. ' + item.doctorName}</Text>
        <View style={{flexDirection:'row', alignItems:'center'}}>
        <View
            style={styles.starContainer}>
            <Image
            source={require('../assets/star.png')}
            style={styles.star}
            />
            <Text style={styles.rating}>5.0</Text>
        </View>
        <View style={{flexDirection:'row', alignItems:'center', marginHorizontal:10}}>
            <Image
            source={require('../assets/location.png')}
            style={{height:16, width:16, resizeMode:'contain', tintColor:'#c9c9c9', marginLeft:1, marginRight:3}}
            />
            <Text style={{fontWeight:'bold'}}>{item.location}</Text>
        </View>
        </View>
        <Button
        name='Book Appointment'
        viewStyle={{borderRadius:15, height:35, width:150, alignSelf:'flex-start', marginTop:25, marginBottom:5}}
        textStyle={{fontWeight:'bold', fontSize:14}}
        onPress={() => navigation.navigate(appointRoute)}
        />
    </View>
    </View>
)
}

export default HomeCard;

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
  