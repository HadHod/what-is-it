import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import PathConstants from '../routes/pathConstants';
import './NavigationBar.scss';

function NavigationBar(): ReactElement {
  return <nav><Link to={PathConstants.HOME}>HOME</Link> | <Link to={PathConstants.HOME}>log / register</Link></nav>
}

export default NavigationBar;
