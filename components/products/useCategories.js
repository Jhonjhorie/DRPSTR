import { useRef, useState } from 'react';

const useCategoryScroll = (itemsPerScreen, totalItems) => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = totalItems - itemsPerScreen;

  const scrollToIndex = (index) => {
    flatListRef.current.scrollToOffset({ offset: index * 100, animated: true });
    setCurrentIndex(index);
  };

  const handleNext = () => {
    const nextIndex = Math.min(currentIndex + 1, maxIndex);
    scrollToIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = Math.max(currentIndex - 1, 0);
    scrollToIndex(prevIndex);
  };

  return {
    flatListRef,
    currentIndex,
    maxIndex,
    handleNext,
    handlePrev,
  };
};

export default useCategoryScroll;
