import React, { useState, useEffect } from 'react';
import './Feedback.css'; // Import your CSS file

const Feedback = () => {
  const [name, setName] = useState('');
  const [submissions, setSubmissions] = useState([]);
  const [images, setImages] = useState([]);
  const [error, setError] = useState('');
  const [experience, setExperience] = useState('');

  // Load submissions from localStorage on component mount
  useEffect(() => {
    const storedSubmissions = localStorage.getItem('feedbackSubmissions');
    if (storedSubmissions) {
      setSubmissions(JSON.parse(storedSubmissions));
    }
  }, []);

  // Save submissions to localStorage whenever submissions state changes
  useEffect(() => {
    localStorage.setItem('feedbackSubmissions', JSON.stringify(submissions));
  }, [submissions]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    if (files.length + images.length > 15) {
      setError('You can upload a maximum of 15 images.');
      return;
    }

    setError('');

    const imageURLs = files.map((file) => URL.createObjectURL(file));

    setImages([...images, ...imageURLs]);
  };

  const handleExperienceChange = (e) => {
    setExperience(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = () => {
    if (!experience.trim() && images.length === 0) {
      setError('Please share your experience or upload at least one image.');
      return;
    }

    setError('');
    
    const submission = {
      name: name.trim(),
      experience: experience.trim(),
      images: [...images],
    };

    setSubmissions([...submissions, submission]);

    // Reset fields after submission
    setName('');
    setExperience('');
    setImages([]);
  };

  return (
    <div className="feedback-container">
      <h2 className="feedback-title">Customer Experiences</h2>
      <div className="feedback-input-container">
        <label htmlFor="name" className="feedback-label">Name:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} className="feedback-input" />
      </div>
      <div className="feedback-input-container">
        <label htmlFor="experience" className="feedback-label">Share your Experience:</label>
        <input type="text" id="experience" value={experience} onChange={handleExperienceChange} className="feedback-input" />
      </div>
      
      <input type="file" accept="image/*" multiple onChange={handleImageChange} className="feedback-upload" />
      {error && <p className="feedback-error">{error}</p>}
      <div className="feedback-image-preview">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 1}`} className="feedback-image" />
        ))}
      </div>
     
      <div className="feedback-submit">
        <button onClick={handleSubmit} className="feedback-submit-btn">Submit</button>
      </div>
      
      <div className="feedback-submissions">
        {submissions.map((submission, index) => (
          <div key={index} className="feedback-submitted">
            <h3 className="feedback-submitted-title">User {index + 1}:</h3>
            <p className="feedback-submitted-text">Name: {submission.name}</p>
            <p className="feedback-submitted-text">Experience: {submission.experience}</p>
            <div className="feedback-submitted-images">
              {submission.images.map((image, imgIndex) => (
                <img key={imgIndex} src={image} alt={`Image ${imgIndex + 1}`} className="feedback-submitted-image" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
