'use strict';
import React, { Component } from 'react';
import {  StyleSheet, Text, View, Image, TouchableHighlight, TextInput } from 'react-native';
import LoadingIndicator from '../../components/LoadingIndicator';
import { APP_STYLES } from '../../utils/AppStyles';
import FormButton from '../../components/FormButton';

type IProps = {
  email?: string;
  password?: string;
  loginReducer: any;
  loginUser: Function;
  handleRegisterRoute: Function;
  handleForgotPasswordRoute: Function;
  onFieldChange: Function;
};

export default class LoginScreen extends Component<IProps> {

  render() {
    const { email, password} = this.props; 
    const {onFieldChange, loginReducer, loginUser, handleRegisterRoute, handleForgotPasswordRoute } = this.props;

    return (
      <View style={styles.container}>

        {loginReducer.isFetching && <LoadingIndicator /> }

        <TextInput
          style={[styles.textInput]}
          onChangeText={(value) => onFieldChange('email',value)}
          value={email}
          maxLength={40}
          placeholderTextColor="gray"
        />

        <TextInput
          style={[styles.textInput]}
          onChangeText={(value) => onFieldChange('password',value)}
          value={password}
          maxLength={40}
          placeholderTextColor="gray"
        />

        <FormButton
          disabled={loginReducer.isFetching}
          onPress={()=>loginUser()}
          buttonText='Login'
        />

        <TouchableHighlight onPress={()=>handleRegisterRoute()} underlayColor='transparent'
                            style={[styles.center,styles.mTop20]}
        >
          <Text style={[styles.label,styles.textUnderline]}>Dont have an account? Register</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={()=>handleForgotPasswordRoute()} style={[styles.center,styles.mTop20]}
                            underlayColor='transparent' >
          <Text style={[styles.label,styles.textUnderline]}>Forgot your password ?</Text>
        </TouchableHighlight>

      </View>

    )
  }

}

var styles = StyleSheet.create({

  container:{
    padding:10
  },
  label: {
    fontSize: 14,
    color: '#888888',
  },
  textUnderline: {
    textDecorationLine: 'underline'
  },
  ltr: {
    alignSelf: 'flex-start'
  },
  rtl: {
    alignSelf: 'flex-end'
  },
  center: {
    alignSelf: 'center'
  },
  mTop20: {
    marginTop: 50
  },
  textInput:{
    height: 40,
    borderColor: APP_STYLES.secondaryColor,
    borderWidth: 1,
    marginBottom:20,
    fontSize:15,
    paddingLeft:10,

  },
})

