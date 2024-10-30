// src/pages/Home.js
import React from 'react';

import OfferCard from '../../../components/OfferCard';
import Slider from 'react-slick';

// Sample data for features and offers
const offers = [
  {
    title: 'Product 1',
    description: 'This is a great product that you will love.',
    image: 'https://via.placeholder.com/150', // Replace with your image URL
    price: '$29.99',
  },
  {
    title: 'Product 2',
    description: 'This is another great product for you.',
    image: 'https://via.placeholder.com/150',
    price: '$19.99',
  },
  {
    title: 'Product 3',
    description: 'You can\'t miss this amazing product!',
    image: 'https://via.placeholder.com/150',
    price: '$39.99',
  },
  // Add more products as needed
];

const specialOffer = {
  title: 'Special Offer!',
  description: 'Get an exclusive discount on this amazing product!',
  image: 'https://via.placeholder.com/300', // Replace with your image URL
  price: '$15.99',
};

function Home() {
  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="text-left">

      {/* Flex container for carousel and special offer card */}
      <div className="flex justify-center mb-10 space-x-8"> {/* Add space between elements */}
      
        {/* Carousel */}
        <div className="w-3/4"> {/* Adjust width as needed */}
        <h1 className="text-2xl font-bold mb-8 mt-10">Featured</h1>

          <Slider {...settings}>
            <div>
              <img src="https://via.placeholder.com/600x300" alt="Featured 1" className="w-full h-80 object-cover" />
            </div>
            <div>
              <img src="https://via.placeholder.com/600x300" alt="Featured 2" className="w-full h-80 object-cover" />
            </div>
            <div>
              <img src="https://via.placeholder.com/600x300" alt="Featured 3" className="w-full h-80 object-cover" />
            </div>
            {/* Add more carousel items as needed */}
          </Slider>
        </div>

        {/* Special Offer Card */}
        <div className="w-1/4"> {/* Adjust width as needed */}
        <h1 className="text-2xl font-bold mb-8 mt-10">Offers</h1>

          <OfferCard
            title={specialOffer.title}
            description={specialOffer.description}
            image={specialOffer.image}
            price={specialOffer.price}
          />
        </div>
      </div>

      <h1 className="text-2xl font-bold mb-8 mt-10">Just for you</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {offers.map((offer, index) => (
          <OfferCard
            key={index}
            title={offer.title}
            description={offer.description}
            image={offer.image}
            price={offer.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
