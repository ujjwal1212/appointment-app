'use strict';
import React, { Component } from 'react';
import { View, ScrollView, Image } from 'react-native';
import { connect } from 'react-redux';
import { fetchService } from '../../actions/Service/service';
import { favoriteCompany } from '../../actions/favorites';
import { Actions } from 'react-native-router-flux';
import CompanyList from './../../components/Company/CompanyList';
import LoadingIndicator from '../../components/LoadingIndicator';

class Service extends Component {
  
  constructor() {
    super();
    this.favoriteCompany = this.favoriteCompany.bind(this);
  }

  componentDidMount() {
    if(this.props.itemID) {
      this.props.dispatch(fetchService(this.props.itemID,['companies']));
    }
  }

  loadCompany(company) {
    return Actions.companyEntity({
      title:company.name_en,
      itemID: company.id
    });
  }

  favoriteCompany(company) {
    this.props.dispatch(favoriteCompany(company));
  }

  render() {
    const {serviceReducer, companies } = this.props;
    return (
      <Image source={require('./../../assets/img/bg.png')} style={{flex: 1,width: null,height: null,paddingTop: 64,backgroundColor:'white'}} >
        {serviceReducer.isFetching && <LoadingIndicator />  }
        <CompanyList
          loadCompany={this.loadCompany}
          favoriteCompany={this.favoriteCompany}
          companies={companies}
        />
      </Image>
    );
  }
}

function mapStateToProps(state,ownProps) {
  const { serviceReducer,entities} = state;
  const service = entities.services[ownProps.itemID];

  return {
    serviceReducer,
    userReducer:state.userReducer,
    companies:service && service.companies ? service.companies.map((service) => entities.companies[service]) : [] ,
  }

}


export default connect(mapStateToProps)(Service);
