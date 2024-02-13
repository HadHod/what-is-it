import React, { ReactElement, RefObject, useState } from 'react';

function RandomGamePage(): ReactElement {
  const [context, setContext] = useState<CanvasRenderingContext2D | null | undefined>(null);

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
    setContext(canvas.current?.getContext('2d'));
  }, []);

  return <canvas ref={canvas} height={600} width={800} className="border border-solid border-black" onClick={handleCanvasClick} />;
}

export default RandomGamePage;
