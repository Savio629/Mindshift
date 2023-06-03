import React from 'react';
import './styles.css';

const Header = () => (
  <header className='home-header'>
    {/* <h2>Inc. This Morning</h2> */}
    <h1 className='blog_title'>
      BLOG
    </h1>
    <p id='blog_subtext'> 
    Awesome place to make yourself <br /> productive and happier through
      daily updates.
    </p>
  </header>
);

export default Header;
