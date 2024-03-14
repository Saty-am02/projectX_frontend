import { Canvas } from '@react-three/fiber';
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Suspense } from 'react';
import Island from '../models/Island';
import Loader from '../componetnts/Loader';
import Bird from '../assets/animated/bird';
import { useRef, useState, useEffect } from 'react';
import soundoff from '../assets/icons/soundoff.png';
import soundon from '../assets/icons/soundon.png';
import logo from '../assets/svg/svg0.svg';
import logo1 from '../assets/svg/svg1.svg';
import logo2 from '../assets/svg/svg2.svg';
import logo3 from '../assets/svg/svg3.svg';
import logo4 from '../assets/svg/svg4.svg';
import logo5 from '../assets/svg/svg5.svg';
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
      screenScale = [0.1, 0.1, 0.1];
      screenPosition = [6, -25, -143];
      screenRotation = [0, 1.63, 0.2];
    } else {
      screenScale = [0.1, 0.1, 0.1];
      screenPosition = [6, -25, -143];
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
          <directionalLight position={[1, 1, 1]} intencity={2} />
          <ambientLight intensity={0.5} />

          <Island position={screenPosition} scale={screenScale} rotation={screenRotation} />
        </Suspense>
      </Canvas>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Course of action "
          iconStyle={{ background: '#D5F0C1', color: '#000', padding: '7px' }}
          contentStyle={{ background: '#AAD9BB', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid  #AAD9BB' }}
          icon={<img src={logo} className='hover:animate-none animate-spin-slow ease-in-out'></img>}
        >
          <h2 class="vertical-timeline-element-title">Operating Instructions</h2>

          <p>The following steps outline how to navigate the website effectively.</p>

        </VerticalTimelineElement>
        {/* ---------------------------------Evaluate-------------------------------------- */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          contentStyle={{ background: '#AAD9BB', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid  #AAD9BB' }}
          date="	Evaluate "
          iconStyle={{ background: '#D5F0C1', color: '#000' }}
          icon={<img src={logo1}></img>}

        >
          <h2 className="vertical-timeline-element-title ">Question</h2> <br />
          <h4 className="vertical-timeline-element-subtitle">1.	One Question Evaluate:</h4>
          <p className='pl-5'>
            ⚙︎ Upload the necessary files (The question, Max Marks, Expected answer in a pdf, and the answer to be evaluated as a pdf)
          </p>

          <p className='pl-5'>
            ⚙︎ click the submit button
          </p>

          <p className='pl-5'>
            ⚙︎ check results and improve the answer
          </p>

        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="	Evaluate "
          iconStyle={{ background: '#D5F0C1', color: '#000' }}
          contentStyle={{ background: '#AAD9BB', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid  #AAD9BB' }}
          icon={<img src={logo2}></img>}
        >
          <h2 className="vertical-timeline-element-title">Script</h2><br />
          <h4 className="vertical-timeline-element-subtitle">1.	Many Question Evaluate:</h4>
          <p className='pl-5'>
            ⚙︎	This method is used to do a lot of Evaluations in a single go.
          </p>
          <p className='pl-5'>
            ⚙︎	Upload the necessary details(The Question ID(should be unique), The question, Max Marks, Expected answer in a pdf)
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="	Evaluate"
          iconStyle={{ background: '#D5F0C1', color: '#000' }}
          contentStyle={{ background: '#AAD9BB', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid  #AAD9BB' }}
          icon={<img src={logo3}></img>}
        >
          <h2 className="vertical-timeline-element-title">Exam</h2><br />
          <h4 className="vertical-timeline-element-subtitle">3.	Upload Answer Script:</h4>
          <p className='pl-5'>
            ⚙︎	You must have uploaded the Evaluation Scheme before you are eligible to upload the Answer Script..
          </p>
          <p className='pl-5'>
            ⚙︎	Here upload the answer scripts that need to be evaluated
          </p>
          <p className='pl-5'>
            ⚙︎	Once all student’s answer script is uploaded click the evaluate button.
          </p>
        </VerticalTimelineElement>
        {/* ---------------------------------Result-------------------------------------- */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="	Result"
          iconStyle={{ background: '#D5F0C1', color: '#000' }}
          contentStyle={{ background: '#AAD9BB', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid  #AAD9BB' }}
          icon={<img src={logo4}></img>}
        >
          <h2 className="vertical-timeline-element-title">Result</h2><br />
          <h4 className="vertical-timeline-element-subtitle">1.	Upload Answer Script:</h4>
          <p className='pl-5'>
            ⚙︎	Subject: Clicking this field displays a dropdown menu with a list of available subjects.
          </p>
          <p className='pl-5'>
            ⚙︎	Exam: Clicking this field displays a dropdown menu with a list of available exams.
          </p>
          <p className='pl-5'>
            ⚙︎	Once you’ve selected both the subject and exam, you can request the results to be displayed.

          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="	Result"
          iconStyle={{ background: '#D5F0C1', color: '#000' }}
          contentStyle={{ background: '#AAD9BB', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid  #AAD9BB' }}
          icon={<img src={logo5}></img>}
        >
          <h2 className="vertical-timeline-element-title">Result</h2><br />
          <h4 className="vertical-timeline-element-subtitle">2.	Result Navigation:</h4>

          <p className='pl-5'>
            ⚙︎  Search for a specific student using the search student button. </p>
          <p className='pl-5'>
            ⚙︎  Download all the marks for all students as an Excel file using the xls button. </p>
          <p className='pl-5'>
            ⚙︎  Click on a student's name to view their detailed marks. </p>
          <p className='pl-5'>
            ⚙︎  See the marks awarded for each question in the detailed view. </p>
          <p className='pl-5'>
            ⚙︎  Download the student's answer sheet as a JPEG image or PDF file. </p>


        </VerticalTimelineElement>

      </VerticalTimeline>
      <div className='flex flex-col mt-10 justify-center items-center text-secondary-lightenglishblue '>
        <h6 className='text-center hover:text-black'>Made with AI in 2024</h6>
        <p className='text-center hover:text-black'>©️2024 VALVER | All Rights Reserved</p>
        <p className=''></p>
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
