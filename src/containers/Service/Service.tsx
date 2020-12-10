import React, { Component } from 'react';
import { Image, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { fetchService } from '../../actions/Service/service';
import LoadingIndicator from '../../components/LoadingIndicator';
import { CommonActions } from '@react-navigation/native';
import { ICompany } from '../../constants/Company';
import CompanyList from '../../screens/Company/CompanyList';
import { AppState } from '../../store/configure-store';
import { ThunkDispatch } from 'redux-thunk';
import { AppActions } from '../../constants/ActionTypes';
import { fetchCompany } from '../../actions/Company/company';
interface IProps {
  route: any;
  serviceReducer: any;
  companies: any;
}
interface IState {}
interface LinkStateProps {}
interface LinkDispatchProps {
  fetchService: (id: string, requiredFields: string[]) => void;
  favoriteCompany: (company:ICompany) => void;
}
type Props = IProps & LinkStateProps & LinkDispatchProps;

class Service extends Component<Props, IState> {
  
  constructor(props: Props) {
    super(props);
    const itemId = this.props.route.params.itemID;
    this.props.fetchService(itemId,['companies'])
    this.favoriteCompany = this.favoriteCompany.bind(this);
  }

  loadCompany(company: ICompany) {
    return CommonActions.navigate("Company",{
      title: company.name,
      itemID: company.id
    });
  }

  favoriteCompany(company: ICompany) {
    this.props.favoriteCompany(company);
  }

  render() {
    const {serviceReducer, companies } = this.props;
    return (
      <ImageBackground source={require('./../../assets/img/bg.png')} style={{flex: 1,paddingTop: 64,backgroundColor:'white'}} >
        {serviceReducer.isFetching && <LoadingIndicator />  }
        <CompanyList
          loadCompany={this.loadCompany}
          favoriteCompany={this.favoriteCompany}
          companies={companies}
        />
      </ImageBackground>
    );
  }
}

function mapStateToProps(state: AppState,ownProps: IProps) {
  const { serviceReducer,entities} = state;
  const service = entities.services[ownProps.route.params.itemID];

  return {
    serviceReducer,
    userReducer:state.userReducer,
    companies:service && service.companies ? service.companies.map((service: any) => entities.companies[service]) : [] ,
  }

}

function mapDispatchToProps(
  dispatch: ThunkDispatch<any, any, AppActions>,
  ownProps: IProps
): LinkDispatchProps {
  return {
    fetchService: (id: string, requiredFields: string[]) => {
      dispatch(fetchService(id, requiredFields));
    },
    favoriteCompany: (company:ICompany) => {
      dispatch(fetchCompany(company.id, []));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Service);
