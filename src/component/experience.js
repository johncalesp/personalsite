import React from 'react';
import experience_data from '../data/exp_data';

const Experience = () => {
  return (
    <div className='main-experience'>
      <h2 className='experience-title'>My IT road so far</h2>
      <div className='main-timeline'>
        {experience_data.map((item) => {
          const { title, description, start_year, exp_year } = item;
          return (
            <div class='timeline'>
              <div class='icon'></div>
              <div class='date-content'>
                <div class='date-outer'>
                  <span class='date'>
                    <span class='month'>{exp_year} Years</span>
                    <span class='year'>{start_year}</span>
                  </span>
                </div>
              </div>
              <div class='timeline-content'>
                <h5 class='title'>{title}</h5>
                <p class='description'>{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
