import React, { Component } from 'react';
import { Image, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { fetchCategory } from '../../actions/Category/category';
import { favoriteCompany } from '../../actions/favorites';
import { assets } from '../../utils/assets';
import LoadingIndicator from '../../components/LoadingIndicator';
import { StackNavigationProp } from '@react-navigation/stack';
import { BottomTabParamList } from '../../../types';
import CompanyList from '../../screens/Company/CompanyList';
import { AppState } from '../../store/configure-store';

interface IProps {
  navigation: StackNavigationProp<BottomTabParamList>;
  itemID: string;
  categoryReducer: any;
  companies: Array<any>;
}
interface IState {}
interface LinkStateProps {}
interface LinkDispatchProps {
  fetchCategory: (categoryId: string, requiredFields: any) => void;
  favoriteCompany: (company: any) => void;
}
type Props = IProps & LinkStateProps & LinkDispatchProps;

class Category extends Component<Props, IState> {

  constructor(props: Props) {
    super(props);
    this.favoriteCompany = this.favoriteCompany.bind(this);
  }

  componentDidMount() {
    this.props.fetchCategory(this.props.itemID,['companies']);
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

  render() {

    const {categoryReducer,companies} = this.props;

    return (
      <Image source={assets.bg} style={{flex: 1,paddingTop:64,backgroundColor:'white'}}>
        { categoryReducer.isFetching && <LoadingIndicator /> }
        <CompanyList
          loadCompany={this.loadCompany}
          favoriteCompany={this.favoriteCompany}
          companies={companies}
        />
      </Image>
    );
  }
}

const getCategory = (state: AppState,props: IProps) => state.entities.categories[props.itemID];
const getEntities = (state: AppState,props: IProps) => state.entities;

const getCompanies = createSelector(
  [ getCategory,getEntities ],
  ( category,entities ) => {
    return category.companies ? category.companies.map((company: any) => entities.companies[company]) : []
  }
);

function mapStateToProps(state: AppState,ownProps: IProps) {
  return {
    categoryReducer:state.categoryReducer,
    userReducer:state.userReducer,
    companies:getCompanies(state,ownProps)
  }
}

export default connect(mapStateToProps)(Category);
