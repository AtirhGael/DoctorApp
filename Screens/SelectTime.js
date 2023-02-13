import React from 'react';
import Schedule, { TimeCard } from '../components/Schedule';
import {View, FlatList} from 'react-native';

const SelectTime = ({navigation}) => {
    const RenderBeforeButton = () => {
        return (
            <View style={{ justifyContent:'space-evenly',}}>
                <FlatList
                    // horizontal={true}
                    contentContainerStyle={{alignItems:'center', justifyContent:'space-between', marginTop:5}}
                    numColumns={2}
                    data={[{id:1, time:'10-11 AM'},{id:2, time:'01-2:30 PM'},{id:3, time:'03-04 PM'},{id:4, time:'07-7:30 pM'},]}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                        <TimeCard
                            time={item.time}
                            // cardStyle={{height:45, width:120, marginHorizontal:15, marginVertical:100, borderWidth:2, marginBottom:4, borderWidth:0.1}}
                            inactiveColor='#fff'
                            />)}
                />
            </View>
        )
    }
    return (
        <Schedule
            // agendaStyle={{backgroundColor:'#f5efdb'}}
            calendarType
            RenderBeforeButton={RenderBeforeButton}
            buttonName='Next'
            // buttonContainerStyle={{alignItems:'flex-end', flexDirection:'row'}}
            buttonContainerStyle={{paddingVertical:8, flex:1, alignItems:'flex-end', justifyContent:'center', flexDirection:'row',}}
            // buttonContainerStyle={{marginTop:5, alignItems:'baseline', flexDirection:'column', justifyContent:'center'}}
            onButtonPress={() => navigation.navigate('Appoint')}
        />
    )
}

export default SelectTime;