import React, { Component } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { APP_STYLES } from "../../utils/AppStyles";
import { ICompany } from "../../constants/Company";
import { FlatList } from "react-native-gesture-handler";
interface IProps {
  services: Array<any>;
  loadDateTime: (service: any) => any;
  company: ICompany
}

export default class ServiceList extends Component<IProps> {
  renderRow({ item }: { item: any }) {
    return (
      <View style={styles.cellContainer}>
        <TouchableHighlight
          onPress={() => this.props.loadDateTime(item)}
          underlayColor="transparent"
        >
          <View style={styles.cellWrapper}>
            <View style={styles.titleWrapper}>
              <Text style={styles.name}>{item.name}</Text>
            </View>
            <View style={styles.priceWrapper}>
              <Text style={styles.price}>
                {item.pivot.price ? item.pivot.price | 0 : "-"} RS
              </Text>
              <View style={styles.bookButtonWrapper}>
                <Icon
                  name="ios-add"
                  size={20}
                  color="white"
                  style={styles.calendarIcon}
                />
                <Text style={styles.bookButton}>ADD</Text>
              </View>
            </View>
          </View>
        </TouchableHighlight>
        <View style={styles.separator} />
      </View>
    );
  }

  render() {
    const { services } = this.props;

    return (
      <FlatList
        data={services}
        renderItem={this.renderRow.bind(this)}
        automaticallyAdjustContentInsets={false}
        style={styles.container}
      />
    );
  }
}

var styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFD",
    margin: 10,
  },
  cellContainer: {},
  cellWrapper: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "flex-start",
    marginTop: 10,
    marginBottom: 10,
    alignItems: "center",
  },
  titleWrapper: {
    justifyContent: "flex-start",
    flex: 2,
  },
  priceWrapper: {
    justifyContent: "flex-end",
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
  },
  name: {
    color: "#000000",
    fontSize: 20,
  },
  price: {
    textAlign: "right",
    color: "gray",
    fontSize: 13,
  },
  bookButtonWrapper: {
    flexDirection: "row",
    marginLeft: 10,
    backgroundColor: APP_STYLES.primaryColor,
    justifyContent: "center",
    padding: 4,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 2,
  },
  bookButton: {
    color: "white",
    textAlign: "right",
    fontSize: 12,
    alignSelf: "center",
    paddingLeft: 3,
    fontWeight: "700",
  },
  separator: {
    height: 1,
    backgroundColor: "#E8E8E8",
  },
  calendarIcon: {
    height: 20,
    width: 20,
  },
});
