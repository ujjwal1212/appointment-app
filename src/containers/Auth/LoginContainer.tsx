import React, { Component } from 'react';
import { ScrollView, View, Image } from 'react-native';
import { login } from '../../actions/Auth/login';
import { connect } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';
import { BottomTabParamList } from '../../../types';
import LoginScreen from '../../screens/Auth/LoginScreen';
import { Credentials } from '../../constants/Credentials';
import loginReducer from '../../reducers/login';
import { ThunkDispatch } from 'redux-thunk';
import { AppActions } from '../../constants/ActionTypes';
import { AppState } from '../../store/configure-store';

interface IProps {
  navigation: StackNavigationProp<BottomTabParamList>;
}

interface IState {
  email: string;
  password: string;
}

interface LinkStateProps {}

interface LinkDispatchProps {
  login: (regData: Credentials) => void;
}

type Props = IProps & LinkStateProps & LinkDispatchProps;

class LoginContainer extends Component<Props, IState> {

  constructor(props: Props) {
    super(props);
    
    this.state = {
      email: 'admin@test.com',
      password: 'password'
    };
    
    this.onFieldChange = this.onFieldChange.bind(this);
    this.loginUser = this.loginUser.bind(this);
  };

  loginUser() {
    const {email, password} = this.state;
    const credentials = new Credentials(email, password);
    this.props.login(credentials);
  }

  handleRegisterRoute() {
    return this.props.navigation.navigate('Registration');
  }

  handleForgotPasswordRoute() {
    // @todo: implement route
  }

  onFieldChange(field: keyof IState, value: any) {
    this.setState({ ...this.state, [field]: value });
  }

  render() {
    return (
      <ScrollView contentContainerStyle={{flex:1,paddingTop: 64,backgroundColor:'white'}}>
        <LoginScreen
          {...this.state}
          loginReducer={loginReducer}
          loginUser={this.loginUser}
          handleRegisterRoute={this.handleRegisterRoute}
          handleForgotPasswordRoute={this.handleForgotPasswordRoute}
          onFieldChange={this.onFieldChange}
        />
      </ScrollView>
    );
  }
}

function mapStateToProps(state: AppState, ownProps: IProps) {
  const { loginReducer } = state;
  return { loginReducer };
}

function mapDispatchToProps(
  dispatch: ThunkDispatch<any, any, AppActions>,
  ownProps: IProps
): LinkDispatchProps {
  return {
    login: (credentials: Credentials) => {
      dispatch(login(credentials)).then((success)=> {
        if(success) {
          alert("Login Successful")
        } else {
          alert('Wrong Credentials, Try again');
        }
      })
      .catch(()=>{alert('network error')});;
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);