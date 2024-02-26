import { ReactElement } from 'react';

export interface HintProps {
  value: string;
}

function Hint({ value }: HintProps): ReactElement {
  return (
    <div>
      Hint: "<em>{ value }"</em>
    </div>
  );
}

export default Hint;