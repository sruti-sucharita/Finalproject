import React from 'react';
import './Des.css';
import img3 from './Images/shadow-plant-flower-pot-silhouette-223958954.webp';

function Des() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="left-align">
          <p className="center-text" style={{ fontSize: '40px' }}>B.planet</p>
          <p style={{ fontSize: '30px' }}>Title</p>
          <p className="space-bottom" style={{ fontSize: '14px' }}>Sub title</p>
          <p style={{ fontSize: '30px' }}>Guide</p>
          <hr className="thick-hr short-right-hr" />
          <p style={{ fontSize: '16px' }}>
            guide 1
            <span className="indent-text">description</span>
          </p>
          <hr className="thick-hr short-right-hr" />
          <p style={{ fontSize: '16px' }}>
            guide 2
            <span className='indent-text'>description</span>
          </p>
          <hr className="thick-hr short-right-hr" />
          <p className="space-bottom1" style={{ fontSize: '16px' }}>
            guide 3 
            <span className='indent-text'>description<br /></span>
          </p>
          <p style={{ fontSize: '30px' }}>Description</p>
          <hr className="thick-hr short-right-hr" />
          <p className="space-bottom2" style={{ fontSize: '16px' }}>Write your description here.<br /></p>
        </div>
        <img src={img3} alt="Tree1" className='plant-image2'/>
        
      </header>
    </div>
  );
}

export default Des;
