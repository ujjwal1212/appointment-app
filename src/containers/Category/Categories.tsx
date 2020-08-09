import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { AppState } from '../../store/configure-store';
import CategoryList from '../../screens/Category/CategoryList';
import { StackNavigationProp } from '@react-navigation/stack';
import { BottomTabParamList } from '../../../types';
import { ThunkDispatch } from 'redux-thunk';
import { AppActions } from '../../constants/ActionTypes';
import { fetchCategories } from '../../actions/Category/categories';

interface IProps {
  navigation: StackNavigationProp<BottomTabParamList>;
  categories: Array<any>;
  categoriesReducer: any;
}
interface IState {}
interface LinkStateProps {}
interface LinkDispatchProps {
  fetchCategories: () => void;
}
type Props = IProps & LinkStateProps & LinkDispatchProps;

class Categories extends Component<Props, IState> {

  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCategories();
  }

  loadCategory(category: any) {
    this.props.navigation.navigate('Category', {
      title:category.name_en.toUpperCase(),
      itemID:category.id
    });
  }

  render() {
    const { categories,categoriesReducer } = this.props;
    return (
      <Image style={{flex: 1, paddingTop: 64,backgroundColor:'white'}}
             source={require('./../../assets/img/bghome.png')}
      >
        <CategoryList
          categories={categories}
          loadCategory={this.loadCategory}
          categoriesReducer={categoriesReducer}
        />
      </Image>
    );
  }
}

function mapDispatchToProps(
  dispatch: ThunkDispatch<any, any, AppActions>,
  ownProps: IProps
): LinkDispatchProps {
  return {
    fetchCategories: () => {
      dispatch(fetchCategories())
    }
   };
};

function mapStateToProps(state: AppState) {
  const { entities,categoriesReducer } = state;
  return {
    categoriesReducer,
    categories:entities.categories && entities.categories
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
