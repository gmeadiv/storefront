import logo from './logo.svg';
import './App.css';

import {connect} from 'react-redux';

function App(props) {

  return (
    <div className="App">
      <Header />
      <Categories />
      <Footer />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    votes: state.votes
  }
}

const mapDispatchToProps = dispatch => ({
  increment: (name) => dispatch({type: 'ADD_VOTE', payload: name})
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
