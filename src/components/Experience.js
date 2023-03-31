import React from 'react';
import { AiOutlineDoubleRight } from 'react-icons/ai';

const Experience = () => {
  return (
    <div className='experience' id="experience">
        
        <div className="contant">
          
            <div className="left">
              <h2>Experience</h2>
              <h3>Coding Elephant Technology</h3>
              <p>Full Stack Developer _ <span>Jun 2022 - Present</span></p>
              <ul>
                <li> At first, I was working as an Intern but now I am working as a Full Timeemployee.</li>
                <li>At this job, I helped my Senior Developers with building HTML, CSS design codes.</li>
                <li>For small internal projects, I had to build full-stack with React.js, Node.js and MongoDB.</li>
              </ul>
            </div>
            <div className="right">
              <h3>My Skills are:</h3>
              <div className="inner">
                <p><i><AiOutlineDoubleRight/></i>HTML</p>
                <p><i><AiOutlineDoubleRight/></i>CSS</p>
                <p><i><AiOutlineDoubleRight/></i>JavaScript</p>
                <p><i><AiOutlineDoubleRight/></i>Bootstrap CSS</p>
                <p><i><AiOutlineDoubleRight/></i>ChatGPT</p>
              </div>
              <div className="inner">
                <p><i><AiOutlineDoubleRight/></i>Tailwind CSS</p>
                <p><i><AiOutlineDoubleRight/></i>jQuery</p>
                <p><i><AiOutlineDoubleRight/></i>React.js</p>
                <p><i><AiOutlineDoubleRight/></i>Next.js</p>
              </div>
              <div className="inner">
                <p><i><AiOutlineDoubleRight/></i>Node.js</p>
                <p><i><AiOutlineDoubleRight/></i>Express.js</p>
                <p><i><AiOutlineDoubleRight/></i>MySQL</p>
                <p><i><AiOutlineDoubleRight/></i>MongoDB</p>
              </div>
              <div className="inner">
                <p><i><AiOutlineDoubleRight/></i>Git</p>
                <p><i><AiOutlineDoubleRight/></i>Typescript</p>
                <p><i><AiOutlineDoubleRight/></i>PHP</p>
                <p><i><AiOutlineDoubleRight/></i>Laravel</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Experience