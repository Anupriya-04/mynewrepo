
import React from 'react';
import '../../Css_Folder/Environment.css';


import { default as p40 } from '../../image/p40.jpg';


const Environment = () => {
  return (
    <div className="event-list-page">
      {/* Livelihood Section */}
      <div className="Envi-section">
        <img
          src={p40}
          alt="Envi Background"
          className="Envi-image"
        />
        <div className="Envi-text">
          <div className="Envi-title">ENVIRONMENT</div>

          <div className="Envi-subtitle">Sustainable Choices for a Greener Future</div>
          

         

        </div>
      </div>

      </div>
  );
};

export default Environment;

