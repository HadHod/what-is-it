import { ReactElement } from 'react';

export interface GameProgressBarProps {
  value: number;
}

function getColor(value: number): string {
  if (value > 75) return 'bg-red-600';
  if (value > 50) return 'bg-yellow-400';
  if (value > 25) return 'bg-blue-600';
  return 'bg-green-600';
}

function GameProgressBar({ value }: GameProgressBarProps): ReactElement {
  return (
    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
      <div className={`${getColor(value)} text-xs font-medium text-blue-100 text-center p-2 leading-none rounded-full`} style={{ width: `${value}%` }}>
        Visible&nbsp;{ value }%
      </div>
    </div>
  );
}

export default GameProgressBar;
