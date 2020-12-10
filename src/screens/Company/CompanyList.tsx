"use strict";
import React, { Component } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  ImageBackground,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { FlatList } from "react-native-gesture-handler";
import { ICompany } from "../../constants/Company";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
interface IProps {
  loadCompany: any;
  favoriteCompany: any;
  companies: Array<any>;
}
interface IState {}

export default class CompanyList extends Component<IProps, IState> {
  renderItem = ({ item }: { item: ICompany }) => {
    const { loadCompany, favoriteCompany } = this.props;
    return (
      <View style={styles.cellWrapper}>
        <TouchableHighlight
          onPress={() => loadCompany(item)}
          underlayColor="white"
          style={styles.itemContainer}
        >
          <View>
            <View style={{ height: 320 }}>
              <ImageBackground style={styles.thumbnail} source={require('../../assets/img/4E307995-3444-3FA2-19CC-D19EF40E525C.jpg')} />
            </View>
            <View style={{paddingHorizontal: 16, paddingBottom: 16}}>
              <View style={styles.companyDetailContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <TouchableHighlight
                  style={{flex: 1, marginTop: -10, marginRight: -15}}
                  underlayColor="transparent"
                >
                  <MaterialCommunityIcons 
                    name="dots-vertical" 
                    size={30} 
                    style={styles.icon}
                  />
                </TouchableHighlight>
              </View>
              <View style={{ flexDirection: "row" }}>
                <TouchableHighlight
                  onPress={() => favoriteCompany(item)}
                  underlayColor="transparent"
                >
                  <Icon
                    name={item.isFavorited ? "ios-heart" : "ios-heart-empty"}
                    size={30}
                    color={"red"}
                    style={styles.icon}
                    ref={"favoriteIcon" + item.id}
                  />
                </TouchableHighlight>
                <TouchableHighlight
                  onPress={() => favoriteCompany(item)}
                  underlayColor="transparent"
                >
                  <MaterialIcons name="directions" size={30} color="black" />
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    );
  };

  render() {
    const { companies } = this.props;
    return (
      <FlatList
        contentContainerStyle={styles.contentContainer}
        data={companies}
        renderItem={this.renderItem}
        showsVerticalScrollIndicator={false}
        automaticallyAdjustContentInsets={false}
        ref="listView"
      />
    );
  }
}

var styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: "#e8e8e8",
  },
  itemContainer: {
    backgroundColor: "#ffffff",
  },
  cellWrapper: {
    backgroundColor: "#d8d8d8",
    shadowColor: "blue",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginBottom: 8,
  },
  name: {
    color: "#707070",
    textAlign: "left",
    textTransform: "uppercase",
    flex: 9
  },
  description: {
    color: "black",
    fontSize: 15,
  },
  thumbnail: {
    width: 400,
    height: 300,
    borderRadius: 50,
  },
  city: {
    alignSelf: "center",
  },
  icon: {
    height: 30,
    width: 30,
  },
  companyDetailContainer: { 
    flex: 10, 
    height: 40,  
    flexDirection: "row"
  }
});
