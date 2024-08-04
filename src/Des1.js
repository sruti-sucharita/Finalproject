import React from 'react';
import './Des.css';
import img4 from './Images/image 2.png';

function Des() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="left-align">
          <p className="center-text" style={{ fontSize: '40px' }}>B.planet</p>
          <p style={{ fontSize: '30px' }}>Tree 2</p>
          <p className="space-bottom" style={{ fontSize: '14px' }}>Three Leaf Clover, symbolizes good luck and fortune in many cultures.</p>
          <p style={{ fontSize: '30px' }}>Plant Care Guide</p>
          <hr className="thick-hr short-right-hr" />
          <p style={{ fontSize: '16px' }}>
            Water
            <span className="indent-text">Allow the soil to dry out completely before watering.</span>
          </p>
          <hr className="thick-hr short-right-hr" />
          <p style={{ fontSize: '16px' }}>
            Light
            <span className='indent-text'>Bright indirect light environments.</span>
          </p>
          <hr className="thick-hr short-right-hr" />
          <p className="space-bottom1" style={{ fontSize: '16px' }}>
            Tips 
            <span className='indent-text'>Gently insert a toothpick into the soil to determine if your plant<br /></span>
            <span className='indent-text1'> plant needs watering.</span>
          </p>
          <p style={{ fontSize: '30px' }}>Description</p>
          <hr className="thick-hr short-right-hr" />
          <p className="space-bottom2" style={{ fontSize: '16px' }}>A caudiciform plant with reddish and green leaves. Interestingly, the leaves fold<br /> 
          up in pairs during the evening. Keep away from children and pets.<br /> </p>
          <p style={{ fontSize: '16px' }}>Plants images depicted are solely for illustration purposes only.</p>
        </div>
        <img src={img4} alt="Tree1" className='plant-image2'/>
      </header>
    </div>
  );
}

export default Des;
