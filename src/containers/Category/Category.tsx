import React, { Component } from 'react';
import { Image, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { fetchCategory } from '../../actions/Category/category';
import { favoriteCompany } from '../../actions/favorites';
import LoadingIndicator from '../../components/LoadingIndicator';
import CompanyList from '../../screens/Company/CompanyList';
import { AppState } from '../../store/configure-store';
import { ThunkDispatch } from 'redux-thunk';
import { AppActions } from '../../constants/ActionTypes';
import { ICategory } from '../../constants/Category';

interface IProps {
  navigation: any;
  itemID: string;
  route: any;
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
    const itemId = this.props.route.params.itemID;
    this.props.fetchCategory(itemId, ['companies']);
    this.favoriteCompany = this.favoriteCompany.bind(this);
  }

  componentDidMount() {
  }

  loadCompany = (company: ICategory) => {
    return this.props.navigation.navigate("Home",{
      screen: "Company",
      params: {
        title:company.name,
        itemID: company.id
      }
    } );
  }

  favoriteCompany(company: any) {
    this.props.favoriteCompany(company);
  }

  render() {
    const {categoryReducer,companies} = this.props;
    console.log(companies);
    return (
      <View style={{flex: 1,backgroundColor:'white'}}>
        { categoryReducer.isFetching && <LoadingIndicator /> }
        <CompanyList
          loadCompany={this.loadCompany}
          favoriteCompany={this.favoriteCompany}
          companies={companies}
        />
      </View>
    );
  }
}

const getCategory = (state: AppState,props: IProps) => {
  return state.entities.categories[props.route.params.itemID]
};
const getEntities = (state: AppState,props: IProps) => state.entities;

const getCompanies = createSelector(
  [ getCategory, getEntities ],
  (category, entities) => {
    return category?.companies?.map((company: any) => entities.companies[company]);
  }
);

function mapStateToProps(state: AppState,ownProps: IProps) {
  return {
    categoryReducer: state.categoryReducer,
    userReducer: state.userReducer,
    companies: getCompanies(state, ownProps)
  }
}

function mapDispatchToProps(
  dispatch: ThunkDispatch<any, any, AppActions>,
  ownProps: IProps
): LinkDispatchProps {
  return {
    fetchCategory: (itemId, requiredFields) => {
      dispatch(fetchCategory(itemId, requiredFields))
    },
    favoriteCompany: (company) => {
      dispatch(favoriteCompany(company))
    }
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
