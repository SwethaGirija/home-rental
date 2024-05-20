import React, { useState, useEffect } from 'react';
import './Houseadd.css'

const Houseadd = () => {

    
    const [newHouseImage, setNewHouseImage] = useState(null);
    const [newHouseDetails, setNewHouseDetails] = useState({
        title: '',
        bedrooms: '',
        bathrooms: '',
        rentalAmount: '',
        location: '',
        description: ''
    });
    
    const [houses, setHouses] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        // Update searchResults whenever houses change
        setSearchResults(houses);
    }, [houses]);

    const handleAddHouse = () => {
        if (newHouseImage && Object.values(newHouseDetails).every(value => value !== '')) {
            const newHouse = {
                id: houses.length + 1,
                image: URL.createObjectURL(newHouseImage),
                details: `${newHouseDetails.bedrooms} bed, ${newHouseDetails.bathrooms} bath`,
                rentalAmount: newHouseDetails.rentalAmount,
                location: newHouseDetails.location,
                title: newHouseDetails.title,
                description: newHouseDetails.description
            };

            // Update houses and searchResults
            setHouses([...houses, newHouse]);
            setSearchResults([...houses, newHouse]); // Update searchResults with the new house
            setNewHouseImage(null);
            setNewHouseDetails({
                title: '',
                bedrooms: '',
                bathrooms: '',
                rentalAmount: '',
                location: '',
                description: ''
            });
            setError(''); // Reset error state
        } else {
            setError('Please fill all fields.');
        }
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        setNewHouseImage(file);
    };

    return (
        <div className="house-rental-page">
            <h1>House Rentals</h1>
            <div className="houses">
                {searchResults.map(house => (
                    <div key={house.id} className="house">
                        <img src={house.image} alt={`House ${house.id}`} />
                        <div className="details">
                            <h2>{house.title}</h2>
                            <p>{house.details}</p>
                            <p>Rental Amount: {house.rentalAmount}</p>
                            <p>Location: {house.location}</p>
                            <p>Description: {house.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            
            {error && <div className="error">{error}</div>} {/* Display error if exists */}
            <div className="password-prompt">
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                />
                <input
                    type="text"
                    placeholder="Title"
                    value={newHouseDetails.title}
                    onChange={e => setNewHouseDetails({ ...newHouseDetails, title: e.target.value })}
                />
                <input
                    type="number"
                    placeholder="Bedrooms"
                    value={newHouseDetails.bedrooms}
                    onChange={e => setNewHouseDetails({ ...newHouseDetails, bedrooms: e.target.value })}
                />
                <input
                    type="number"
                    placeholder="Bathrooms"
                    value={newHouseDetails.bathrooms}
                    onChange={e => setNewHouseDetails({ ...newHouseDetails, bathrooms: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Rental Amount"
                    value={newHouseDetails.rentalAmount}
                    onChange={e => setNewHouseDetails({ ...newHouseDetails, rentalAmount: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Location"
                    value={newHouseDetails.location}
                    onChange={e => setNewHouseDetails({ ...newHouseDetails, location: e.target.value })}
                />
                <textarea
                    placeholder="Description"
                    value={newHouseDetails.description}
                    onChange={e => setNewHouseDetails({ ...newHouseDetails, description: e.target.value })}
                />
                <button onClick={handleAddHouse}>Submit</button>
            </div>
        </div>
    );
};

export default Houseadd;
