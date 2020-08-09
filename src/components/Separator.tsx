import React from 'react';
import { View } from 'react-native';
 interface IProps {
   style?: any;
 }

export default class Separator extends React.Component<IProps> {
  render() {
    return (
      <View style={[{height:1, backgroundColor:'#E8E8E8'}, this.props.style]}/>
    );
  }
}
