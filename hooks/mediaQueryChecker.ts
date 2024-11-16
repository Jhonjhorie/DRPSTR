import { useEffect, useState } from "react";
import { Dimensions } from "react-native";

const useMediaQuery = () => {
    const [isMobile, setIsMoblie] = useState(true);

    const updateScreen = () => {
        const screenWidth = Dimensions.get('window').width;
        setIsMoblie(screenWidth <= 724);
    };

    useEffect(() => {
        updateScreen();
        const subscription = Dimensions.addEventListener('change', updateScreen);

        return () => {
            subscription.remove();
        }
    },[]);

    return isMobile; 
};

export default useMediaQuery;