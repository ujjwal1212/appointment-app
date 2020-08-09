import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";

interface IProps {
  containerStyle?: any;
  disabled?: boolean;
  onPress?: () => void;
  style?: any;
  buttonText?: string;
}

export default class FormButton extends Component<IProps> {
  render() {
    return (
      <View style={styles.container}>
        <Button
          disabled={this.props.disabled}
          onPress={this.props.onPress}
          style={[styles.style, this.props.style]}
        >
          {this.props.buttonText}
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#5BC3BE",
    borderColor: "#5BC3BE",
    borderRadius: 0,
  },
  style: {
    fontSize: 18,
    color: "white",
    padding: 10,
  },
});
