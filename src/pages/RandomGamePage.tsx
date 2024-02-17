import React, { ReactElement, RefObject, useState } from 'react';
import { Spinner } from '../components';

function RandomGamePage(): ReactElement {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [context, setContext] = useState<CanvasRenderingContext2D | null | undefined>(null);
  const [imageData, setImageData] = useState<ImageData>();

  const canvas: RefObject<HTMLCanvasElement> = React.useRef<HTMLCanvasElement>(null);

  function handleCanvasClick(event: React.MouseEvent<Element, MouseEvent>): void {
    const rect: DOMRect | undefined = canvas.current?.getBoundingClientRect();
    drawRect({
      x: event.clientX - (rect?.left || 0),
      y: event.clientY - (rect?.top || 0),
    });
  }

  function drawRect({ x, y }: { x: number, y: number }): void {
    if (context && imageData) {
      context.putImageData(imageData, 0, 0, x - 25, y - 25, 50, 50);
    }
  }

  React.useEffect(() => {
    setContext(canvas.current?.getContext('2d'));

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
        image.crossOrigin = "Anonymous";
      });
    }

    const loadImage = async () => {
      const image = await loadImagePromise("https://konvajs.org/assets/yoda.jpg");
      drawImageActualSize(image);

      if (context && canvas.current) {
        const { width, height } = canvas.current;
        setImageData(context.getImageData(0, 0, width, height));
        context.clearRect(0, 0, width, height);
      }
    };

    loadImage();

    setIsLoading(false);
  }, [context]);

  return (
    <div className='flex justify-center items-center flex-col h-full'>
      {isLoading
        ? <Spinner />
        : (
          <>
            <canvas ref={canvas} className="border border-solid border-black" onClick={handleCanvasClick} />
            <div>
              <input type='text' placeholder='answer' />
              <button>Submit answer</button>
            </div>
          </>
        )
      }
    </div>
  );
}

export default RandomGamePage;
