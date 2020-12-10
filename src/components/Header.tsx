import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import Geocoder from "react-native-geocoding";
import Geolocation from "react-native-geolocation-service";

interface IProps {
  style?: any;
  allowFontScaling: string;
}

export default class LocationHeader extends Component<IProps> {
  constructor(props:any) {
    super(props);
    this.state = {
      latitude: 0,
      longitude: 0,
      error: null,
      address: null
    }
  }
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  }
});
