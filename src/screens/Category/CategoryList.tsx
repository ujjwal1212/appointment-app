import React, { Component } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  ListView,
} from "react-native";
import LoadingIndicator from "../../components/LoadingIndicator";
import { FlatList } from "react-native-gesture-handler";
import { ICategory } from "../../constants/Category";

interface IProps {
  categoriesReducer: any;
  loadCategory: (category: any) => void;
  categories: Array<ICategory>;
}
interface IState {}

export default class CategoryList extends Component<IProps, IState> {
  public extractKey = ({ id }: ICategory) => id;
  renderHeader() {
    return this.props.categoriesReducer.isFetching && <LoadingIndicator />;
  }

  getCategoryImage(name: string) {
    var name = name.replace(/\s+/g, "-").toLowerCase();
    if (name == "salon") {
      return require("./../../assets/img/salon.png");
    } else if (name == "clinic") {
      return require("./../../assets/img/clinic.png");
    } else if (name == "spa") {
      return require("./../../assets/img/spa.png");
    } else if (name == "home-service") {
      return require("./../../assets/img/home-service.png");
    }
  }

  renderItem = ({ item }: { item: ICategory}) => {
    var img = this.getCategoryImage(item.name);
    return (
      <TouchableHighlight
        onPress={() => this.props.loadCategory(item)}
        underlayColor="transparent"
      >
        <View style={styles.row}>
          <View style={styles.cellWrapper}>
            <Image source={img} style={styles.thumbnail} />
            <Text style={styles.text}> {item.name}</Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }

  renderRow(category: ICategory) {
    var img = this.getCategoryImage(category.name);
    return (
      <TouchableHighlight
        onPress={() => this.props.loadCategory(category)}
        underlayColor="transparent"
      >
        <View style={styles.row}>
          <View style={styles.cellWrapper}>
            <Image source={img} style={styles.thumbnail} />
            <Text style={styles.text}> {category.name}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    const { categories } = this.props;
    return (
      <FlatList
        contentContainerStyle={styles.contentContainer}
        data={categories.filter((category) => !!category)}
        keyExtractor={this.extractKey}
        renderItem={this.renderItem}
        ListHeaderComponent={() => this.renderHeader()}
        contentInset={{ top: 100, bottom: 100 }}
        showsVerticalScrollIndicator={false}
        automaticallyAdjustContentInsets={false}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 64,
    backgroundColor: "white",
  },
  contentContainer: {
    justifyContent: "center",
  },
  row: {
    flex: 1,
    alignItems: "center",
    opacity: 0.9,
    padding: 10,
  },
  cellWrapper: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "white",
    opacity: 0.7,
    alignItems: "center",
    overflow: "hidden",
    justifyContent: "center",
  },
  thumbnail: {
    width: 80,
    height: 80,
  },
  text: {
    color: "black",
    fontSize: 20,
    fontWeight: "800",
  },
});
