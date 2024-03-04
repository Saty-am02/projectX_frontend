import { Canvas } from '@react-three/fiber';
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Suspense } from 'react';
import Island from '../models/Island';
import  Loader  from '../componetnts/Loader';
import Bird from '../assets/animated/bird';
import { useRef, useState, useEffect } from 'react';
import soundoff from '../assets/icons/soundoff.png';
import soundon from '../assets/icons/soundon.png';

import birdsong from '../assets/music/bird.mp3';

const Home = () => {
  const audioRef = useRef(new Audio(birdsong));
  audioRef.current.volume = 0.9;
  audioRef.current.loop = true;

  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);


  const adjustIslandScreen = () => {  


    let screenScale = null;   
    let screenPosition;
    let screenRotation;

    if (window.innerWidth < 768) {
      screenScale = [0.1,0.1,0.1];
      screenPosition = [6,-25,-143];
      screenRotation = [0, 1.63, 0.2];
    } else {
      screenScale = [0.1,0.1,0.1];
      screenPosition = [6,-25,-143];
      screenRotation = [0, 1.63, 0.2];
    }

    return { screenScale, screenPosition, screenRotation };
  };

  const { screenScale, screenPosition, screenRotation } = adjustIslandScreen();

  return (
    <section className='w-full h-screen relative bg-secondary-lightblue'>
     <Bird />
     <Canvas className='w-full h-screen bg-transparent' camera={{ near: 0.1, far: 1000 }}>
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1,1,1]} intencity={2} />
          <ambientLight intensity={0.5} />

          <Island position={screenPosition} scale={screenScale} rotation={screenRotation} />
        </Suspense>
      </Canvas>

<div className='bg-secondary-lightblue relative'>
<VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work "
    contentStyle={{ background : '#AAD9BB', color: '#000' }}
    contentArrowStyle={{ borderRight: '7px solid  #AAD9BB' }}
    date="2011 - present"
    iconStyle={{ background: '#D5F0C1', color: '#000' }}

  >
    <h3 className="vertical-timeline-element-title">Creative Director</h3>
    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2010 - 2011"
    iconStyle={{ background: '#D5F0C1', color: '#000' }}
    contentStyle={{ background: '#AAD9BB', color: '#000' }}
    contentArrowStyle={{ borderRight: '7px solid  #AAD9BB' }}

  >
    <h3 className="vertical-timeline-element-title">Art Director</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>
      Creative Direction, User Experience, Visual Design, SEO, Online Marketing
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2008 - 2010"
    iconStyle={{ background: '#D5F0C1', color: '#000' }}
    contentStyle={{ background: '#AAD9BB', color: '#000' }}
    contentArrowStyle={{ borderRight: '7px solid  #AAD9BB' }}
  >
    <h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2006 - 2008"
    iconStyle={{ background: '#D5F0C1', color: '#000' }}
    contentStyle={{ background: '#AAD9BB', color: '#000' }}
    contentArrowStyle={{ borderRight: '7px solid  #AAD9BB' }}

  >
    <h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="April 2013"
    iconStyle={{ background: '#D5F0C1', color: '#000' }}
    contentStyle={{ background: '#AAD9BB', color: '#000' }}
    contentArrowStyle={{ borderRight: '7px solid  #AAD9BB' }}
   
  >
    <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
    <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
    <p>
      Strategy, Social Media
    </p>
  </VerticalTimelineElement>
  
</VerticalTimeline>
  

</div>
      <div className='fixed bottom-2 left-2'>
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt='jukebox'
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className='w-10 h-10 cursor-pointer object-contain'
        />
      </div>
    </section>
  );
};

export default Home;
