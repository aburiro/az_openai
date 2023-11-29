import React from 'react';
import image_1 from '../assets/images/Group 10.png';

const SocialMediaProfiles = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <img
      height={100}
      className="d-block w-25"
      src={image_1}
      alt="Third slide"
    />

    <div style={{ textAlign: 'center' }}>
      <h1>The Fast Pinpoint <br /> Get Started -&gt; <br /> Tracking & Reservation. <br /></h1>
    </div>

    <div>
      <h3>
        Pinpoint is the fastest tracking and reservation software solution for personal and enterprise vehicles
        for institutes, offices, and companies with live tracking, history recording, estimated arrival time,
        and usage report generation, and much more features
      </h3>
      {/* Add your social media profile components or any other content here */}
    </div>
  </div>
);

export default SocialMediaProfiles;
