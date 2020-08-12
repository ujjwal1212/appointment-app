'use strict';
import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, View, ListView} from 'react-native';
interface IProps {
  company: any;
}
interface IState {}
export default class CompanyItem extends Component<IProps, IState> {

  renderContent(company: any) {
    return (
      <Image source={{uri:company.image}} style={styles.container}>
        <View style={styles.textView}>
          <Text style={styles.name}>{company.name_en}</Text>
        </View>
      </Image>
    )
  }

  render() {
    const {company} = this.props;
    if (company.id && company.id > 0) {
      return this.renderContent(company);
    }
    return <View/>;
  }

}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 300,
    opacity:.8,
    justifyContent:'flex-end'
  },
  textView:{
    backgroundColor: 'black',
    opacity: 0.8,
    justifyContent:'center',
    alignItems:'center'
  },
  name: {
    color:'white',
    fontSize:26,
    fontWeight:'600',
    alignSelf:'center',
    paddingTop:10,
    paddingBottom:10,
  }

});
