import React, { FC } from 'react';
import './error.scss';

interface iErrorProps {
  error: string;
}

const Error: FC<iErrorProps> = (props) => {
  return (
    <div className="wrap">
      <div className="text">{props.error} </div>
    </div>
  );
};

export default Error;
