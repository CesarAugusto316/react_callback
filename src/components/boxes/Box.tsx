import {
  FC, useEffect, useReducer, useState,
} from 'react';
import { Button } from '../button/Button';
import { Result } from './Result';
import './boxes.css';


const increment = (state: number) => state + 1;

export const Box: FC = () => {
  const [counterParent, setCounter] = useReducer(increment, 0);
  const [counter1, setCounter1] = useReducer(increment, 0);
  const [counter2, setCounter2] = useReducer(increment, 0);
  const [result, setResult] = useState(0);

  const setTotal = () => {
    setResult(counter1 + counter2);
  };

  useEffect(() => {
    setTotal();
  }, [counter1, counter2]);

  return (
    <div className="counters-card">
      <div className="counters">
        <Result result={result} parent={counterParent} counters={[counter1, counter2]} />

        <Button counter={counterParent} onClick={setCounter}>
          Parent Button
        </Button>

        <div className="child__buttons">
          <Button counter={counter1} onClick={setCounter1}>Child One</Button>
          <Button counter={counter2} onClick={setCounter2}>Child Two</Button>
        </div>
      </div>
    </div>
  );
};
