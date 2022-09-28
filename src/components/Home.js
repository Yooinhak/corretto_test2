import React, { useEffect, useRef } from 'react';
import mainImg from '../img/mainImg.png';
import Content from './Content';

const data = [
  {
    id: 1,
    title: '제공내역',
    content: '한국 개량한복 3SET',
  },
  {
    id: 2,
    title: '지원인원',
    content: '83명',
  },
  {
    id: 3,
    title: '모집인원',
    content: '50명',
  },
  {
    id: 4,
    title: '신청기간',
    content: '12.01 ~ 12.15',
  },
  {
    id: 5,
    title: '발표날짜',
    content: '12.16',
  },
];

const Home = ({ setScrollEvent }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); //clean up
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > scrollRef.current.offsetTop) {
      setScrollEvent(true);
    } else {
      setScrollEvent(false);
    }
  };

  return (
    <div className='home'>
      <img src={mainImg} alt='mainImg' />
      <div className='section-title'>
        <h2 ref={scrollRef} className='title'>
          평범한 한복 데이트는 그만! 고퀄리티 한복대여 체험단 모집
        </h2>
        <div className='situation'>모집중</div>
        {data.map((v) => (
          <div className='content' key={v.id}>
            <span>{v.title}</span>
            <span>{v.content}</span>
          </div>
        ))}
        <button>체험단 신청하기</button>
      </div>
      <Content />
    </div>
  );
};

export default Home;
