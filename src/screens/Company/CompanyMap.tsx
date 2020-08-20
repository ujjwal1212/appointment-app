'use strict';
import React, { Component } from 'react';
import { StyleSheet,View,TouchableOpacity,Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
interface IProps {
  pin: any;
  company: any;
  followLocation: any;
}
interface IState {
  pin: any;
  region: any;
}
export default class CompanyMap extends Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);
    this.state = {
      pin: this.props.pin,
      region: this.getFitZoomMapRegionWithCoords(this.props.pin)
    }
  }

  getFitZoomMapRegionWithCoords(region: any) {
    var topLeftLatitude = -90;
    var topLeftLongitude = 180;
    var bottomRightLatitude = 90;
    var bottomRightLongitude = -180;

    topLeftLongitude = Math.min(topLeftLongitude, parseFloat(region.longitude));
    topLeftLatitude = Math.max(topLeftLatitude, parseFloat(region.latitude));
    bottomRightLongitude = Math.max(bottomRightLongitude, parseFloat(region.longitude));
    bottomRightLatitude = Math.min(bottomRightLatitude, parseFloat(region.latitude));

    var fitLatitude = topLeftLatitude - (topLeftLatitude - bottomRightLatitude) * 0.5;
    var fitLongitude = topLeftLongitude + (bottomRightLongitude - topLeftLongitude) * 0.5;
    var fitSpanLatDelta = Math.abs(topLeftLatitude - bottomRightLatitude) * 1.1;
    var fitSpanLongDelta = Math.abs(bottomRightLongitude - topLeftLongitude) * 1.1;
    if (fitSpanLatDelta == 0 && fitSpanLongDelta == 0) {
      fitSpanLatDelta = fitSpanLongDelta = 0.08;
    }
    var fitRegion = {
      latitude : fitLatitude,
      longitude : fitLongitude,
      latitudeDelta : fitSpanLatDelta,
      longitudeDelta : fitSpanLongDelta
    };

    return fitRegion;
  };

  render() {
    const {company,followLocation} = this.props;
    return (
      <MapView
        ref="map"
        style={styles.map}
        region={this.state.region}
      >
        <Marker
          ref={"ref"+company.id}
          key={"key"+company.id}
          coordinate={{latitude:parseFloat(company.latitude),longitude:parseFloat(company.longitude)}}
          title={company.name_en}
          description={`${company.address_en},${company.city_en}`}
          onSelect={() => followLocation(company)}
          pinColor="blue"
        />
        <View/>
      </MapView>
    );
  }
}

let styles = StyleSheet.create({
  map: {
    flex: 1,
    margin:5,
    height: 250,
    alignItems:'center'
  },
  getDirectionText:{
    textDecorationLine:'underline',
    paddingTop:20
  }
});