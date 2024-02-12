import { ReactElement } from 'react';
import { Link } from 'react-router-dom';

export interface HomePageLinkProps {
  to: string;
  children: string;
}

function HomePageLink(props: HomePageLinkProps): ReactElement {
  const { to, children } = props;

  return <Link
    className="w-full block text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-large rounded-lg text-5xl px-10 py-5 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-black"
    to={to}>
      { children }
  </Link>
}

export default HomePageLink;
