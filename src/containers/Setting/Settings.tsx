import React, { Component } from 'react';
import { ScrollView, Alert,View } from 'react-native';
import { logoutUser } from '../../actions/Auth/login';
import { connect } from 'react-redux';
import SettingsCell from './Components/SettingsCell';
import { StackNavigationProp } from '@react-navigation/stack';
import { BottomTabParamList } from '../../../types';
import { AppState } from '../../store/configure-store';
import { ThunkDispatch } from 'redux-thunk';
import { AppActions } from '../../constants/ActionTypes';
interface IProps {
  navigation: StackNavigationProp<BottomTabParamList>;
  authUserID: any;
}
interface IState {}
interface LinkStateProps {}
interface LinkDispatchProps {
  logoutUser: () => void;
}
type Props = IProps & LinkStateProps & LinkDispatchProps;
class Settings extends Component<Props, IState> {

  constructor(props: Props) {
    super(props);
    this.loadLink = this.loadLink.bind(this);
  }

  performLogout() {
    this.props.logoutUser();
    return this.props.navigation.navigate('Home');
  }

  loadLink(name: any){
    switch(name) {
      case 'about':
        return this.props.navigation.navigate('About');
      case 'term':
        return this.props.navigation.navigate('Terms');
      case 'profile':
        return this.props.navigation.navigate('Profile');
      case 'logout' :
        return Alert.alert('Are you sure you want to logout ?  ', '', [{text: 'Yes', onPress:()=>{this.performLogout()}},{text:'No'}]);
      case 'login' :
        return this.props.navigation.navigate('Login');
      default :
        return;
    }
  }

  render() {
    console.log('auth user',this.props.authUserID);
    return (
      <ScrollView style={{flex:1,backgroundColor: 'white',paddingTop:80}}>
        {this.props.authUserID !== null ?
          <View>
            <SettingsCell icon="ios-power-outline" title="Logout" name="logout" callback={this.loadLink} />
          </View>
          :
          <SettingsCell icon="ios-key-outline" title="Login" name="login" callback={this.loadLink} />
        }

        <SettingsCell icon="ios-information-circle-outline" title="About" name="about" callback={this.loadLink} />
      </ScrollView>

    );
  }
}

function mapDispatchToProps(
  dispatch: ThunkDispatch<any, any, AppActions>,
  ownProps: IProps
): LinkDispatchProps {
  return {
    logoutUser: () => dispatch(logoutUser())
  };
};

function mapStateToProps(state: AppState) {
  return {
    authUserID:state.userReducer.authUserID
  }
}



export default connect(mapStateToProps)(Settings);
