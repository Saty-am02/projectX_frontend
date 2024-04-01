import React, { useState, useEffect } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { NavLink } from 'react-router-dom';
import logo from '../assets/svg/svg0.svg';
import logo1 from '../assets/svg/svg1.svg';
import logo2 from '../assets/svg/svg2.svg';
import logo3 from '../assets/svg/svg3.svg';
import logo4 from '../assets/svg/svg4.svg';
import logo5 from '../assets/svg/svg5.svg';


const Home = () => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  // donot touch this code because i dont use chatgpt 
  useEffect(() => {
    class TextScramble {
      constructor(el) {
        this.el = el;
        this.chars = '!<>-_\\/[]{}—=+*^?#________';
        this.update = this.update.bind(this);
      }

      setText(newText) {
        const oldText = this.el.innerText;
        const length = Math.max(oldText.length, newText.length);
        const promise = new Promise((resolve) => this.resolve = resolve);
        this.queue = [];
        for (let i = 0; i < length; i++) {
          const from = oldText[i] || '';
          const to = newText[i] || '';
          const start = Math.floor(Math.random() * 40);
          const end = start + Math.floor(Math.random() * 40);
          this.queue.push({ from, to, start, end });
        }
        cancelAnimationFrame(this.frameRequest);
        this.frame = 0;
        this.update();
        return promise;
      }

      update() {
        let output = '';
        let complete = 0;
        for (let i = 0, n = this.queue.length; i < n; i++) {
          let { from, to, start, end, char } = this.queue[i];
          if (this.frame >= end) {
            complete++;
            output += to;
          } else if (this.frame >= start) {
            if (!char || Math.random() < 0.28) {
              char = this.randomChar();
              this.queue[i].char = char;
            }
            output += `<span class="dud">${char}</span>`;
          } else {
            output += from;
          }
        }
        this.el.innerHTML = output;
        if (complete === this.queue.length) {
          this.resolve();
        } else {
          this.frameRequest = requestAnimationFrame(this.update);
          this.frame++;
        }
      }

      randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)];
      }
    }

    const phrases = [
      'Welcome',
      'To',
      'Script Evaluation ',
      'System',
    ];

    const el = document.querySelector('.text');
    const fx = new TextScramble(el);

    let counter = 0;
    const next = () => {
      fx.setText(phrases[counter]).then(() => {
        setTimeout(next, 1200);
      });
      counter = (counter + 1) % phrases.length;
    };

    next();
  }, []);

  return (
    <section className='w-full h-screen relative'>
      <div className='relative top-72 font-mono uppercase text-8xl text-center'>
        <div className="text"></div>
      </div>
      <div className='relative top-96 translate-y-80'>
        <VerticalTimeline lineColor='black'

        >
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Course of Action"
            dateClassName='text-black'
            iconStyle={{ background: 'black', color: 'white' }}
            contentStyle={{
              background: '#011522', color: 'white'
            }}
            contentArrowStyle={{ borderRight: '7px solid black' }}
            icon={<img src={logo} className='hover:animate-none animate-spin-slow ease-in-out p-3' alt="Logo" />}
          >

            <div className='flex mb-3'>
              <div class="circle">
                <span class="red box"></span>
              </div>
              <div class="circle">
                <span class="yellow box"></span>
              </div>
              <div class="circle">
                <span class="green box"></span>
              </div>
            </div>
            <h2 class="vertical-timeline-element-title">Operating Instructions</h2>

            <p>The following steps outline how to navigate the website effectively.</p>



          </VerticalTimelineElement >

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Evaluate"
            dateClassName='text-black'
            iconStyle={{ background: 'black', color: 'white' }}
            contentStyle={{
              background: '#011522', color: 'white'
            }}
            contentArrowStyle={{ borderRight: '7px solid black' }}
            icon={<img src={logo2} alt="logo" />}
          >
            <div className='flex mb-3'>
              <div class="circle">
                <span class="red box"></span>
              </div>
              <div class="circle">
                <span class="yellow box"></span>
              </div>
              <div class="circle">
                <span class="green box"></span>
              </div>
            </div>
            <h2 className="vertical-timeline-element-title text-white">Question</h2> <br />
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
            date="Evaluate"
            dateClassName='text-black'
            iconStyle={{ background: 'black', color: 'white' }}
            contentStyle={{
              background: '#011522', color: 'white'
            }}
            contentArrowStyle={{ borderRight: '7px solid black' }}
            icon={<img src={logo3} alt="logo" />}
          >
            <div className='flex mb-3'>
              <div class="circle">
                <span class="red box"></span>
              </div>
              <div class="circle">
                <span class="yellow box"></span>
              </div>
              <div class="circle">
                <span class="green box"></span>
              </div>
            </div>
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
            date="Evalute"
            dateClassName='text-black'
            iconStyle={{ background: 'black', color: 'white' }}
            contentStyle={{
              background: '#011522', color: 'white'
            }}
            contentArrowStyle={{ borderRight: '7px solid black' }}
            icon={<img src={logo4} alt="logo" />}
          >
            <div className='flex mb-3'>
              <div class="circle">
                <span class="red box"></span>
              </div>
              <div class="circle">
                <span class="yellow box"></span>
              </div>
              <div class="circle">
                <span class="green box"></span>
              </div>
            </div>
            <h2 className="text-white">Exam</h2><br />
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

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Result"
            dateClassName='text-black'
            iconStyle={{ background: 'black', color: 'white' }}
            contentStyle={{
              background: '#011522', color: 'white'
            }}
            contentArrowStyle={{ borderRight: '7px solid black' }}
            icon={<img src={logo1} alt="logo" />}
          >

            <div className='flex mb-3'>
              <div class="circle">
                <span class="red box"></span>
              </div>
              <div class="circle">
                <span class="yellow box"></span>
              </div>
              <div class="circle">
                <span class="green box"></span>
              </div>
            </div>
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
            date="Result"
            dateClassName='text-black'
            iconStyle={{ background: 'black', color: 'white' }}
            contentStyle={{
              background: '#011522', color: 'white'
            }}
            contentArrowStyle={{ borderRight: '7px solid black' }}
            icon={<img src={logo5} alt="logo" />}
          >
            <div className='flex mb-3'>
              <div class="circle">
                <span class="red box"></span>
              </div>
              <div class="circle">
                <span class="yellow box"></span>
              </div>
              <div class="circle">
                <span class="green box"></span>
              </div>
            </div>
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
              ⚙︎  Download the student's answer sheet as a CSV file. </p> 
          </VerticalTimelineElement>
        </VerticalTimeline>

        <div id='tooltip' onMouseEnter={() => setIsTooltipVisible(true)} onMouseLeave={() => setIsTooltipVisible(false)} className='tooltip-container mt-10'>
          <nav>
            <NavLink to="/devteam">
              <div className={`tooltip ${isTooltipVisible ? 'visible' : ''}`}>
                <p id='msg' className='tooltip-content'>click to show Dev Team</p>
              </div>
              <h6 className='text-center text-secondary-darkEnglishblue hover:text-black'>Made with AI in 2024</h6>
              <p className='text-center text-secondary-darkEnglishblue hover:text-black'>©️2024 VALVER | All Rights Reserved</p>
            </NavLink>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Home;
