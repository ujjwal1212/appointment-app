'use strict';
import React, { Component } from 'react';
import { StyleSheet,View,Text } from 'react-native';

export default class CompanyDescription extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          {this.props.company.description_en}
        </Text>
        <Text>
          {this.props.company.phone}
        </Text>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:5
  }
});