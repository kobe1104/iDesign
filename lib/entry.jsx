import React from 'react';
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Counter from './counter';
import Winter from './winter';
import Summer from './summer';
import Layout from './layout';
import Designer from './designers';
import Cart from './cart';

document.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementById("main");
  ReactDOM.render(<Root/>, main);
});

class Root extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Router history={hashHistory}>
          <Route path="/" component={Layout}>
            <IndexRoute component={Designer}></IndexRoute>
            <Route path="summer" component={Summer}></Route>
            <Route path="winter" component={Winter}></Route>
            <Route path="shoppingcart" component={Cart}></Route>
          </Route>
        </Router>
      </div>
    );
  }
}
