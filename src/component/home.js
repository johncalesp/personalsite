import React from 'react';

const Home = () => {
  return (
    <div className='home-content'>
      <h1 className='home-title'>Welcome</h1>
      <p className='home-text'>
        Hello there,{' '}
        <span className='span-bold'>
          my name is John Calderon. I am a telecommunication engineer{' '}
        </span>
        currently based in Toronto, Canada. As a telecommunication engineer, I have had the
        opportunity to work in this field for many years. This has allowed me
        not only to acquire skills in different technologies, like routers,
        switches, servers and storage systems, but also to be promoted in my job
        since I continually enjoy updating my skills set by pursuing different
        certifications in areas of demand. In recent years, I have been noticing
        a great industry shift to certain IT areas such as software development,
        data analytics, machine learning engineering, amongst others.
        <br />
        That is why I set a path to become a data scientist, improving my
        coding, statistics and analytical skills using my background in
        enginnering as a baseline point.{' '}
        <span className='span-bold'>
          As of now, I am looking for a part-time job in the field while I take
          my courses in the program Artificial Intelligence &amp; Machine
          Learning from Lambton College.
        </span>{' '}
      </p>
    </div>
  );
};

export default Home;
