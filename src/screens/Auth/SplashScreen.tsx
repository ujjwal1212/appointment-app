import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  StatusBar,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { useTheme } from "@react-navigation/native";
import FormButton from "../../components/FormButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const logo = require("../../assets/img/logo.png");

const SplashScreen = ({ navigation }: any) => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FEAD37" barStyle="light-content" />
      <View style={styles.header}>
        <Animatable.View
          animation="bounceIn"
          duration={1500}
          style={styles.logo}
        >
          <MaterialCommunityIcons
            name="calendar-account"
            size={200}
            color="#FEAD37"
          />
        </Animatable.View>
      </View>
      <Animatable.View
        style={[styles.footer, { backgroundColor: colors.background }]}
        animation="fadeInUpBig"
      >
        <Text style={[styles.title, { color: "#707070" }]}>
          Find a Service Provider near you and get a safe appointment.
        </Text>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <FormButton
              buttonText={"Get Started"}
              style={styles.textSign}
              color={"#ffffff"}
            />
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default SplashScreen;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEAD37",
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 1,
    backgroundColor: "#FEAD37",
    paddingVertical: 50,
    paddingHorizontal: 30,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
    borderRadius: 110,
    backgroundColor: "#ffffff",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
  },
  text: {
    color: "#ffffff",
    marginTop: 5,
  },
  button: {
    alignItems: "flex-end",
    marginTop: 30,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
  },
  textSign: {
    color: "#ffffff",
    fontWeight: "bold",
  },
});
