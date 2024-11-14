import { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';

const useMediaQueryChecker = () => {
  const [isMobile, setIsMobile] = useState(true);

  const updateScreen = () => {
    const screenWidth = Dimensions.get('window').width;
    setIsMobile(screenWidth <= 724); // Mobile if width <= 724, otherwise desktop
  };

  useEffect(() => {
    updateScreen();
    const subscription = Dimensions.addEventListener('change', updateScreen);

    return () => {
      subscription.remove(); // Correctly remove the listener
    };
  }, []);

  return isMobile; // Return whether it's mobile or not
};

export default useMediaQueryChecker;
