// PrivacyPolicy.js

import React from 'react';
import './privacypolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className='back'>
    <div className="privacy-policy-container">
      <h1>Privacy Policy</h1>
      <p>
        This privacy policy outlines how we collect, use, and protect your personal information when you use our time management system.
      </p>
      <h2>Information We Collect</h2>
      <p>
        We may collect the following information when you use our time management system:
        <ul>
          <li>Your name and email address</li>
          <li>Usage data, including the tasks you create and time spent on them</li>
        </ul>
      </p>
      <h2>How We Use Your Information</h2>
      <p>
        We use your information to:
        <ul>
          <li>Provide and improve our time management system</li>
          <li>Send you important notifications and updates</li>
        </ul>
      </p>
      <h2>Security</h2>
      <p>
        We take security seriously and implement measures to protect your data.
      </p>
      <h2>Changes to this Privacy Policy</h2>
      <p>
        We may update this privacy policy from time to time. Please review it periodically for any changes.
      </p>
      <h2>Contact Us</h2>
      <p>
        If you have any questions about this privacy policy, please contact us at vasanth@gmail.com.
      </p>
    </div>
    </div>
  );
};

export default PrivacyPolicy;
