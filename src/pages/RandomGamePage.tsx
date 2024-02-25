import React, { ReactElement, useState } from 'react';
import Game, { GameProps } from '../components/Game';

function RandomGamePage(): ReactElement {
  const [randomIndex, setRandomIndex] = useState<number>(0);

  const games: GameProps[] = [
    {
      imageUrl: 'https://konvajs.org/assets/yoda.jpg',
      hint: 'green master',
      difficulty: 1,
      answers: ['yoda'],
    },
    {
      imageUrl: 'https://www.organics.ph/cdn/shop/products/apple-washington-size-113-per-piece-fruits-vegetables-fresh-produce-509590_600x.jpg?v=1601486996',
      hint: 'tree fruit',
      difficulty: 1,
      answers: ['apple', 'apples'],
    },
    {
      imageUrl: 'https://images.freeimages.com/images/large-previews/0bf/missing-link-1195723.jpg?fmt=webp&h=350',
      hint: 'metal heavy "rope"',
      difficulty: 2,
      answers: ['chain'],
    },
  ]

  React.useEffect(() => {
    setRandomIndex(Math.floor(Math.random() * games.length));
  }, [games.length]);

  return (
    <Game
      imageUrl={games[randomIndex].imageUrl}
      answers={games[randomIndex].answers}
      difficulty={games[randomIndex].difficulty}
      hint={games[randomIndex].hint}
    />
  );
}

export default RandomGamePage;
