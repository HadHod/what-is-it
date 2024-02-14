import React, { ReactElement, RefObject, useState } from 'react';

function RandomGamePage(): ReactElement {
  const [context, setContext] = useState<CanvasRenderingContext2D | null | undefined>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const canvas: RefObject<HTMLCanvasElement> = React.useRef<HTMLCanvasElement>(null);

  function handleCanvasClick(event: React.MouseEvent<Element, MouseEvent>): void {
    const rect: DOMRect | undefined = canvas.current?.getBoundingClientRect();
    const currentCoord = {
      x: event.clientX - (rect?.left || 0),
      y: event.clientY - (rect?.top || 0),
    };
    draw(currentCoord);
  }

  function draw({ x, y }: { x: number, y: number }): void {
    if (context) {
      context.fillStyle = "rgb(200, 0, 0)";
      context.fillRect(x - 25, y - 25, 50, 50);
    }
  }

  React.useEffect(() => {
    function drawImageActualSize(this: HTMLImageElement): void {
      if (!canvas.current || !context) {
        return;
      }

      canvas.current.width = this.naturalWidth;
      canvas.current.height = this.naturalHeight;
      context.drawImage(this, 0, 0);
    }

    function loadImage(): void {
      const image = new window.Image();
      image.src = "https://konvajs.org/assets/yoda.jpg";
      image.addEventListener('load', drawImageActualSize);
    }

    setContext(canvas.current?.getContext('2d'));

    loadImage();

    setIsLoading(false);
  }, [context]);

  return (
    <div className='flex justify-center items-center h-full'>
      {isLoading
        ? "Loading..."
        : <canvas ref={canvas} className="border border-solid border-black" onClick={handleCanvasClick} />
      }
    </div>
  );
}

export default RandomGamePage;
