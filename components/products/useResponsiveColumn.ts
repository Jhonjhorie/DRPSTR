// src/hooks/useResponsiveColumns.js
import { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';

const useResponsiveColumns = () => {
  const [numColumns, setNumColumns] = useState(2);
  const [key, setKey] = useState('grid-2'); // Initial key based on default numColumns

  const updateColumns = () => {
    const screenWidth = Dimensions.get('window').width;
    let columns = 2; // mobile default
    if (screenWidth > 1024) {
      columns = 6; // desktop
    } else if (screenWidth > 768) {
      columns = 4; // tablet
    }
    setNumColumns(columns);
    setKey(`grid-${columns}`);
  };

  useEffect(() => {
    updateColumns();
    const subscription = Dimensions.addEventListener('change', updateColumns);
    return () => subscription.remove();
  }, []);

  return { numColumns, key };
};

export default useResponsiveColumns;
