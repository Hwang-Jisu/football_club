import React, { useEffect } from 'react';

const Section = ({ scrollY }) => {
  const articles = [
    { objs: ['obj11', 'obj12', 'obj13'], imgs: ['pic11.png', 'pic12.png', 'player1.png'], color: '#ff0f51' },
    { objs: ['obj21', 'obj22'], imgs: ['pic21.png', 'player2.png'], color: '#fffb02' },
    { objs: ['obj31', 'obj32'], imgs: ['pic31.png', 'player3.png'], color: '#b57de4' },
    { objs: ['obj41', 'obj42', 'obj43'], imgs: ['pic41.png', 'pic42.png', 'player4.png'], color: '#7cf923' },
    { objs: ['obj51', 'obj52', 'obj53'], imgs: ['pic51.png', 'pic52.png', 'player5.png'], color: '#3dbdfa' },
  ];

  useEffect(() => {
    const onMouseMove = (e) => {
      const posX = e.pageX / 100;
      const posY = e.pageX / 150;

      articles.forEach((art) => {
        art.objs.forEach((cls, idx) => {
          const el = document.querySelector(`.${cls}`);
          if (!el) return;
          
          el.style.transform = `translate(${posX}px, ${posY}px)`;
        });
      });
    };

    document.body.addEventListener('mousemove', onMouseMove);
    return () => document.body.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <section>
      {articles.map((art, i) => {
        const isOn = scrollY >= i * 5000 - 2500 && scrollY < (i + 1) * 5000 - 2500;
        return (
          <article
            key={i}
            className={isOn ? 'on' : ''}
            style={{ transform: `translateZ(${scrollY - i * 5000}px)` }}
          >
            {art.imgs.map((img, idx) => (
              <img key={idx} className={art.objs[idx]} src={`/img/${img}`} alt="" />
            ))}
            <p>
              <span style={{ color: art.color }}>Lorem Ipsum</span>
              <em>Lorem ipsum dolor sit amet.</em>
            </p>
          </article>
        );
      })}
    </section>
  );
};

export default Section;
