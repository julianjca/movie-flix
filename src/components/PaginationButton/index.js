import React from 'react'
import { Link } from 'react-router-dom';

import { Div } from './style';

const PaginationButton = props => {
  const { text, to } = props;
  return(
    <Div>
      <Link
        to={to}
      >
        { text }
      </Link>
    </Div>
  )
}

export default PaginationButton;