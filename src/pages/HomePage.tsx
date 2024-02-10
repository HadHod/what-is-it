import React, { ReactElement } from 'react';
import PathConstants from '../routes/pathConstants';
import { Link } from 'react-router-dom';

function HomePage(): ReactElement {
  return (
    <ol>
      <li><Link to={PathConstants.RANDOM}>Random game</Link></li>
      <li><Link to={PathConstants.LIST}>List</Link></li>
    </ol>
  )
}

export default HomePage;
