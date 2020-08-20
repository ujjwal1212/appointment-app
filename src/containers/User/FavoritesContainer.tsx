import React, { Component } from 'react';
import { ScrollView, Image, View,RefreshControl } from 'react-native';
import { connect } from 'react-redux';
import { assets } from '../../utils/assets';
import LoadingIndicator from '../../components/LoadingIndicator';
import isEmpty from 'lodash/isEmpty';
import { StackNavigationProp } from '@react-navigation/stack';
import { BottomTabParamList } from '../../../types';
import NoResult from '../../components/NoResult';
import CompanyList from '../../screens/Company/CompanyList';
import { AppState } from '../../store/configure-store';
interface IProps {
  navigation: StackNavigationProp<BottomTabParamList>;
  userReducer: any;
  favorites: Array<any>
}
interface IState {
  isRefreshing: boolean
}
interface LinkStateProps {}
interface LinkDispatchProps {
  fetchFavorites: () => Promise<any>;
  favoriteCompany: (company: any) => void;
}
type Props = IProps & LinkStateProps & LinkDispatchProps;
class FavoritesContainer extends Component<Props, IState> {
  constructor(props: Props) {
    super(props);
    this.state={
      isRefreshing:false
    };
    this.onRefresh = this.onRefresh.bind(this);
    this.favoriteCompany = this.favoriteCompany.bind(this)
    this.loadCompany = this.loadCompany.bind(this)
  }

  componentDidMount() {
    if(this.props.userReducer.isAuthenticated) {
      //  Actions.loginDialog({dialogText:'Please Login to view and manage your Favorites'})
      //} else {
      this.props.fetchFavorites();
    }
  }

  loadCompany(company: any) {
    return this.props.navigation.navigate('Company', {
      title:company.name_en,
      itemID: company.id
    });
  }

  favoriteCompany(company: any) {
    this.props.favoriteCompany(company);
  }

  onRefresh() {
    this.setState({isRefreshing: true});
    this.props.fetchFavorites().then((val)=>this.setState({isRefreshing: false}));
  }

  callback() {
    return this.props.navigation.navigate("Home");
  }
  
  render() {
    console.log('render Favorites');
    const { userReducer,favorites } = this.props;

    return (
      <Image source={assets.nail} style={{flex:1,paddingTop:64,backgroundColor:'white'}}>
        <ScrollView
          automaticallyAdjustContentInsets={false}
          contentInset={{bottom:40}}
          refreshControl={
          <RefreshControl
            refreshing={this.state.isRefreshing}
            onRefresh={this.onRefresh}
            tintColor="pink"
            title="Loading..."
            colors={['white', 'red', 'green']}
            progressBackgroundColor="yellow"
          />
        }
        >
          {userReducer.favorites.isFetching &&  <LoadingIndicator /> }

          {
            isEmpty(favorites) ?
              <NoResult
                title="No Favorites Yet"
                description="Favorite Salons and spas you know and you love"
                buttonText="Explore Salons"
                callback={this.callback}
              />
              :
              <CompanyList
                companies={favorites.filter((company)=>!company.unFavorited)}
                loadCompany={this.loadCompany}
                favoriteCompany={this.favoriteCompany}
              />
          }

        </ScrollView>

      </Image>
    );
  }
}

function mapStateToProps(state: AppState) {
  const { entities } = state;
  const user: any = state.userReducer.authUserID && entities.users[state.userReducer.authUserID || "null"];
  return {
    userReducer:state.userReducer,
    favorites: user && user.favorites ? user.favorites.map((companyID: any) => entities.companies[companyID] ) : []
  }
}

export default connect(mapStateToProps)(FavoritesContainer);
