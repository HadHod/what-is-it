import React, { ReactElement, RefObject, useState } from 'react';
import { Spinner } from '../components';

function RandomGamePage(): ReactElement {
  const [context, setContext] = useState<CanvasRenderingContext2D | null | undefined>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const canvas: RefObject<HTMLCanvasElement> = React.useRef<HTMLCanvasElement>(null);

  function handleCanvasClick(event: React.MouseEvent<Element, MouseEvent>): void {
    const rect: DOMRect | undefined = canvas.current?.getBoundingClientRect();
    drawRect({
      x: event.clientX - (rect?.left || 0),
      y: event.clientY - (rect?.top || 0),
    });
  }

  function drawRect({ x, y }: { x: number, y: number }): void {
    if (context) {
      context.fillStyle = "rgb(200, 0, 0)";
      context.fillRect(x - 25, y - 25, 50, 50);
    }
  }

  React.useEffect(() => {
    function drawImageActualSize(image: HTMLImageElement): void {
      if (!canvas.current || !context) {
        return;
      }

      canvas.current.width = image.naturalWidth;
      canvas.current.height = image.naturalHeight;
      context.drawImage(image, 0, 0);
    }

    function loadImagePromise(url: string): Promise<HTMLImageElement> {
      return new Promise(resolve => {
        const image = new Image();
        image.addEventListener('load', () => {
          resolve(image);
        });
        image.src = url;
      });
    }

    const loadImage = async () => {
      const image = await loadImagePromise("https://konvajs.org/assets/yoda.jpg");
      drawImageActualSize(image);
    };

    setContext(canvas.current?.getContext('2d'));

    loadImage();

    setIsLoading(false);
  }, [context]);

  return (
    <div className='flex justify-center items-center h-full'>
      {isLoading
        ? <Spinner />
        : <canvas ref={canvas} className="border border-solid border-black" onClick={handleCanvasClick} />
      }
    </div>
  );
}

export default RandomGamePage;
