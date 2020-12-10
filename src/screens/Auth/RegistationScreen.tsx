"use strict";
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
} from "react-native";
import { APP_STYLES } from "./../../utils/AppStyles";
import LoadingIndicator from "../../components/LoadingIndicator";
import FormButton from "../../components/FormButton";

type IProps = {
  mobile?: string;
  registerReducer: any;
  registerUser: Function;
  handleLoginRoute: Function;
  onFieldChange: Function;
};

export default class RegistationScreen extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  } 

  render() {
    const {
      mobile,
      registerReducer,
      registerUser,
      handleLoginRoute,
      onFieldChange,
    } = this.props;

    return (
      <View style={styles.container}>
        {registerReducer.isFetching && <LoadingIndicator />}
        <TextInput
          style={[styles.textInput]}
          onChangeText={(value) => onFieldChange("mobile", value)}
          value={mobile}
          maxLength={10}
          placeholderTextColor="gray"
          placeholder="Mobile"
        />

        <FormButton onPress={() => registerUser()} buttonText="Register" />

        <TouchableHighlight
          onPress={() => handleLoginRoute()}
          style={styles.center}
          underlayColor="transparent"
        >
          <Text style={[styles.label, styles.textUnderline, styles.mTop20]}>
            have an account ? Login{" "}
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  buttonGreen: {
    height: 50,
    backgroundColor: "#5BC3BE",
    borderColor: "#48BBEC",
    alignSelf: "stretch",
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
  },
  label: {
    fontSize: 14,
    color: "#888888",
  },
  textUnderline: {
    textDecorationLine: "underline",
  },
  ltr: {
    alignSelf: "flex-start",
  },
  rtl: {
    alignSelf: "flex-end",
  },
  mTop20: {
    marginTop: 10,
  },
  center: {
    alignSelf: "center",
  },
  textInput: {
    height: 40,
    borderColor: APP_STYLES.secondaryColor,
    borderWidth: 1,
    marginBottom: 20,
    fontSize: 15,
    paddingLeft: 10,
  },
});
