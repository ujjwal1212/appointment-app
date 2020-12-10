import React, { Component } from 'react';
import { TouchableHighlight, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LoadingIndicator from '../../components/LoadingIndicator';
import Modal from 'react-native-modalbox';

interface IProps {
  onAppointmentConfirm: () => void;
  inValidateAppointment: () => void;
  onClosed: () => void;
  selectedDate: any;
  selectedTime: any;
  selectedEmployee: any;
  company: any;
  userReducer: any;
  service: any;
  showAppointmentConfirmModal: boolean
}
interface IState {}

export default class AppointmentConfirm extends Component<IProps, IState> {
  public appointmentConfirmModal: any;
  constructor(props: IProps) {
    super(props);
    this.appointmentConfirmModal = React.createRef();
  }
  componentWillReceiveProps(props: IProps) {
    if(props.showAppointmentConfirmModal) {
      this.appointmentConfirmModal.open();
    } else {
      this.appointmentConfirmModal.close();
    }
  }

  closeModal() {
    this.appointmentConfirmModal.close();
  }

  confirmAppointment() {
    return this.props.onAppointmentConfirm();
  }

  invalidateAppointment() {
    return this.props.inValidateAppointment();
  }

  showAppointmentSuccessText() {
    return (
      <TouchableHighlight underlayColor='transparent' onPress={()=>this.invalidateAppointment()}>
        <View style={{justifyContent:'center',alignItems:'center'}}>
          <Text style={{ fontSize:20,color:'#003333' }}> Appointment Confirmed</Text>
        </View>
      </TouchableHighlight>
    );
  }

  showAppointmentButton() {
    const { selectedDate,selectedTime,selectedEmployee,company,userReducer,service } = this.props;
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text style={{ fontSize:20,color:'#003333' }}>ALMOST DONE !</Text>
        <Text style={{ paddingTop:20, fontSize:13, textAlign:'center',color:'#003333',fontFamily:'menlo',lineHeight:25 }}> You Wanted
          <Text style={styles.name}> {service.name_en} </Text>
          <Text style={styles.name}> {selectedEmployee.id  && `(Staff : ${selectedEmployee.name_en})` } </Text>
          <Text style={styles.name}> {company.name_en} </Text> On
          <Text style={styles.name}> {selectedDate.toDateString()} At </Text>
          <Text style={styles.name}> {selectedTime.time_en} </Text>
        </Text>

        { userReducer.appointments.error != null ? <Text>Error occured, try again </Text>: <Text/>}
        { userReducer.appointments.isCreating ? <LoadingIndicator /> :
          <TouchableHighlight underlayColor='transparent' onPress={()=>this.confirmAppointment()}>
            <View style={{marginTop:10, height:80,width:80,borderRadius:40,backgroundColor:'#FF4646',justifyContent:'center',alignItems:'center'}}>
              <Text style={{color:'#E1E3E3',fontFamily:'menlo'}}>
                Book It
              </Text>
            </View>
          </TouchableHighlight>
        }

        <View style={{marginTop:10,marginBottom:10}}>
          <TouchableHighlight underlayColor='transparent' onPress={()=>this.closeModal()}>
            <Text style={{color:'#472036',fontFamily:'menlo',fontSize:10}}>
              Click here to Edit
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    );

  }

  render() {
    const {userReducer} = this.props;

    return(
      <Modal
        backdrop={true} backdropOpacity={0.7} backdropColor="black"
        position="center"
        style={styles.container}
        ref={ref => this.appointmentConfirmModal = ref}
        swipeToClose={true}
        onClosed={this.props.onClosed}
        backdropContent={
            <Icon
              name='ios-close'
              size={20}
              color={'white'}
              style={styles.closeButton}
            />
          }
      >
        { userReducer.appointments.created ?  this.showAppointmentSuccessText() : this.showAppointmentButton() }

      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    justifyContent:'center',
    alignItems:'center',
    height:300,
    width:350,
    paddingRight:10,
    paddingLeft:10,
  },
  closeButton:{
    width:20,
    height:20,
    alignSelf:'flex-end',
    paddingTop:150,
    margin:10
  },
  name:{
    color:'#722A2A',
    fontWeight:'700'
  }
});