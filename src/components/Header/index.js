import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { Div } from './style';

const Header = (props) => {
  return (
    <Div>
      <Link to="/">
        <h1>TokoFlix</h1>
      </Link>
        <h3>Your Current Balance is <span style={{ color: '#7FFF00'}}>Rp {props.prop.balance}</span></h3>
    </Div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    prop: state
  }
}

export default connect(mapStateToProps, null)(Header);