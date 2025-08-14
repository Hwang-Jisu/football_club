import React, { useEffect, useState } from 'react';
import Background from './components/Background';
import Header from './components/Header';
import ScrollNavi from './components/ScrollNavi';
import Section from './components/Section';

const App = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' }, 500);
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <Background />
      <Header />
      <ScrollNavi scrollY={scrollY} />
      <Section scrollY={scrollY} />
      <div className='copyright'>
        &copy; 2025 Choi All rights reserved.
      </div>
    </>
  )
}

export default App;