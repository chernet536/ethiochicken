import React from 'react';
import '../../App.css';
import BasicSlider from './BasicSlider';
import WhoAreWe from './WhoAreWe';
import OurProducts from './OurProducts';
import OurPartners from './OurPartners';
import Footer from './Footer';
import Footer2 from './Footer2';
import IndexPage from './IndexPage';
import LetsTalk from './LetsTalk';
import VisionMission from './VisionMission';
import WhyChooseUs from './WhyChooseUs';

export default function Home() {
  return (
    <>
      <BasicSlider />
      <WhoAreWe />
     
      <OurProducts />
      <div style={{marginBottom:'225px'}}></div>
      <WhyChooseUs />
      <OurPartners />
      <VisionMission />
      <IndexPage /> <br/>
      <div style={{marginBottom:'125px'}}></div>
      <LetsTalk />
      <Footer2 />
      
    </>
  );
}
