import React, { Component } from 'react';
import { ScrollView, Image, RefreshControl,Linking,ActionSheetIOS } from 'react-native';
import { connect } from 'react-redux';
import { fetchAppointments,cancelAppointment } from '../../actions/appointments';
import { fetchTimings } from '../../actions/timings';
import { assets } from '../../utils/assets';
import LoadingIndicator from '../../components/LoadingIndicator';
import mapValues from 'lodash/mapValues';
import isEmpty from 'lodash/isEmpty';
import NoResult from '../../components/NoResult';
import { ThunkDispatch } from 'redux-thunk';
import { AppActions } from '../../constants/ActionTypes';
import { AppState } from '../../store/configure-store';
import { StackNavigationProp } from '@react-navigation/stack';
import { BottomTabParamList } from '../../../types';
import ConfirmedAppointmentList from '../../screens/Appointment/ConfirmedAppointmentList';

interface IProps {
  userReducer: any;
  navigation: StackNavigationProp<BottomTabParamList>;
  appointments: Array<any>;
  companies: Array<any>;
  services: Array<any>;
  timings: Array<any>;
  users: Array<any>;
  employees: Array<any>; 
}
interface IState {
  isRefreshing: boolean;
}
interface LinkStateProps {}
interface LinkDispatchProps {
  fetchTimings: () => void;
  fetchAppointments: () => Promise<any>;
  cancelAppointment: (id :any) => void;
}
type Props = IProps & LinkStateProps & LinkDispatchProps;
class AppointmentsContainer extends Component<Props, IState> {

  constructor(props: Props) {
    super(props);
    this.state={
      isRefreshing:false
    };
    if(this.props.userReducer.isAuthenticated) {
      this.props.fetchTimings();
      this.props.fetchAppointments();
    }
  }

  public cancelAppointment = (appointment: any) => {
    this.props.cancelAppointment(appointment.id);
  }

  public callback = () => {
    return this.props.navigation.navigate("Home");
  }

  public followLocation = (company: any) => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        title: `${company.name_en}, ${company.address_en} - ${company.city_en}`,
        options: ['Open in Apple Maps', 'Open in Google Maps', 'Cancel'],
        destructiveButtonIndex: -1,
        cancelButtonIndex: 2,
      },
      (buttonIndex) => {
        this.openMaps(company, buttonIndex);
      }
    );
  }
  
  openMaps(company: any,buttonIndex: any) {
    var address = encodeURIComponent(company.address_en);
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

  onRefresh = () => {
    this.setState({isRefreshing: true});
    this.props.fetchAppointments().then((val)=> this.setState({isRefreshing: false}));
  }

  render() {
    const { userReducer,appointments,companies,services,timings,users,employees } = this.props;

    const appointmentsArray = mapValues(appointments, (appointment) => {
      return Object.assign({},appointment,{
        company: companies[appointment.company],
        service: services[appointment.service],
        employee: appointment.employee ? employees[appointment.employee] : null,
        timing: timings[appointment.timing],
        user: users[appointment.user]
      });
    });

    return (
      <Image source={assets.bg} style={{flex:1,paddingTop:64,backgroundColor:'white'}}>
        <ScrollView
          automaticallyAdjustContentInsets={false}
          contentInset={{bottom:40}}
          refreshControl={
          <RefreshControl
            refreshing={this.state.isRefreshing}
            onRefresh={this.onRefresh}
            tintColor="pink"
            title="Loading..."
            colors={['white', 'red', 'green']}
            progressBackgroundColor="yellow"
          />
          }
        >

        { userReducer.appointments.isFetching && <LoadingIndicator /> }

        {
          isEmpty(appointmentsArray) ?
            <NoResult
              title="No Appointments Yet"
              description="login to manage your appointments"
              buttonText="Explore Salons"
              callback={this.callback}
            />
            :
            <ConfirmedAppointmentList
              appointments={appointmentsArray}
              cancelAppointment={this.cancelAppointment}
              followLocation={this.followLocation}
            />
        }

          </ScrollView>
      </Image>
    );
  }
}

function mapDispatchToProps(
  dispatch: ThunkDispatch<any, any, AppActions>,
  ownProps: IProps
): LinkDispatchProps {
  return {
    fetchTimings: () => {
      dispatch(fetchTimings())
    },
    fetchAppointments: () => {
      return dispatch(fetchAppointments());
    }, 
    cancelAppointment: (id: any) =>{
      return dispatch(cancelAppointment(id));
    }
   };
};

function mapStateToProps(state: AppState) {
  const { entities } = state;
  return {
    userReducer:state.userReducer,
    appointments:entities.appointments,
    companies:entities.companies,
    services:entities.services,
    employees:entities.employees,
    users:entities.users,
    timings:entities.timings,
  }
}

export default connect(mapStateToProps)(AppointmentsContainer);
