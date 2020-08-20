import React, {  Component } from 'react';
import { Dimensions,Linking, ActionSheetIOS } from 'react-native';
import { connect } from 'react-redux';
import { fetchCompanies } from '../../actions/Company/companies';
import { ICompany } from '../../constants/Company';
import { AppState } from '../../store/configure-store';
import { ThunkDispatch } from 'redux-thunk';
import { AppActions } from '../../constants/ActionTypes';
import CompanyMapsMarker from "../../screens/Company/CompanyMapsMarker";
import { Region } from 'react-native-maps';
interface IProps {
  companies: Array<ICompany>;
}
interface IState {
  region: Region;
}
interface LinkStateProps {}
interface LinkDispatchProps {
  fetchCompanies: () => void;
}
type Props = IProps & LinkStateProps & LinkDispatchProps;
class CustomMap extends  React.Component<Props, IState> {

  constructor(props: Props) {

    super(props);

    const { width, height } = Dimensions.get('window');
    const ASPECT_RATIO = width / height;
    const LATITUDE = -26.65085;
    const LONGITUDE = -57.53714;
    const LATITUDE_DELTA = 0.01;
    const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      }
    };
    this.props.fetchCompanies();
  }

  onRegionChange = (region: Region) => {
    this.setState({ region });
  }

  followLocation = (company: ICompany) => {
    console.log("followLocation");
    this.openMaps(company);

  }

  openMaps = (company: ICompany) => {
    const address = encodeURIComponent(company.address);
    const nativeGoogleUrl = `comgooglemaps://?daddr=${parseFloat(company.latitude)},${parseFloat(company.longitude)}&center=${parseFloat(company.latitude)},${parseFloat(company.longitude)}&zoom=14&views=traffic&directionsmode=driving`;
    Linking.canOpenURL(nativeGoogleUrl).then((supported) => {
      var url = supported ? nativeGoogleUrl : 'http://maps.google.com/?q=' + address;
      Linking.openURL(url);
    });
  }

  render() {
    const { companies } = this.props;
    return (
      <CompanyMapsMarker
        region={this.state.region}
        companies={companies}
        followLocation={this.followLocation}
        onRegionChange={this.onRegionChange}
      />
    );
  }
}

function mapStateToProps(state: AppState) {
  return {
    companies: state.entities.companies ? state.entities.companies : []
  }
}

function mapDispatchToProps(
  dispatch: ThunkDispatch<any, any, AppActions>,
  ownProps: IProps
): LinkDispatchProps {
  return {
    fetchCompanies: () =>  dispatch(fetchCompanies())
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomMap);
