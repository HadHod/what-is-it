import React, { ReactElement, RefObject, useState } from 'react';
import SquareSizePanel, { DEFAULT_SQUARE_SIZE, SquareSize } from './SquareSizePanel';
import { GameProgressBar, Spinner } from '.';
import DifficultyRating from './DifficultyRating';

export interface GameProps {
  readonly imageUrl: string;
  answers: string[];
  difficulty: number;
  hint: string;
}

function Game(props: GameProps): ReactElement {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [context, setContext] = useState<CanvasRenderingContext2D | null | undefined>(null);
  const [imageData, setImageData] = useState<ImageData>({} as ImageData);
  const [squareSize, setSquareSize] = useState<SquareSize>(DEFAULT_SQUARE_SIZE);

  const canvas: RefObject<HTMLCanvasElement> = React.useRef<HTMLCanvasElement>(null);

  function handleCanvasClick(event: React.MouseEvent<Element, MouseEvent>): void {
    const rect: DOMRect | undefined = canvas.current?.getBoundingClientRect();
    const x: number = event.clientX - (rect?.left || 0);
    const y: number = event.clientY - (rect?.top || 0);
    context?.putImageData(imageData, 0, 0, x - squareSize / 2, y - squareSize / 2, squareSize, squareSize);
  }

  React.useEffect(() => {
    const prepareCanvas = async () => {
      function loadImage(url: string): Promise<HTMLImageElement> {
        return new Promise(resolve => {
          const image: HTMLImageElement = new Image();
          image.addEventListener('load', () => resolve(image));
          image.crossOrigin = "Anonymous";
          image.src = url;
        });
      }

      if (context && canvas.current) {
        const image = await loadImage(props.imageUrl);
        canvas.current.width = image.naturalWidth;
        canvas.current.height = image.naturalHeight;
        context.drawImage(image, 0, 0);
        const { width, height } = canvas.current;
        setImageData(context.getImageData(0, 0, width, height));
        context.clearRect(0, 0, width, height);
      }
    };

    setContext(canvas.current?.getContext('2d'));
    prepareCanvas();
    setIsLoading(false);
  }, [context, props.imageUrl]);

  return (
    <div className='flex justify-center items-center flex-col h-full'>
      {isLoading
        ? <Spinner />
        : (
          <>
            <div className='flex'>Difficulty:<DifficultyRating value={props.difficulty} /></div>
            <div>Hint: { props.hint }</div>
            <canvas ref={canvas} className="border border-solid border-black" onClick={handleCanvasClick} />
            <SquareSizePanel squareSizeSelected={squareSize} squareSizeSelectedCallback={setSquareSize} />
            <GameProgressBar value={10} />
            <div>
              <input type='text' placeholder='answer' />
              <button>Check & Submit</button>
            </div>
          </>
        )
      }
    </div>
  );
}

export default Game;
