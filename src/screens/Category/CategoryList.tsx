import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, View, ListView } from 'react-native';
import LoadingIndicator from '../../components/LoadingIndicator';

interface IProps {
  categoriesReducer: any;
  loadCategory: (category: any) => void;
  categories: Array<any>
}
interface IState {}

export default class CategoryList extends Component<IProps, IState> {

  renderHeader() {
    return this.props.categoriesReducer.isFetching && <LoadingIndicator />
  }
  
  getCategoryImage(name: string){

    var name = name.replace(/\s+/g, '-').toLowerCase();
    if(name == 'salon') {
      return require('./../../assets/img/salon.png');
    } else if(name == 'clinic') {
      return require('./../../assets/img/clinic.png');
    } else if(name == 'spa') {
      return require('./../../assets/img/spa.png');
    } else if(name == 'home-service') {
      return require('./../../assets/img/home-service.png');
    }
  }

  renderRow(category: any) {
    var img = this.getCategoryImage(category.name_en);
    return (
      <TouchableHighlight onPress={() => this.props.loadCategory(category)} underlayColor="transparent">
        <View style={styles.row}>
          <View style={styles.cellWrapper}>
            <Image source={img} style={styles.thumbnail}/>
            <Text style={styles.text}> {category.name_en}</Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    const {categories} = this.props;
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})
    let dataSource = ds.cloneWithRows(categories);

    return (
        <ListView
          contentContainerStyle={styles.contentContainer}
          dataSource={dataSource}
          renderRow={this.renderRow.bind(this)}
          enableEmptySections={true} //@todo remove this in future version
          ref='listView'
          renderHeader={()=>this.renderHeader()}
          contentInset={{ top:100, bottom:100 }}
          showsVerticalScrollIndicator={false}
          automaticallyAdjustContentInsets={false}
        />
    )

  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: 64,
    backgroundColor:'white'
  },
  contentContainer:{
    justifyContent: 'center',
  },
  row: {
    flex:1,
    alignItems:'center',
    opacity:.9,
    padding:10,
  },
  cellWrapper: {
    width:150,
    height:150,
    borderRadius:75,
    backgroundColor:'white',
    opacity: 0.7,
    alignItems:'center',
    overflow:'hidden',
    justifyContent:'center'
  },
  thumbnail: {
    width: 80,
    height: 80,
  },
  text: {
    color:'black',
    fontSize:20,
    fontWeight:'800',
    fontFamily:'SnellRoundhand',
  },

});
