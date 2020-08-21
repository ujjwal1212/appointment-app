"use strict";
import React, { Component } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { FlatList } from "react-native-gesture-handler";
import { ICompany } from "../../constants/Company";
import { APP_STYLES } from "../../utils/AppStyles";
import Separator from "../../components/Separator";
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
            <View style={{ flex: 10, minHeight: 30,  flexDirection: "row" }}>
              <Text style={styles.name}>{item.name}</Text>
              <TouchableHighlight
                style={{flex: 1, marginTop: -10, marginRight: -15}}
                onPress={() => favoriteCompany(item)}
                underlayColor="transparent"
              >
                <Icon
                  name={item.isFavorited ? "ios-heart" : "ios-heart-empty"}
                  size={30}
                  color={"red"}
                  style={styles.heartIcon}
                  ref={"favoriteIcon" + item.id}
                />
              </TouchableHighlight>
            </View>
            <Separator style={{marginBottom: 10}}/>
            <View style={{ height: 110 }}>
              <View style={{backgroundColor: "grey"}}>
                <Image style={styles.thumbnail} source={{ uri: item.image }} />
              </View>
            </View>
            <Separator style={{marginBottom: 10}}/>
            <View >
              <View style={{ flexDirection: "row", marginTop: 5 }}>
                <Icon
                  name="ios-pin"
                  size={20}
                  color={"#99ddff"}
                  style={styles.followIcon}
                />
                <Text style={styles.city}>
                  {item.city},{item.address}
                </Text>
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
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: "#ffffff",
  },
  itemContainer: {
    backgroundColor: "#ffffff",
  },
  cellWrapper: {
    backgroundColor: "#ffffff",
    shadowColor: "blue",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 15,
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
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  city: {
    alignSelf: "center",
  },
  followIcon: {
    height: 20,
    width: 20,
  },
  heartIcon: {
    height: 30,
    width: 30,
  },
});
