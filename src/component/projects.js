import React from 'react';
import project_data from '../data/proj_data';
import demo_data from '../data/demo_data';

const Projects = () => {
  return (
    <div className='main-projects'>
      <h2 className='projects-title'>Some of my Projects</h2>
      <div className='project-container'>
        {project_data.map((project) => {
          const { id, src, title, description, link } = project;
          return (
            <div key={id} className='project-item'>
              <img src={'./' + src} alt='' />
              <h3 className='project-title'>{title}</h3>
              <p className='project-description'>{description}</p>
              <a
                className='project-link'
                href={link}
                target='_blank'
                rel='noopener noreferrer'
              >
                View Notebook
              </a>
            </div>
          );
        })}
      </div>
      <h2 className='demo-title'>Live Demos</h2>
      <div className='demo-container'>
        {demo_data.map((demo) => {
          const { id, src, title, description, link } = demo;
          return (
            <div key={id} className='demo-item'>
              <img src={'./' + src} alt='' />
              <h3 className='demo-title'>{title}</h3>
              <p className='demo-description'>{description}</p>
              <a
                className='demo-link'
                href={link}
                target='_blank'
                rel='noopener noreferrer'
              >
                View Demo
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
