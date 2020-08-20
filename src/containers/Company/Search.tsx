import React, {  Component } from 'react';
import { StyleSheet,Image } from 'react-native';
import { connect } from 'react-redux';
import { searchCompany  } from '../../actions/Company/company';
import { favoriteCompany } from '../../actions/favorites';
import LoadingIndicator from '../../components/LoadingIndicator';
import { assets } from '../../utils/assets';
import { CommonActions } from '@react-navigation/native';
import { ICompany } from '../../constants/Company';
import SearchScene from '../../screens/Company/SearchScene';
import CompanyList from '../../screens/Company/CompanyList';
import { AppState } from '../../store/configure-store';
import { ThunkDispatch } from 'redux-thunk';
import { AppActions } from '../../constants/ActionTypes';
interface IProps {
  companies: Array<ICompany>,
  companyReducer: any;
}
interface IState {
  searchString: string;
}
interface LinkStateProps {}
interface LinkDispatchProps {
  searchCompany: (searchString: string) => void;
  favoriteCompany: (company: ICompany) => void;
}
type Props = IProps & LinkStateProps & LinkDispatchProps;
class Search extends  Component<Props, IState> {

  constructor(props: Props) {
    super(props);

    this.state= {
      searchString : ''
    };

    this.favoriteCompany = this.favoriteCompany.bind(this);
    this.search = this.search.bind(this);
    this.updateSearchString = this.updateSearchString.bind(this);
  }

  search = () => {
    this.props.searchCompany(this.state.searchString);
  }

  loadCompany(company: ICompany) {
    return CommonActions.navigate("Company",{
      title:company.name,
      itemID: company.id
    });
  }

  favoriteCompany(company: ICompany) {
    this.props.favoriteCompany(company);
  }

  updateSearchString(value: any) {
    this.setState({
      searchString:value
    });
  }

  render() {
    const { companies,companyReducer } = this.props;
    return (
      <Image source={assets.bg} style={{flex: 1, paddingTop: 64,backgroundColor:'white'}}>
          <SearchScene search={this.search} searchString={this.state.searchString} updateSearchString={this.updateSearchString} />
          { companyReducer.isSearching && <LoadingIndicator />}
          <CompanyList
            loadCompany={this.loadCompany}
            favoriteCompany={this.favoriteCompany}
            companies={companies}
          />
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
    paddingTop:64
  }
});

function mapStateToProps(state: AppState) {
  const companyReducer = state.companyReducer;
  const searchResults = companyReducer.searchResults ? companyReducer.searchResults : [];
  const companies = state.entities.companies;
  return {
    companyReducer:companyReducer,
    userReducer:state.userReducer,
    companies: searchResults?.map((companyID) => companies[companyID])
  }
}

function mapDispatchToProps(
  dispatch: ThunkDispatch<any, any, AppActions>,
  ownProps: IProps
): LinkDispatchProps {
  return {
    searchCompany: (searchString: string) => {
      return dispatch(searchCompany(searchString))
    },
    favoriteCompany: (company: ICompany) => {
      return dispatch(favoriteCompany(company));
    }
   };
};

export default connect(mapStateToProps)(Search);
