import React from 'react';
import './Home.css';

import Header from '../components/Header/Header';
import styled from 'styled-components';
import home1 from '../components/images/home1.png';
import home2 from '../components/images/home2.png';
import home3 from '../components/images/home3.png';
import home4 from '../components/images/home4.png';
import home5 from '../components/images/home5.png';
import home6 from '../components/images/home6.png';
import home7 from '../components/images/home7.png';
import home8 from '../components/images/home8.png';

const Home = () => {
  const homes = [
    {
      id: 1,
      title: "Cozy Apartment in the City Center",
      description: "A beautiful apartment located in the heart of the city. Close to all amenities and attractions.",
      price: "$100 per night",
      imageUrl: home1
    },
    {
      id: 2,
      title: "Luxurious Villa with Ocean View",
      description: "Escape to paradise in this stunning villa overlooking the ocean. Perfect for a relaxing getaway.",
      price: "$500 per day",
      imageUrl: home2
    },
    {
      id: 3,
      title: "Charming Cottage in the Countryside",
      description: "Experience rustic charm in this cozy cottage surrounded by nature. Ideal for a peaceful retreat.",
      price: "$80 per 2 hours",
      imageUrl: home3
    },
    {
      id: 4,
      title: "Modern Loft in the Historic District",
      description: "Live in style in this contemporary loft situated in the heart of the historic district. Close to trendy cafes and shops.",
      price: "$150 per day",
      imageUrl: home4
    },
    {
      id: 5,
      title: "Ski Chalet with Mountain Views",
      description: "Hit the slopes and unwind in this cozy ski chalet with breathtaking mountain views. Ski-in/ski-out access available.",
      price: "$200 per day",
      imageUrl: home5
    },
    {
      id: 6,
      title: "Seaside Bungalow with Private Beach",
      description: "Escape to your own piece of paradise in this charming seaside bungalow with direct access to a private beach.",
      price: "$300 per day",
      imageUrl: home6
    },
    {
        id: 7,
        title: "Mountain Cabin Retreat",
        description: "Enjoy the serenity of the mountains in this cozy cabin retreat. Perfect for nature lovers.",
        price: "$120 per day",
        imageUrl: home7
      },
      {
        id: 8,
        title: "Urban Loft with City Skyline Views",
        description: "Experience city living at its finest in this modern loft with stunning skyline views.",
        price: "$180 per day",
        imageUrl: home8
      },
  ];

  return (
    <Container>
      <Header />
      <Title>Welcome to Our Home Rental Page</Title>
      <HomeList>
        {homes.map(home => (
          <HomeItem key={home.id}>
            <ImageContainer>
              <Image src={home.imageUrl} alt={home.title} />
              <Overlay>
                <OverlayContent>
                  <h3>{home.title}</h3>
                  <p>{home.description}</p>
                  <Price>{home.price}</Price>
                </OverlayContent>
              </Overlay>
            </ImageContainer>
          </HomeItem>
        ))}
      </HomeList>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
  text-align: center;
`;

const HomeList = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr); /* Single column layout */
  gap: 20px;
`;

const HomeItem = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
`;


const Image = styled.img`
  width: 70%; /* Reduce the width by 10% */
  max-width: none; /* Remove the maximum width */
  height: auto; /* Maintain aspect ratio */
  border-radius: 8px;
  position:center;
`;


const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;

  ${ImageContainer}:hover & {
    opacity: 1;
  }
`;

const OverlayContent = styled.div`
  text-align: center;
  color: #fff;
`;

const Price = styled.p`
  margin-top: 10px;
  font-weight: bold;
`;

export default Home;
