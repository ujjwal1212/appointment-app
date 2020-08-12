import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';

export default class ProfileScene extends Component {
  private navigation = useNavigation();
  openFilterScreen() {
    return this.navigation.goBack();
  }

  filterItem() {
    return {
      title:'×',
      onPress: this.openFilterScreen,
    }
  }

  render() {
    return (
      <FlatList
      >
        <F8PureListView
          enableEmptySections={true}
          title='Profile'
          renderEmptyList={() =>
            <ProfileInfo />
          }
        />
      </F8ListContainer>
    )
  }
}

const ProfileInfo = () => {
    return (
      <View style={[styles.container]}>
        <View style={styles.header}>
          <Text style={styles.title}>Profile Page</Text>
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop:10
  },
  header: {
    flex:1,
    padding:10,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold'
  }
});