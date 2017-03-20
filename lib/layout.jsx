import React from 'react';
import {Link} from 'react-router';

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>iDesign</h1>
        <div className="app-nav-bar">
          <Link to="/">Designers</Link>
          <Link to="winter">Winter</Link>
          <Link to="summer">Summer</Link>
          <Link to="shoppingcart">Shopping Cart</Link>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
