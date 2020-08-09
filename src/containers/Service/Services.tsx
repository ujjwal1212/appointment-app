'use strict';
import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import {connect} from 'react-redux';
import {fetchServices} from '../../actions/Service/services';
import ServiceList from './../../components/Service/ServiceList';
import LoadingIndicator from '../../components/LoadingIndicator';
import { Actions } from 'react-native-router-flux';

class Services extends Component {

  componentWillMount() {
    //this.props.dispatch(fetchServices());
  }

  loadService(service) {
    return Actions.serviceEntity({
      data: service
    });
  }

  render() {

    const { services } = this.props;

    if (services.isFetching) {
      return <LoadingIndicator />;
    }

    return (
      <ServiceList services={this.props.data} loadService={this.loadService}/>
    );

  }
}

function mapStateToProps(state) {
  return {
    services: state.services
  }
}

export default connect(mapStateToProps)(Services)
