// src/hooks/useResponsiveCarousel.js
import { useEffect, useState, useRef } from 'react';
import { Dimensions } from 'react-native';

const getResponsiveCarouselWidth = (width) => {
  if (width >= 1024) return width * 0.6; 
  if (width >= 768) return width * 0.8;  
  return width * 0.9;                    
};

const useCarousel = (images) => {
  const [carouselWidth, setCarouselWidth] = useState(getResponsiveCarouselWidth(Dimensions.get('window').width));
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef(null);

  const updateDimensions = () => {
    const width = Dimensions.get('window').width;
    setCarouselWidth(getResponsiveCarouselWidth(width));
  };

  useEffect(() => {
    // Subscribe to dimension changes
    const subscription = Dimensions.addEventListener('change', updateDimensions);
    return () => subscription?.remove(); // Unsubscribe on cleanup
  }, []);

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.floor(contentOffsetX / carouselWidth);
    setActiveIndex(index);
  };

  const scrollToIndex = (index) => {
    if (flatListRef.current) {
      flatListRef.current.scrollToOffset({ offset: index * carouselWidth, animated: true });
      setActiveIndex(index);
    }
  };

  const handleNext = () => {
    const nextIndex = Math.min(activeIndex + 1, images.length - 1);
    scrollToIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = Math.max(activeIndex - 1, 0);
    scrollToIndex(prevIndex);
  };

  return {
    carouselWidth,
    activeIndex,
    flatListRef,
    handleScroll,
    handleNext,
    handlePrev,
  };
};

export default useCarousel;
