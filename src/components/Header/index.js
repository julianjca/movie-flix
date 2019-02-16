import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import NumberFormat from 'react-number-format';

import { Div, InnerDiv } from './style';

const Header = (props) => {
  return (
    <Div>
      <Link to="/">
        <h1>TokoFlix</h1>
      </Link>
        {/* <h3>Your Current Balance is <span style={{ color: '#7FFF00'}}>Rp {props.prop.balance}</span></h3> */}
        <InnerDiv>
          <h3>Current Balance</h3>
          <NumberFormat
            value={props.prop.balance}
            displayType={'text'}
            thousandSeparator={true} prefix={'IDR '}
            style={{ fontSize: '1.3rem', fontWeight: '700', color: '#42B549'}}
            />
        </InnerDiv>
    </Div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    prop: state
  }
}

export default connect(mapStateToProps, null)(Header);