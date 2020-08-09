import React, { Component } from 'react';
import { Dimensions} from 'react-native';
import CalendarPicker, { DateChangedCallback } from 'react-native-calendar-picker';
import { StackNavigationProp } from '@react-navigation/stack';
import { BottomTabParamList } from '../../../types';

interface IProps {
  selectedDate: any,
  onDateChange: any
}

export default class Calendar extends Component<IProps> {

  render() {
    const {selectedDate,onDateChange} = this.props;
    return (
      <CalendarPicker
        selectedStartDate={selectedDate}
        onDateChange={onDateChange}
        width={Dimensions.get('window').width}
      />
    );
  }

}