import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const Modal = require('react-native-modalbox');
import EmployeeList from './EmployeeList';

interface IProps {
  showEmployeeListModal: boolean;
  employees: Array<any>;
  onEmployeeSelect: any;
  onClosed: () => void;
}
interface IState {}

export default class EmployeePicker extends Component<IProps> {
  public employeeListModal: any;
  componentWillReceiveProps(nextProps: IProps) {
    if(nextProps.showEmployeeListModal) {
      this.employeeListModal.open();
    } else {
      this.employeeListModal.close();
    }
  }

  render() {
    const {employees,onEmployeeSelect} = this.props;
    return(
      <Modal
        backdrop={true} backdropOpacity={0.7} backdropColor="black"
        position="center"
        style={styles.container}
        ref={this.employeeListModal}
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
        <EmployeeList
          employees={employees}
          onEmployeeSelect={onEmployeeSelect}
        />
      </Modal>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    justifyContent:'flex-start',
    height:300,
    width:350,
    paddingRight:10,
    paddingLeft:10
  },
  closeButton:{
    width:20,
    height:20,
    alignSelf:'flex-end',
    paddingTop:150,
    margin:10
  }
});


