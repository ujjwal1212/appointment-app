import React, { Component } from 'react';
import { ListView,TouchableHighlight,StyleSheet,Text,View } from 'react-native';
import { APP_STYLES } from '../../utils/AppStyles';
import LoadingIndicator from '../../components/LoadingIndicator';
import Separator from '../../components/Separator';
import { FlatList } from 'react-native-gesture-handler';

interface IProps {
  timings: any,
  timingsReducer: any,
  selectedTime: any,
  onTimeSelect: (time: any) => void;
}


export default class TimingList extends Component<IProps> {

  renderRow = (time: any) => {
    const {selectedTime} = this.props;
    const cellStyle = styles.cellContainer;
    (selectedTime.id && selectedTime.id == time.id) ?? {...cellStyle, ...styles.activeCell};
    return (
      <View style={[cellStyle]} key={time.id} >
        <TouchableHighlight onPress={()=>this.props.onTimeSelect(time)} underlayColor='transparent'>
          <Text style={styles.name}>
            {time.time_en}
          </Text>
        </TouchableHighlight>
      </View>
    )
  }

  render() {
    const {timings,timingsReducer} = this.props;
    return (
      <View >
        <View style={styles.separator}/>
        {timingsReducer.isFetching ? <LoadingIndicator style={{marginTop:10}}/> : <View/>}
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={timings}
          renderItem={this.renderRow}
          automaticallyAdjustContentInsets={false}
          style={styles.container}
        />
      </View>
    );
  }

}

var styles = StyleSheet.create({
  container: {
    marginBottom:20
  },
  cellContainer:{
    flex:1,
    backgroundColor:'#e7e7e7',
    height:50,
    width:50,
    borderRadius:25,
    margin:5,
    marginTop:10,
    marginBottom:0
  },
  activeCell : {
    backgroundColor: APP_STYLES.primaryColor
  },
  cellWrapper: {
    flexDirection:'row',
    flex:1,
    justifyContent:'flex-start',
    marginTop:10,
    marginBottom:10,
    alignItems:'center',
    paddingRight:5,
    paddingLeft:5
  },
  titleWrapper: {
    justifyContent:'flex-start',
    flex:2,
  },
  name: {
    color: '#FFFFFD',
    fontSize:14,
    fontWeight:'700',
    textAlign:'center',
    paddingTop:10,
  },
  separator: {
    height:1,
    backgroundColor:'#f0f5f5',
  },


});
