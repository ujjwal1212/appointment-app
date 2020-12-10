import React, {Component} from "react";
import {View, Linking,ActionSheetIOS } from "react-native";
import {connect} from "react-redux";
import {fetchCompany, setCompanyService} from "../../actions/Company/company";
import LoadingIndicator from "../../components/LoadingIndicator";
import CompanyMap from "../../screens/Company/CompanyMap";
import ServiceList from "../../screens/Service/ServiceList";
import CompanyItem from "../../screens/Company/CompanyItem";
import { ICompany } from "../../constants/Company";
import CompanyDescription from "../../screens/Company/CompanyDescription";
import CompanyContact from "../../screens/Company/CompanyContact";
import { ThunkDispatch } from "redux-thunk";
import { AppState } from '../../store/configure-store';
import { AppActions } from "../../constants/ActionTypes";
import SegmentedControlTab from "react-native-segmented-control-tab";
interface IProps {
  navigation: any;
  itemID: string;
  route: any;
  company: ICompany;
  services: Array<any>;
  companyReducer: any;
  entities: any;
}
interface IState {
  selectedIndex: number;
  selectedServices: Array<any>
}
interface LinkStateProps {}
interface LinkDispatchProps {
  fetchCompany: (id: string, requiredFields: Array<string>) => void;
  setCompanyService: (id: Array<string>) => void;
}

type Props = IProps & LinkStateProps & LinkDispatchProps;
class Company extends Component<Props, IState> {

  constructor(props: Props) {
    super(props);
    this.state = {
      selectedIndex : 0,
      selectedServices: []
    };
    const itemId = this.props.route.params.itemID;
    this.props.fetchCompany(itemId,['services','employees','favorites']);
  }

  public loadDateTime = (service: any) => {
    this.state.selectedServices.push(service.id);
    this.props.setCompanyService(this.state.selectedServices);
  }

  public bookAppointment = (service: any) => {
    this.props.setCompanyService(service.id);
    this.props.navigation.push("Appointment",{
      title: service.name,
      services: service.id,
      companyID: this.props.route.params.itemID
    });
  }

  private handleIndexChange = (index: number) => {
    this.setState({
      ...this.state,
      selectedIndex: index
    });
  };


  
  followLocation = (company: ICompany) => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        title: `${company.name}, ${company.address} - ${company.city}`,
        options: ['Open in Apple Maps', 'Open in Google Maps', 'Cancel'],
        destructiveButtonIndex: -1,
        cancelButtonIndex: 2,
      },
      (buttonIndex) => {
        this.openMaps(company,buttonIndex);
      }
    );

  }

  openMaps(company: ICompany,buttonIndex: number) {
    var address = encodeURIComponent(company.address);
    switch (buttonIndex) {
      case 0:
        Linking.openURL('http://maps.apple.com/?q=' + address);
        break;
      case 1:
        var nativeGoogleUrl = `comgooglemaps://?daddr=${parseFloat(company.latitude)},${parseFloat(company.longitude)}&center=${parseFloat(company.latitude)},${parseFloat(company.longitude)}&zoom=14&views=traffic&directionsmode=driving`;
        Linking.canOpenURL(nativeGoogleUrl).then((supported) => {
          var url = supported ? nativeGoogleUrl : 'http://maps.google.com/?q=' + address;
          Linking.openURL(url);
        });
        break;
    }

  }

  render() {
    const {company, services } = this.props;

    let selectedComponent;

    let mapPin = {
      title:company.name,
      subtitle:company.location,
      latitude:parseFloat(company.latitude),
      longitude:parseFloat(company.longitude)
    };

    if(this.state.selectedIndex === 1) {
      selectedComponent =
        <View>
          <CompanyDescription company={company} />
          <CompanyContact company={company} />
        </View>
    } else if(this.state.selectedIndex === 2) {
      selectedComponent =
        <CompanyMap
          company={company}
          followLocation={this.followLocation}
          pin={mapPin}
        />
    } else {
      if(company.services) {
        selectedComponent =
          <ServiceList company={company} services={services} loadDateTime={this.loadDateTime} />
      } else {
        selectedComponent =
          <LoadingIndicator />
      }
    }

    return (
      <View style={{ flex:1,backgroundColor:'white' }} >
        <CompanyItem company={company}/>
        <View>
          <SegmentedControlTab
            values={['Services', 'Description','Map']}
            selectedIndex={this.state.selectedIndex}
            onTabPress={this.handleIndexChange}
          />
          {selectedComponent}
        </View>
      </View>
    );
  }
}

function mapStateToProps(state: AppState,ownProps: IProps) {
  const { companyReducer,entities} = state;
  const company = entities?.companies[ownProps.route.params.itemID];
  return {
    companyReducer,
    company,
    services:company && company.services ? company.services.map((serviceID: any) => entities.services[serviceID]) : []
  }
}

function mapDispatchToProps(
  dispatch: ThunkDispatch<any, any, AppActions>,
  ownProps: IProps
): LinkDispatchProps {
  return {
    fetchCompany: (id: string, requiredFields: Array<any>) => {
      return dispatch(fetchCompany(id, requiredFields))
    },
    setCompanyService: (services: Array<string>) => {
      return dispatch(setCompanyService(services));
    }
   };
};


export default connect(mapStateToProps, mapDispatchToProps)(Company);
