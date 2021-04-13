import React from 'react';
import './loader.scss';

const Loader = () => {
  return (
    <div className="wrap">
      <div className="loading">
        <div className="bounceball" />
        <div className="text">loading...</div>
      </div>
    </div>
  );
};

export default Loader;
