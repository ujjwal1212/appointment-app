import React from "react";
import { signup } from "../../actions/Auth/register";
import { connect } from "react-redux";
import { ScrollView } from "react-native-gesture-handler";
import { RegistrationData } from "../../constants/RegistrationData";
import { ThunkDispatch } from "redux-thunk";
import registerReducer from "../../reducers/register";
import { AppActions } from "../../constants/ActionTypes";
import { Alert } from "react-native";
import RegistationScreen from "../../screens/Auth/RegistationScreen";
import { AppState } from "../../store/configure-store";
import { StackNavigationProp } from "@react-navigation/stack";
import { BottomTabParamList } from "../../../types";

interface IProps {
  navigation: StackNavigationProp<BottomTabParamList>;
}

interface IState {
  name: string;
  email?: string;
  password?: string;
  passwordConfirmation?: string;
  mobile?: string;
}

interface LinkStateProps {}

interface LinkDispatchProps {
  signup: (regData: RegistrationData, callback: Function) => void;
}

type Props = IProps & LinkStateProps & LinkDispatchProps;

export class RegistrationContainer extends React.Component<Props, IState> {
  constructor(props: Props) {
    super(props);
    this.initState();
  }

  private initState() {
    this.state = {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      mobile: "",
    };
  }

  onFieldChange(field: keyof IState, value: any) {
    this.setState({ ...this.state, [field]: value });
  }

  registerUser = () => {
    const data = this.getUserDetails();
    console.log(this.props);
    this.props.signup(data, (cb: any) => {
      if (!cb.success) {
        return Alert.alert(
          `Error occured while Registration.`,
          cb.errorMessage,
          [{ text: "Try Again" }]
        );
      }
      this.props.navigation.navigate("Home");
    });
  }

  getUserDetails = (): RegistrationData => {
    return {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      passwordConfirmation: this.state.passwordConfirmation,
      mobile: this.state.mobile,
    };
  }

  handleLoginRoute = () => {
    return this.props.navigation.navigate("Home");
  }

  render() {
    return (
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          backgroundColor: "white",
          paddingTop: 64,
        }}
      >
        <RegistationScreen
          {...this.state}
          registerReducer={registerReducer}
          registerUser={this.registerUser}
          handleLoginRoute={this.handleLoginRoute}
          onFieldChange={this.onFieldChange}
        />
      </ScrollView>
    );
  }
}

function mapDispatchToProps(
  dispatch: ThunkDispatch<any, any, AppActions>,
  ownProps: IProps
): LinkDispatchProps {
  return {
    signup: (regData: RegistrationData, callback: Function) => {
      dispatch(signup(regData, callback));
    },
  };
};

function mapStateToProps(state: AppState, ownProps: IProps) {
  const { registerReducer } = state;
  return { registerReducer };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationContainer);
