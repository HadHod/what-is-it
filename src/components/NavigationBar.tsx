import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import PathConstants from '../routes/pathConstants';

function NavigationBar(): ReactElement {
  return <nav className="p-6 border border-solid border-black flex justify-evenly">
    <Link to={PathConstants.HOME}>HOME</Link> | <Link to={PathConstants.HOME}>LOGIN / REGISTER</Link>
  </nav>
}

export default NavigationBar;
