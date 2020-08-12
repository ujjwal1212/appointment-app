import React, { Component } from 'react';
import { StyleSheet,View,Text,Image } from 'react-native';
import { assets } from '../utils/assets';
import FormButton from './FormButton';
import { useNavigation } from '@react-navigation/native';
interface IProps {
  dialogText: any;
}
interface IState {}

export default class LoginDialog extends Component<IProps, IState> {
  public navigation = useNavigation();
  render() {
    return (
      <Image source={assets.bg} style={styles.container}>
        <View style={styles.dialogWrapper}>
          <Text style={styles.dialogText}>
            {this.props.dialogText}
          </Text>
          <FormButton
            onPress={()=> this.navigation.navigate('Login')}
            buttonText='Login'
          />
          <Text style={styles.orText}>
            Don't have an account ?
          </Text>
          <FormButton
            onPress={()=> this.navigation.navigate('Register')}
            buttonText='Sign up now !'
          />
          <Text style={styles.minFeatureText} onPress={()=>this.navigation.navigate('Home')}>
            Browse the site with limited features
          </Text>
        </View>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent:'center',
  },

  dialogWrapper:{
    backgroundColor:'white',
    opacity:0.9,
    padding:20,
    paddingTop:50,
    paddingBottom:50,
  },

  dialogText:{
    fontSize:16,
    padding:10,
    textAlign:'center'
  },

  orText:{
    paddingBottom:10,
    paddingTop:20,
    textAlign:'center'
  },

  minFeatureText:{
    paddingTop:30,
    textDecorationLine:'underline',
    textAlign:'center'
  },
  button: {
    backgroundColor: '#5BC3BE',
    borderColor: '#5BC3BE',
    borderRadius: 0,
    opacity:1
  }
});