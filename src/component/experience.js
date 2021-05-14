import React from 'react';
import experience_data from '../data/exp_data';

const Experience = () => {
  return (
    <div className='main-experience'>
      <h2 className='experience-title'>My IT road so far</h2>
      <div className='main-timeline'>
        {experience_data.map((item, index) => {
          const { title, description, start_year, exp_year } = item;
          return (
            <div key={index} className='timeline'>
              <div className='icon'></div>
              <div className='date-content'>
                <div className='date-outer'>
                  <span className='date'>
                    <span className='month'>{exp_year} Years</span>
                    <span className='year'>{start_year}</span>
                  </span>
                </div>
              </div>
              <div className='timeline-content'>
                <h5 className='title'>{title}</h5>
                <p className='description'>{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
