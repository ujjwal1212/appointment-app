'use strict';
import React, {  Component } from 'react';
import { ScrollView, Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
interface IProps {
  loadService: (service: any) => void;
  services: Array<any>
}
interface IState {}

export default class ServiceSidebarList extends Component<IProps, IState> {
  renderRow(service: any) {
    return (
      <View style={styles.cellContainer}>
        <TouchableHighlight onPress={() => this.props.loadService(service)} underlayColor='transparent'>
          <View style={styles.cellWrapper}>
            <View style={styles.titleWrapper}>
              <Text style={styles.name}>
                {service.name_en}
              </Text>
            </View>
          </View>
        </TouchableHighlight>
        <View style={styles.separator}/>
      </View>
    )
  }

  render() {
    const {services} = this.props;

    return (
      <ScrollView style={styles.container} >
        <Text style={styles.sectionHeader}>Select Service</Text>
        <FlatList
          data={services}
          renderItem={this.renderRow.bind(this)}
          automaticallyAdjustContentInsets={false}
        />
      </ScrollView>

    )

  }

}

var styles = StyleSheet.create({
  container: {
    margin:5
  },
  cellContainer:{
  },
  cellWrapper: {
    flexDirection:'row',
    flex:1,
    justifyContent:'flex-start',
    marginTop:10,
    marginBottom:10,
    alignItems:'center'
  },
  titleWrapper: {
    justifyContent:'flex-start',
    flex:2,
  },
  priceWrapper:{
    justifyContent:'flex-end',
    flexDirection:'row',
    flex:1,
    alignItems:'center'
  },
  name: {
    color:'#ecf2f9',
    fontSize:20,
    opacity:.9
  },
  separator: {
    height:1,
    backgroundColor:'#E8E8E8',
    opacity:.1
  },
  calendarIcon :{
    height:20,
    width:20
  },
  sectionHeader: {
    color:'gray'
  },

});
