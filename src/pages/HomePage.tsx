import { ReactElement } from 'react';
import PathConstants from '../routes/pathConstants';
import HomePageLink, { HomePageLinkProps } from '../components/HomePageLink';

function HomePage(): ReactElement {
  const menuElements: HomePageLinkProps[] = [
    { to: PathConstants.RANDOM, children: "Random Game" },
    { to: PathConstants.LIST, children: "List" },
    { to: PathConstants.STATS, children: "Player Stats" },
    { to: PathConstants.ABOUT, children: "About" },
  ];

  return (
    <ol className="h-full flex items-center flex-col justify-evenly">
      {menuElements.map(menuElement => {
        return <li className="w-1/2" key={menuElement.to}>
          <HomePageLink to={menuElement.to}>
            {menuElement.children.toUpperCase()}
          </HomePageLink>
        </li>
      })}
    </ol>
  )
}

export default HomePage;
