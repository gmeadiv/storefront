import './App.css';

import {connect} from 'react-redux';
import { selectCategory } from './components/storefront.js';

function App(props) {

  return (
    <div className="App">
      {props.categories.map(category => (
        <button
          onClick={() => props.selectCategory(category.normalizedName)}>
          Select {category.displayName}
        </button>
      ))}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    categories: state.storefront.categories,
    products: state.storefront.products,
    activeCategory: state.storefront.activeCategory
  }
}

const mapDispatchToProps = dispatch => ({
  selectCategory: (category) => dispatch(selectCategory(category))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
