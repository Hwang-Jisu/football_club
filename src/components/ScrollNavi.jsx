import React from 'react';
import { initCompiler } from 'sass';

const ScrollNavi = ({ scrollY }) => {
  const items = ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5'];

  return (
    <ul className='scrollNavi'>
      {items.map((item, idx) => (
        <li
          key={idx}
          className={scrollY >= idx * 5000 - 2500 && scrollY < (idx + 1) * 5000 - 2500 ? 'on' : ''}
          onClick={() => window.scrollTo({ top: idx * 5000, behavior: 'smooth' })}
        >
          <span><em>{item}</em></span>
        </li>
      ))}
    </ul>
  );
};

export default ScrollNavi;