'use strict';
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

interface IProps {
  navigation: StackNavigationProp<BottomTabParamList>;
  companyID: string;
  serviceID: string;
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
  showAppointmentConfirmModal : boolean,
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
    
    this.listEmployees = this.listEmployees.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.onTimeSelect = this.onTimeSelect.bind(this);
    this.onEmployeeSelect = this.onEmployeeSelect.bind(this);
    this.onEmployeeListModalClosed = this.onEmployeeListModalClosed.bind(this);
    this.onAppointmentConfirmModalListClosed = this.onAppointmentConfirmModalListClosed.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.inValidateAppointment = this.inValidateAppointment.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
  }

  componentDidMount() {

    this.props.fetchTimings();

    if(this.props.userReducer.isAuthenticated) {
      this.props.invalidateCreatedAppointment();
    }
  }

  listEmployees() {
    this.setState({ showEmployeeListModal:true });
  }

  onDateChange(date: Date) {
    this.setState({ selectedDate: date });
  }

  onTimeSelect(time: any) {
    this.setState({ selectedTime: time });
  };

  onEmployeeSelect(employee: any){
    this.setState({
      selectedEmployee:employee,
      showEmployeeListModal:false
    });
  }

  onEmployeeListModalClosed() {
    this.setState({ showEmployeeListModal:false });
  }

  onAppointmentConfirmModalListClosed() {
    this.setState({ showAppointmentConfirmModal:false });
  }

  handleNext() {
    this.setState({ showAppointmentConfirmModal:true });
  }

  inValidateAppointment() {
    this.props.invalidateCreatedAppointment();
    return this.props.navigation.goBack();
  }

  handleConfirm() {
    const data = { ...this.props, ...this.state};
    const appointmentData = new Appointment(data);
    this.props.createAppointment(appointmentData);
  }


  render() {
    const {timings,employees,company,userReducer,service,timingsReducer} = this.props;
    return (
      <ScrollView
        style={{ flex:1, backgroundColor:'white' }}
        contentContainerStyle={{paddingVertical:64}}
        ref="scrollView"
        showsVerticalScrollIndicator={false}
        automaticallyAdjustContentInsets={false}
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

        {
          employees &&
          <EmployeePicker
            employees={employees}
            onEmployeeSelect={this.onEmployeeSelect}
            onClosed={this.onEmployeeListModalClosed}
            showEmployeeListModal={this.state.showEmployeeListModal}
          />
        }
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
      </ScrollView>
    );
  }
}

function mapStateToProps(state: AppState,ownProps: IProps) {
  const { entities } = state;
  const company = entities.companies[ownProps.companyID];
  const service = entities.services[ownProps.serviceID];
  return {
    timingsReducer:state.timingsReducer,
    userReducer:state.userReducer,
    company,
    service,
    employees:company.employees ? company.employees.map((employeeID: string)=>entities.employees[employeeID]) : [],
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
