import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import SearchDropdown from '../components/SearchDropdown';
import CustomTextInput from '../components/CustomTextInput';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Button from '../components/Button';
import DatePicker from 'react-native-date-picker';

const dropItems = [
  {
    id: 1,
    name: 'Dentist',
  },
  {
    id: 2,
    name: 'Psychiast',
  },
  {
    id: 3,
    name: 'Ophtamologist',
  },
  {
    id: 4,
    name: 'Cardio',
  },
  {
    id: 5,
    name: 'Kinesist',
  },
  {
    id: 6,
    name: 'Sports Doctor',
  },
  {
    id: 7,
    name: 'Cancerologist',
  },
  {
    id: 8,
    name: 'Bones Specialist',
  },
];

export const SpecialityCard = ({item, onRemoveItem, hideCross, title}) => {
  console.log('Item Title', title)
  return (
    <TouchableOpacity
      onPress={()=> {if(onRemoveItem) onRemoveItem(item)}}
    >
      <View
      style={{
          height: 28,
          // width: 80,
          backgroundColor: '#f5efdb',
          borderRadius: 5,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent:'space-between',
          paddingHorizontal:7,
          marginVertical:6,
          marginHorizontal:3
      }}>
      
          <Text
          style={{color:'#000', fontSize:13, marginRight:5}}
          >
          {title}
          </Text>
          {
            hideCross ? null : 
            <Image
            source={require('../assets/ex.png')}
            style={{height: 13, width: 13, resizeMode: 'contain'}}
            />
          }
      </View>
    </TouchableOpacity>
    )
}


const Search = ({navigation}) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [selectedItems, setSelectedItems] = useState([
      {
        id: 8,
        name: 'Bones Specialist',
      },
  ]);

  const onItemSelect = (item) => {
      const items = selectedItems.slice(); //A way to force rerender
      // if (!items.includes(item)){
      //   items.push(item)
      //   setSelectedItems(items);
      // }
      setSelectedItems([item]);
  }

  const onRemoveItem = (item, index) => {
      const items = selectedItems.filter((sitem) => sitem.id !== item.id);
      setSelectedItems(items);
  }

  const onIconPress = () => {
    // console.log('Icon Pressed !');
    setShowDatePicker(true);
  }

  // console.log('Date: ', date.toISOString())
  const formattedDate = date.toISOString().split('T')[0];
  console.log('Formatted date ', formattedDate)

  const searchParams = [{title: 'specialities', value:selectedItems[0].name}, {title: 'date', value:formattedDate}, {title: 'address', value:'Bayer View'}, {title: 'policy', value: 'Policy 1'}]
  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{backgroundColor:'#fff', paddingBottom:30}}
        keyboardShouldPersistTaps='always'
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
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
                {'    '} Search doctor
              </Text>
            </View>
          </View>
          <View style={styles.body}>
            {/* Mapping and displaying the different specialities for selectioned items*/}
            <View style={{flexDirection:'row', flexWrap:'wrap', justifyContent:'space-around', marginTop:15, paddingHorizontal:5}}>
                {selectedItems.map(item => <SpecialityCard key={item.id} item={item} title={item.name} onRemoveItem={onRemoveItem} />)}
            </View>
            
            <SearchDropdown
              dropItems={dropItems}
              onItemSelect={onItemSelect}
              onRemoveItem={onRemoveItem}
              selectedItems={selectedItems}
            />
            <CustomTextInput
              name='Backing Date'
              keyboardType='date'
              value={formattedDate}
              imageSource={require('../assets/cal.png')}
              imageStyles={{tintColor:'#ecc13b'}}
              onIconPress={onIconPress}
            />
            <DatePicker
              modal
              mode="date"
              open={showDatePicker}
              date={date}
              onConfirm={(date) => {
                setShowDatePicker(false);
                setDate(date)
              }}
              onCancel={() => {
                setShowDatePicker(false);
              }}
            />
            <CustomTextInput
              name='Address'
              keyboardType='default'
              placeholder=''
              imageSource={require('../assets/location.png')}
            />
            <CustomTextInput
              name='Insurance Policy'
              keyboardType='default'
              placeholder=''
              imageSource={require('../assets/dropdown.png')}
            />
            <Button
              name='Search'
              viewStyle={{marginVertical:30}}
              onPress={() => navigation.navigate('Results', {searchParams: JSON.stringify(searchParams)})}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '##f5efdb',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 110,
    backgroundColor: '#f5efdb',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  body: {
    marginTop: 30,
    paddingHorizontal:20,
    backgroundColor: 'white',
    borderColor: 'gray',
    height: 500,
    borderRadius: 15,
    flex: 1,
  },
  footer: {
    backgroundColor: '#fff',
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  labelContainer: {
    backgroundColor: 'white',
    alignSelf: 'flex-start',
    paddingHorizontal: 3,
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
    zIndex: 0, // En
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signIn: {
    width: 300,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  buton: {
    alignItems: 'flex-end',
    marginTop: 30,
    backgroundColor: '#ecc13b',
    alignItems: 'center',
    borderRadius: 50,
    width: 250,
  },
});
