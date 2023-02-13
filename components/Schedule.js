import { style } from '@mui/system';
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Agenda, Calendar} from 'react-native-calendars';
import {Card, Avatar} from 'react-native-paper';
import Button from './Button';

const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

export const TimeCard = ({time, cardStyle, inactiveColor}) => {
  const [selected, setSelected] = useState(false);
  return (
    <TouchableOpacity onPress={() => {
      setSelected(!selected)
      console.log('Is time ', time, ' selected: ', selected)
      }}>
      <View style={[styles.timeCard, {backgroundColor: selected? '#f5efdb': inactiveColor || '#c9c9c9'}, cardStyle,]}>
        <Text style={{fontSize:13.2, color:'#000'}}>{time}</Text>
      </View>
    </TouchableOpacity>
  )
}

const Schedule = ({onButtonPress, agendaStyle, showTimeCards, calendarType, RenderBeforeButton, buttonContainerStyle, buttonName}) => {
  const [items, setItems] = useState({});
  const [selectedDay, setSelectedDay] = useState('2017-05-16');
  const [markedDates, setMarkedDates] = useState({'2022-04-25':{selected:true, marked:true}});

  const loadItems = (day) => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!items[strTime]) {
          items[strTime] = [];
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: 'Appointed' + strTime + ' #' + j+'With the doctor Azimut Berrinuy',
              height: Math.max(50, Math.floor(Math.random() * 150)),
            });
          }
        }
      }
      const newItems = {};
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 1000);
  };

  const renderItem = (item) => {
    return (
      <TouchableOpacity style={{marginTop: 17}}>
        <Card>
          <Card.Content>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <View style={{flex:3}}>
                  <Text lineBreakMode='tail' numberOfLines={4}>{item.name}</Text>
                </View>
              <Avatar.Text style={{flex:1}} label="J" />
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

  if (calendarType) return (
    <>
      <Calendar
        markedDates={markedDates}
        // disabledByDefault
        // style={{borderWidth:1}}
        onDayPress={(date) => {
          let noHookMarked = markedDates;
          let marked = noHookMarked[date.dateString];
          if(marked) {
            delete noHookMarked[date.dateString]
          } else{
            noHookMarked[date.dateString] = {selected:true, marked:true};
          }
          setMarkedDates(JSON.parse(JSON.stringify(noHookMarked)));
        }}
        calendarStyle={{
          backgroundColor:'#f5efdb'
        }}
        enableSwipeMonths
        theme={{
          calendarBackground:'#f5efdb',
          selectedDayBackgroundColor:'#ffffff',
          selectedDayTextColor:'#ecc13b',
          selectedDotColor:'#ecc13b'
        }}
      />
      {showTimeCards ? <View style={styles.timeCardContainer}>
        <TimeCard
          time='7H00PM'
        />
        <TimeCard
          time='8H00PM'
        />
        <TimeCard
          time='9H00PM'
        />
        <TimeCard
          time='10H00PM'
        />
      </View> : null}

      {RenderBeforeButton && <RenderBeforeButton/>}
      
      <View  style={buttonContainerStyle}>
        <Button name={buttonName} onPress={onButtonPress}/>
      </View>
    </>
  )

  return (
    <>
      <Agenda
        disabledByDefault
        onDayPress={(date) => setSelectedDay(date.dateString)}
        calendarStyle={{
          backgroundColor:'#f5efdb'
        }}
        style={[
          // {backgroundColor:'#f5efdb'},
           agendaStyle]}
        items={items}
        loadItemsForMonth={loadItems}
        selected={'2017-05-16'}
        // renderHeader={(date) => <View style={{borderWidth:1}}><Text>{date.getDay()}</Text></View>}
        renderItem={renderItem}
        renderKnob={() => <View style={styles.knobStyles} />} //The knob is actually the droping and pushing up bar to see the agenda
        theme={{
          dotColor:'#ecc13b',
          selectedDayTextColor:'#fff',
          selectedDotColor:'#fff',
          selectedDayBackgroundColor:'#ecc13b',
          // backgroundColor:'#f5efdb'
        }}
        contentContainerStyle={{backgroundColor:'#f5efdb'}}
      />
      {/* {showTimeCards ? <View style={styles.timeCardContainer}>
        <TimeCard
          time='7H00PM'
        />
        <TimeCard
          time='8H00PM'
        />
        <TimeCard
          time='9H00PM'
        />
        <TimeCard
          time='10H00PM'
        />
      </View> : null}

      {RenderBeforeButton && <RenderBeforeButton/>}
      
      <View  style={buttonContainerStyle}>
        <Button name={buttonName} onPress={onButtonPress}/>
      </View> */}
    </>
  );
};

export default Schedule;

const styles = StyleSheet.create({
  knobStyles:{
    marginTop:10,
    height:6,
    width:50,
    backgroundColor:'#ecc13b',
    borderRadius:3
  },
  timeCardContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly',
  },
  timeCard:{
    height:30,
    width:70,
    borderRadius:5,
    alignItems:'center',
    justifyContent:'center',
    marginTop:5,
    marginHorizontal:10,
    backgroundColor:'#fff',
    borderWidth:StyleSheet.hairlineWidth,
    borderColor:'#ccc',
    height:45,
    width:130,
    marginVertical:6
  }
})