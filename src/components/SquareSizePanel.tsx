import { ReactElement } from 'react';

const squareSizes = [24, 36, 48, 60] as const;
export type SquareSize = typeof squareSizes[number];
export const DEFAULT_SQUARE_SIZE: SquareSize = 48;

interface SquareSizePanelProps {
  squareSizeSelected: SquareSize;
  squareSizeSelectedCallback: (s: SquareSize) => void;
}

function getStyles(isActive: boolean): string {
  return `flex justify-around items-center border border-solid border-black hover:border-4 cursor-pointer ${isActive ? 'bg-gray-400' : ''}`;
}

function SquareSizePanel({ squareSizeSelected, squareSizeSelectedCallback }: SquareSizePanelProps): ReactElement {
  return (
    <div className='flex justify-around w-full items-center p-2'>
      {squareSizes.map((size: SquareSize) => {
        return (
          <div
            key={size}
            style={{ width: `${size}px`, height: `${size}px` }}
            className={`${getStyles(squareSizeSelected === size)}`}
            onClick={() => squareSizeSelectedCallback(size)}>
            {size}
          </div>
        );
      })}
    </div>
  );
}

export default SquareSizePanel;
