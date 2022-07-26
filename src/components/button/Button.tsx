import { DispatchWithoutAction, FC } from 'react';
import './button.css';

export interface ButtonProps{
  children: string;
  counter: number;
  onClick: DispatchWithoutAction
}

export const Button: FC<ButtonProps> = ({ children, counter, onClick }) => {
  return (
    <button className="button" type="button" onClick={onClick}>
      {children}
      {' '}
      {counter}
    </button>
  );
};
