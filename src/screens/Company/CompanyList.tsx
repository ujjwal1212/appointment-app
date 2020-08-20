'use strict';
import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { FlatList } from 'react-native-gesture-handler';
import { ICompany } from '../../constants/Company';
import { Card } from 'react-native-paper';
interface IProps {
  loadCompany: any;
  favoriteCompany: any;
  companies: Array<any>
}
interface IState {}

export default class CompanyList extends Component<IProps, IState> {

  renderItem = ({ item }: { item: ICompany}) => {
    const {loadCompany, favoriteCompany} = this.props;
    return (
      <Card style={styles.cellWrapper}>
        <TouchableHighlight onPress={() => loadCompany(item)} underlayColor="transparent">
          <View style={{justifyContent:'center',alignItems:'center'}}>
            <Image style={styles.thumbnail} source={{uri:item.image}}/>
            <View style={{flexDirection:'column',marginLeft:10,justifyContent:'center',alignItems:'center'}} >
              <Text style={styles.name} numberOfLines={5}> {item.name}</Text>
              <View style={{flexDirection:'row',marginTop:5}}>
                <Icon
                  name='ios-pin'
                  size={20}
                  color={'#99ddff'}
                  style={styles.followIcon}
                />
                <Text style={styles.city}>{item.city},{item.address}</Text>
              </View>
              <TouchableHighlight onPress={() => favoriteCompany(item)} underlayColor="transparent">
                <Icon
                  name={item.isFavorited ? 'ios-heart' : 'ios-heart-empty'}
                  size={30}
                  color={'red'}
                  style={styles.heartIcon}
                  ref={"favoriteIcon" + item.id}
                />
              </TouchableHighlight>
            </View>
          </View>
        </TouchableHighlight>
      </Card>
    )
  }

  render() {
    const {companies} = this.props;
    return (
      <FlatList
        contentContainerStyle={styles.contentContainer}
        data={companies}
        renderItem={this.renderItem}
        showsVerticalScrollIndicator={false}
        automaticallyAdjustContentInsets={false}
        ref='listView'
      />
    )
  }
}


var styles = StyleSheet.create({
  contentContainer:{
    paddingVertical:10,
    paddingHorizontal:5
  },
  cellWrapper: {
    marginBottom: 10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor: 'white',
    opacity: 0.7,
    shadowColor: "blue",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    }
  },
  name: {
    color: 'turquoise',
    textAlign:'left',
    fontWeight:'700',
    fontSize:16

  },
  description: {
    color: 'black',
    fontSize: 15,
  },
  thumbnail: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  city:{
    color:'gray',
    alignSelf:'center'
  },
  followIcon: {
    height:20,
    width:20
  },
  heartIcon:{
    height:30,
    width:30,
  }

});