import React, { Component } from 'react';
import { Dimensions} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
;

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