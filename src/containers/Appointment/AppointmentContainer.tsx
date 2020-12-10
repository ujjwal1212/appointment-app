import React, { Component } from 'react';
import { ScrollView,Alert,View,Text } from 'react-native';
import { connect } from 'react-redux';
import { fetchTimings } from '../../actions/timings';
import { createAppointment, invalidateCreatedAppointment } from '../../actions/appointments';
import FormButton from '../../components/FormButton';
import { StackNavigationProp } from '@react-navigation/stack';
import { BottomTabParamList } from '../../../types';
import { ThunkDispatch } from 'redux-thunk';
import { AppActions } from '../../constants/ActionTypes';
import { AppState } from '../../store/configure-store';
import AppointmentConfirm from '../../screens/Appointment/AppointmentConfirm';
import TimingList from '../../screens/Appointment/TimingList';
import AppointmentList from '../../screens/Appointment/AppointmentList';
import Calendar from '../../screens/Appointment/Calendar';
import Appointment from '../../constants/Appointment';
import EmployeePicker from '../../screens/Company/EmployeePicker';
import { SafeAreaView } from 'react-native-safe-area-context';

interface IProps {
  navigation: StackNavigationProp<BottomTabParamList>;
  route: any;
  timings: any;
  employees: Array<any>;
  company: any;
  userReducer: any;
  service: any;
  timingsReducer: any;
}
interface IState {
  selectedDate: Date,
  selectedTime: any,
  selectedEmployee: any,
  showEmployeeListModal : boolean,
  showAppointmentConfirmModal : any,
}

interface LinkStateProps {}

interface LinkDispatchProps {
  fetchTimings : () => void;
  invalidateCreatedAppointment: () => void;
  createAppointment: (data: Appointment) => void;
}

type Props = IProps & LinkStateProps & LinkDispatchProps;

class AppointmentContainer extends Component<Props, IState> {

  constructor(props: Props) {
    super(props);
    this.state={
      selectedDate: new Date(),
      selectedTime: {},
      selectedEmployee: {},
      showEmployeeListModal : false,
      showAppointmentConfirmModal : false
    };
    this.handleConfirm = this.handleConfirm.bind(this);
  }

  componentDidMount() {

    this.props.fetchTimings();

    if(this.props.userReducer.isAuthenticated) {
      this.props.invalidateCreatedAppointment();
    }
  }

  public listEmployees = () => {
    this.setState({ showEmployeeListModal:true });
  }

  public onDateChange = (date: Date) => {
    this.setState({ selectedDate: date });
  }

  public onTimeSelect = (time: any) => {
    this.setState({ selectedTime: time });
  };

  public onEmployeeSelect = (employee: any) => {
    this.setState({
      selectedEmployee:employee,
      showEmployeeListModal:false
    });
  }

  public onEmployeeListModalClosed = () => {
    this.setState({ showEmployeeListModal:false });
  }

  public onAppointmentConfirmModalListClosed = () => {
    this.setState({ showAppointmentConfirmModal:false });
  }

  public handleNext = () => {
    this.setState({ showAppointmentConfirmModal:true });
  }

  public inValidateAppointment = () => {
    this.props.invalidateCreatedAppointment();
    return this.props.navigation.goBack();
  }

  public handleConfirm = () => {
    const data = { ...this.props, ...this.state};
    const appointmentData = new Appointment(data);
    this.props.createAppointment(appointmentData);
  }

  render() {
    console.log(this.props);
    const {timings,employees,company,userReducer,service,timingsReducer} = this.props;
    return (
      <SafeAreaView
        style={{ flex:1, backgroundColor:'white' }}
      >
        <Calendar
          selectedDate={this.state.selectedDate}
          onDateChange={this.onDateChange}
        />

        <AppointmentList
          service={service}
          selectedEmployee={this.state.selectedEmployee}
          listEmployees={this.listEmployees}
        />

        <TimingList
          timings={timings}
          selectedTime={this.state.selectedTime}
          onTimeSelect={this.onTimeSelect}
          timingsReducer={timingsReducer}
        />

        <AppointmentConfirm
          company={company}
          service={service}
          userReducer={userReducer}
          selectedEmployee={this.state.selectedEmployee}
          selectedTime={this.state.selectedTime}
          selectedDate={this.state.selectedDate}
          showAppointmentConfirmModal={this.state.showAppointmentConfirmModal}
          onClosed={this.onAppointmentConfirmModalListClosed}
          onAppointmentConfirm={this.handleConfirm}
          inValidateAppointment={this.inValidateAppointment}
        />

        {!this.state.showAppointmentConfirmModal  &&
        <FormButton
          onPress={this.handleNext}
          buttonText='Next'
          containerStyle={{padding:5,margin:10,marginTop:0,marginBottom:0,backgroundColor:'tomato',opacity:0.7}}
        />
        }
      </SafeAreaView>
    );
  }
}

function mapStateToProps(state: AppState,ownProps: IProps) {
  const { entities } = state;
  const company = entities.companies[ownProps.route.params.companyID];
  const service = entities.services[ownProps.route.params.serviceID];
  console.log(company);
  console.log(service);
  return {
    timingsReducer:state.timingsReducer,
    userReducer:state.userReducer,
    company,
    service,
    employees:company?.employees ? company.employees.map((employeeID: string)=>entities.employees[employeeID]) : [],
    timings:entities.timings
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
    invalidateCreatedAppointment: () => {
      dispatch(invalidateCreatedAppointment())
    },
    createAppointment: (data: Appointment) => {
      dispatch(createAppointment(data))
    }
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentContainer)
