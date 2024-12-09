import React from 'react';

import FlashSales from '@/components/FlashSales'
import Categories from '@/components/Categories'
import BestSelling from '@/components/BestSelling'
import ExploreOurProducts from '@/components/ExploreOurProducts';
import Featured from '@/components/Featured';
import MusicExperience from '@/components/MusicExperience';
import Hero from '@/components/Hero';


const page = () => {
  return (
    <div>
     <Hero/>
     <FlashSales/>
     <Categories/>
     <BestSelling/>
     <MusicExperience/>
     <ExploreOurProducts/>
     <Featured/>
   
    </div>
  )
}

export default page
