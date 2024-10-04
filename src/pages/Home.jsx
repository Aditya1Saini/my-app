import React from 'react';
import Hero from "../assets/component/Hero"
import LatestCollection from '../assets/component/LatestCollection';
import BestsellerE from '../assets/component/BestsellerE';
import OurPolicy from '../assets/component/OurPolicy';
import NewsLetterBox from '../assets/component/NewsLetterBox';


const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <BestsellerE/>
      <OurPolicy/>
      <NewsLetterBox/>
      {/* <Hero/>
      <LatestCollection/>
      <BestsellerE />
      <OurPolicy/>
      <NewsLetterBox/> */}
    </div>
  )
}

export default Home
