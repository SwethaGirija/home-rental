import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Search.css';

import home1 from '../images/home1.png';
import home2 from '../images/home2.png';
import home3 from '../images/home3.png';
import home4 from '../images/home4.png';
import home5 from '../images/home5.png';
import home6 from '../images/home6.png';
import home7 from '../images/home7.png';
import home8 from '../images/home8.png';

const Search = () => {
  const [houses, setHouses] = useState([
    {
      id: 1,
      title: 'Beautiful Beach House',
      location: 'Malibu, California',
      price: 200,
      bedrooms: 3,
      bathrooms: 2,
      description: 'Stunning beachfront property with breathtaking views.',
      image: home1,
      booked: false,
    },
    {
      id: 2,
      title: 'Cozy Mountain Cabin',
      location: 'Aspen, Colorado',
      price: 150,
      bedrooms: 2,
      bathrooms: 1,
      description: 'Perfect getaway for skiing and relaxation.',
      image: home3, 
      selected: false,// Add image URL here
    },
    {
        id: 3,
        title: 'Luxurious Villa with Ocean View',
        location: 'Maui, Hawaii',
        price: 500,
        bedrooms: 5,
        bathrooms: 5,
        description: 'Experience ultimate luxury in this stunning villa overlooking the ocean.',
        image: home4,
        selected: false,
      },
      {
        id: 4,
        title: 'Rustic Log Cabin Retreat',
        location: 'Lake Tahoe, California',
        price: 300,
        bedrooms: 4,
        bathrooms: 3,
        description: 'Escape to nature in this charming log cabin nestled in the woods.',
        image: home2,
        selected: false,
      },
      {
        id: 5,
        title: 'Modern Loft in Downtown Manhattan',
        location: 'New York, New York',
        price: 400,
        bedrooms: 2,
        bathrooms: 2,
        description: 'Sleek and stylish loft apartment in the heart of the city.',
        image: home5,
        selected: false,
      },
      {
        id: 6,
        title: 'Charming Cottage by the Lake',
        location: 'Lake District, England',
        price: 180,
        bedrooms: 3,
        bathrooms: 2,
        description: 'Quaint cottage with picturesque views of the tranquil lake.',
        image: home6,
        selected: false,
      },
      {
        id: 7,
        title: 'Elegant Townhouse in Historic Savannah',
        location: 'Savannah, Georgia',
        price: 250,
        bedrooms: 4,
        bathrooms: 3,
        description: 'Historic townhouse with modern amenities, perfect for exploring the city.',
        image: home7,
        selected: false,
      },
      {
        id: 8,
        title: 'Sunny Villa with Private Pool',
        location: 'Ibiza, Spain',
        price: 350,
        bedrooms: 6,
        bathrooms: 4,
        description: 'Relax and unwind in this beautiful villa with a private pool and stunning views.',
        image: home1,
        selected: false,
      },
      {
        id: 9,
        title: 'Ski Chalet with Mountain Views',
        location: 'Chamonix, France',
        price: 280,
        bedrooms: 3,
        bathrooms: 2,
        description: 'Cosy chalet perfect for winter sports enthusiasts, with breathtaking mountain views.',
        image: home2,
        selected: false,
      },
      {
        id: 10,
        title: 'Secluded Beachfront Bungalow',
        location: 'Bora Bora, French Polynesia',
        price: 600,
        bedrooms: 1,
        bathrooms: 1,
        description: 'Escape to paradise in this private bungalow with direct access to the beach.',
        image: home8,
        selected: false,
      }






    // Add more house objects here
  ]);

  const [selectedHouse, setSelectedHouse] = useState(null);
  const [showBookPage, setShowBookPage] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({
    guests: 1,
    userName: '',
    contact: '',
  });
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleHouseSelect = (house) => {
    if (!house.booked && !selectedHouse) {
      setSelectedHouse(house);
      setShowBookPage(true);
    }
  };

  const handleCancel = () => {
    setShowBookPage(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails({ ...bookingDetails, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3002/search', {
        houseId: selectedHouse.id,
        userName: bookingDetails.userName,
        contact: bookingDetails.contact,
        guests: bookingDetails.guests,
      });

      if (response.data.success) {
        alert('Booked successfully!');
        setSelectedHouse(null);
        setShowBookPage(false);
        setShowConfirmation(true);
        const updatedHouses = houses.map((house) =>
          house.id === selectedHouse.id ? { ...house, booked: true } : house
        );
        setHouses(updatedHouses);
      } else {
        alert('Failed to book. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to book. Please try again.');
    }
  };

  const redirectToFeedbackPage = () => {
    window.location.href = '/feedback'; // Replace '/feedback' with the actual URL of your feedback page
  };

  return (
    <div className="app">
      <div className="house-list">
        <Link to="/" className="back-button">
          Back
        </Link>
        {houses.map((house) => (
          <div key={house.id} className={`house-card ${house.booked || (selectedHouse && selectedHouse.id === house.id) ? 'disabled' : ''}`}>
            <div className="image-container" onClick={() => handleHouseSelect(house)}>
              <img src={house.image} alt={house.title} />
              {house.booked && <div className="booked-overlay">Booked</div>}
            </div>
            <h2>{house.title}</h2>
            <p>{house.location}</p>
            <p>Price: ${house.price} per night</p>
            {house.booked && <p>This house is already booked.</p>}
          </div>
        ))}
      </div>
      {selectedHouse && showBookPage && (
        <div className="book-page">
          <h2>Booking Page</h2>
          <form onSubmit={handleFormSubmit}>
            <label htmlFor="userName">Name:</label>
            <input
              type="text"
              id="userName"
              name="userName"
              value={bookingDetails.userName}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="contact">Contact:</label>
            <input
              type="text"
              id="contact"
              name="contact"
              value={bookingDetails.contact}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="guests">Guests:</label>
            <input
              type="number"
              id="guests"
              name="guests"
              value={bookingDetails.guests}
              onChange={handleInputChange}
              required
            />
            <button type="submit">Book Now</button>
            <button type="button" onClick={handleCancel}>Cancel</button>
          </form>
        </div>
      )}
      {showConfirmation && (
        <div className="booking-popup">
          <p className="booking-popup__message">Congratulations! You've successfully booked this house!</p>
        </div>
      )}
      <button className="feedback-button top-right" onClick={redirectToFeedbackPage}>
        Feedback
      </button>
    </div>
  );
};

export default Search;
