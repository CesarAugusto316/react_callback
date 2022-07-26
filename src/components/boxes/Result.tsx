import { FC } from 'react';
import './boxes.css';
import '../button/button.css';


export interface ResultProps {
  result: number
  parent: number
  counters: Array<number>
}

export const Result: FC<ResultProps> = ({ result, parent, counters }) => {
  return (
    <div className="result">
      <div>
        <span>Child Counters Total:</span>
        <span className="result__count">{result}</span>
      </div>
      <div>
        <span>Parent:</span>
        <span className="result__count">{parent}</span>
      </div>
      <div>
        <br />
        <span className="most-clicked">The most clicked child button is</span>
        <span>
          {counters[0] === counters[1]
            ? (<button className="button button--secondary" type="button">They are equal</button>)
            : (counters[0] > counters[1])
              ? (<button className="button button--secondary" type="button">Child One</button>)
              : (<button className="button button--secondary" type="button">Child Two</button>)}
        </span>
      </div>
    </div>
  );
};
