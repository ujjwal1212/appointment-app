import React, { Component } from 'react';
import { StatusBar,TouchableOpacity, StyleSheet, Text, View,} from 'react-native';
import PromoImage from './PromoImage';
import Swiper from 'react-native-swiper';
import { StackNavigationProp } from '@react-navigation/stack';
import { BottomTabParamList } from '../../types';
interface IProps {
  navigation: StackNavigationProp<BottomTabParamList>;
}
interface IState {}
export default class IntroCarousel extends Component<IProps, IState> {

  render() {
    return (
      <View >
        <Swiper showsButtons={false} loop={false} automaticallyAdjustContentInsets={false} >
          <View style={{flex:1}}>
            <PromoImage image={require('./../assets/img/bghome.png')}
                        header="My Appointment"
                        description="book your appointment"
                        promoText=""
            />
          </View>
          <View style={{flex:1}}>
            <PromoImage image={require('./../assets/img/bg.png')}
                        header="Heading"
                        description="description"
                        promoText="Promo Text"
            />
          </View>
        </Swiper>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')} >
          <View style={styles.skipWrapper}>
            <Text style={styles.skipText}>Skip</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  skipWrapper:{
    padding:10,
    alignItems:'center',
    backgroundColor:'green'
  },
  skipText: {
    color:'white',
    textDecorationLine:'underline',
    fontSize:17,
    fontWeight:'500',

  }
});