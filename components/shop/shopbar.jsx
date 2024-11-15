import { Ionicons } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import { Animated, Text, TouchableOpacity, View,
   Dimensions, Image, StyleSheet, Platform, subscription,
  
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ShopBar = () => {
  const [expanded, setExpanded] = useState(false);
  const [widthAnim] = useState(new Animated.Value(50));
  const [opacityAnim] = useState(new Animated.Value(0));
  const [isMobile, setIsMobile] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [translateXAnim] = useState(new Animated.Value(-200));

  // check screen size web or mobile view
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = Dimensions.get('window').width;
      setIsMobile(screenWidth < 768);
    };
    handleResize();
    Dimensions.addEventListener('change', handleResize);
    return () => {
      //subscription?.remove(); 
      Dimensions.removeEventListener('change', handleResize);
    };
  }, []);

  // MouseEnter hover the whole sidebar body
  const handleMouseEnter = () => {
    if (!isMobile) {
      Animated.timing(widthAnim, {  
        toValue: 200,
        duration: 300,
        useNativeDriver: false,
      }).start();  
      Animated.parallel([
        Animated.timing(translateXAnim, {
          toValue: 0,  
          duration: 300,
          useNativeDriver: false,   
        }),
        Animated.timing(opacityAnim, {
          toValue: 1,  
          duration: 300,
          useNativeDriver: false,
        }),
      ]).start();
  
      setExpanded(true);
    }

  };

  // MouseLeave close the whole sidebar body after .5s
  const handleMouseLeave = () => {
    if (!isMobile && expanded) {
      setTimeout(() => {
        Animated.timing(widthAnim, {
          toValue: 50,
          duration: 300,
          useNativeDriver: false,
        }).start();
        Animated.parallel([
          Animated.timing(translateXAnim, {
            toValue: -200,  
            duration: 300,
            useNativeDriver: false,
          }),
          Animated.timing(opacityAnim, {
            toValue: 0,  
            duration: 300,
            useNativeDriver: false,
          }),
        ]).start();
        setExpanded(false); //ito .5s
      }, 500);
    }
  };

  // Toggle sidebar visibility on mobile
  const toggleSidebarVisibility = () => {
    setShowSidebar(!showSidebar);
    setExpanded(!showSidebar);
    Animated.timing(widthAnim, {
      toValue: !showSidebar ? 200 : 50,
      duration: 300,
      useNativeDriver: false,
    }).start();
    Animated.parallel([
      Animated.timing(translateXAnim, {
        toValue: !showSidebar ? 0 : -100, 
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(opacityAnim, {
        toValue: !showSidebar ? 1 : 0, 
        duration: 300,
        useNativeDriver: false,
      }),
    ]).start();
  };

  // Render the sidebar toggle button on mobile only
  if (isMobile && !showSidebar) {
    return (
      <TouchableOpacity onPress={toggleSidebarVisibility} style={{ position: 'absolute', top: 20, left: 20 }}>
        <Ionicons name="menu" className='bg-slate-100 rounded-sm' color="#4E31AA" size={30} />
      </TouchableOpacity>
    );
  }
  //Navigation pages
  const navigation = useNavigation();


  return (
    <View
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ height: '100%', width: '100%' }}
      className='sticky'
    >
      <Animated.View
        style={{
          backgroundColor: '#f1f5f9',
          height: '100%',
          width: widthAnim,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
         <View   style={styles.parentview} className='w-full h-40 absolute  md:mt-0 top-16 md:top-2'>
          <View className='w-full '>
            {expanded ? (
              <Animated.View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Animated.Image
                  source={require('../../assets/images/logosaintshop.jpg')}
                  resizeMode="cover"
                  style={{
                    opacity: opacityAnim,  
                    transform: [{ translateX: translateXAnim }],  
                    height: 150,
                    width: 190,
                    backgroundColor: '#000',
                    borderRadius: 3,
                    shadowColor: '#000',
                    shadowRadius: 5, 
                    shadowOpacity: 1,
                    shadowOffset: { width: 2, height: 2 },
                    elevation: 5, 
                  }}
                />
              </Animated.View>
            ): (
            <Animated.View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Animated.Image
                  source={require('../../assets/images/blackLogo.png')}
                  resizeMode="cover"
                  style={styles.imageshrink}
                />
            </Animated.View>
            )}
          </View>
        </View>
        {/* Close button for mobile sidebar */}
        {isMobile && showSidebar && (
          <TouchableOpacity onPress={toggleSidebarVisibility} style={{ position: 'absolute', top: 20, left: 20 }}>
            <Ionicons name="close" className='bg-slate-300 rounded-sm' color="#4E31AA" size={30} />
          </TouchableOpacity>
        )}

       

        {/* Sidebar items */}
        <View style={{ width: '90%', marginTop: -70 }}>
          {/* List of sidebar items */}
          {[
           { icon: 'stats-chart', label: 'Dashboard', screen: 'shopdashboard' },
           { icon: 'notifications', label: 'Notification', screen: 'notifications' },
           { icon: 'pricetag', label: 'Products', screen: 'products' },
           { icon: 'people', label: 'Followers', screen: 'followers' },
           { icon: 'settings', label: 'Settings', screen: 'settings' },
          ].map((item, index) => (
            <TouchableOpacity 
            key={index} 
            onPress={() => navigation.navigate(item.screen)}
            style={{ marginBottom: 5 }}
            className='hover:bg-[#cec4ce] rounded-sm '
            >
              <View

                style={{
                width: expanded ? '90%' : 'auto',
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 8,
                paddingVertical: 4,
                borderRadius: 5,
                backgroundColor: expanded ? 'transparent' : 'transparent',
              }}>
                <Ionicons name={item.icon} color="#4E31AA" size={25} />
                  {expanded && (
                    <Animated.Text
                      style={{
                        marginLeft: 10,
                        fontSize: 16,
                        color: '#4E31AA',
                        transform: [{ translateX: translateXAnim }],  
                      }}
                    >
                      {item.label}
                    </Animated.Text>
                  )}
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <View className='w-full px-1 h-2 m-2 absolute bottom-[25%]'>
          <View className='w-full h-0.5 bg-slate-300'></View>
        </View>

        <View style={{ width: '90%', marginTop: 10 }}
        className='absolute bottom-28 '
        >
          {/* List of sidebar items */}
          {[
            { icon: 'home', label: 'Home' },
            { icon: 'arrow-redo', label: 'Logout' },
          ].map((item, index) => (
            <TouchableOpacity key={index} style={{ marginBottom: 5 }}
            className='hover:bg-[#cec4ce] rounded-sm '
            >
              <View
                className=''
                style={{
                width: expanded ? '90%' : 'auto',
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 8,
                paddingVertical: 4,
                borderRadius: 5,
                backgroundColor: expanded ? 'transparent' : 'transparent',
              }}>
                <Ionicons name={item.icon} color="#4E31AA" size={25} />
                  {expanded && (
                    <Animated.Text
                      style={{
                        marginLeft: 10,
                        fontSize: 16,
                        color: '#4E31AA',
                        transform: [{ translateX: translateXAnim }],  
                      }}
                    >
                      {item.label}
                    </Animated.Text>
                  )}
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </Animated.View>
    </View>
  );
};
const styles = StyleSheet.create({
  imageshrink: {
    marginTop: 50,
    height: 35,
    width: 35,
    alignItems: 'center',
    justifyContent: 'center' 
  },
  parentview: {
    marginTop: Platform.select({
      android: 75, 
    }),
  }
})
export default ShopBar;
