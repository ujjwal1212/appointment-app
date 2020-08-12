import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../store/configure-store';
import CategoryList from '../../screens/Category/CategoryList';
import { StackNavigationProp } from '@react-navigation/stack';
import { BottomTabParamList } from '../../../types';
import { ThunkDispatch } from 'redux-thunk';
import { AppActions } from '../../constants/ActionTypes';
import { fetchCategories } from '../../actions/Category/categories';
import { View } from '../../../components/Themed';
import { ICategory } from '../../constants/Category';

interface IProps {
  navigation: StackNavigationProp<BottomTabParamList>;
  categories: Array<ICategory>;
  categoriesReducer: any;
}
interface IState {}
interface LinkStateProps {}
interface LinkDispatchProps {
  fetchCategories: () => void;
}
type Props = IProps & LinkStateProps & LinkDispatchProps;

class Categories extends React.Component<Props, IState> {

  constructor(props: Props) {
    super(props);
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
      <CategoryList
        categories={categories}
        loadCategory={this.loadCategory}
        categoriesReducer={categoriesReducer}
      />
    );
  }
}

function mapDispatchToProps(
  dispatch: ThunkDispatch<any, any, AppActions>,
  ownProps: IProps
): LinkDispatchProps {
  return {
    fetchCategories: () => dispatch(fetchCategories())
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
