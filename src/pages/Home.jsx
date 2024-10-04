import React from 'react';
import Hero from '../component/Hero';
import LatestCollection from '../component/LatestCollection';
import BestsellerE from '../component/BestsellerE';
import OurPolicy from '../component/OurPolicy';
import NewsLetterBox from '../component/NewsLetterBox';


const Home = () => {
  return (
    <div>
      
      <Hero/>
      <LatestCollection/>
      <BestsellerE />
      <OurPolicy/>
      <NewsLetterBox/>
    </div>
  )
}

export default Home
