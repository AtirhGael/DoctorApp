import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

const Calender = () => {
  return (
    <Calendar
      style={{backgroundColor: '#f5efdb'}}
      // Collection of dates that have to be marked. Default = {}
      markedDates={{
        '2012-05-16': {selected: true, marked: true, selectedColor: 'blue'},
        '2012-05-17': {marked: true},
        '2012-05-18': {marked: true, dotColor: 'red', activeOpacity: 0},
        '2012-05-19': {disabled: true, disableTouchEvent: true},
      }}
    />
  );
};

export default Calender;

const styles = StyleSheet.create({});
