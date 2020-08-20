import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";

interface IProps {
  containerStyle?: any;
  disabled?: boolean;
  onPress?: () => void;
  style?: any;
  buttonText?: string;
  color?:string;
}

export default class FormButton extends Component<IProps> {
  render() {
    return (
      <View style={styles.container}>
        <Button
          disabled={this.props.disabled}
          onPress={this.props.onPress}
          style={[styles.style, this.props.style]}
          color={this.props.color}
        >
          {this.props.buttonText}
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FEAD37",
    borderColor: "#FEAD37",
    borderRadius: 0,
    color: "#ffffff"
  },
  style: {
    fontSize: 18,
    color: "#ffffff",
    padding: 10,
  },
});
