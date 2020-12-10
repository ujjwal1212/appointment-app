import React, { Component } from 'react';
import { StyleSheet,View,TouchableHighlight,Text,TextInput } from 'react-native';
interface IProps {
  updateSearchString: Function;
  search: Function;
  searchString: string;
}
interface IState {}
interface LinkStateProps {}
interface LinkDispatchProps {}
type Props = IProps & LinkStateProps & LinkDispatchProps;

export default class SearchScene extends Component<Props, IState> {

  render() {
    const {updateSearchString,search,searchString} = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.textInputWrapper}>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => updateSearchString(text)}
            value={searchString}
            placeholder="Search Companies by Name or Location"
            placeholderTextColor ="white"
            clearButtonMode="while-editing"
            returnKeyType="search"
            maxLength={30}
            autoCorrect={false}
            onSubmitEditing={()=>search()}
          />
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    flexDirection:'row',
    paddingLeft:10,
    paddingRight:10,
    paddingTop:5,
    marginBottom:10,
    marginTop:10,
  },
  textInputWrapper:{
    flex:3,
    backgroundColor:'#4d004d',
    padding:5,
    shadowColor:'#b300b3',
    shadowOffset:{width:0,height:0},
    shadowRadius:2,
    shadowOpacity:.8,
    borderRadius:2,
    opacity:.7

  },
  textInput:{
    height: 50,
    borderColor: '#33001a',
    borderWidth: 1,
    padding:10,
    color:'white',
    borderRadius:20,
    textAlign:'center',
    backgroundColor:'black',
    opacity:1
  },
  searchButtonWrapper:{
    flex:1,
  }
});