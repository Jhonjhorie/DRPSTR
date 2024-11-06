import React, { useState } from 'react';
import { FlatList, Image, Text, View, Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window'); // Get screen width to set the image width

type CarouselProps = {
  images: { caption: string; url: string | number }[]; // URL could be either string (remote) or number (local)
};

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleScroll = (event: any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.floor(contentOffsetX / width); // Calculate index based on scroll position
    setActiveIndex(index);
  };

  return (
    <View className="relative w-52 h-64 bg-slate-900"> {/* Carousel container */}
      <FlatList
        data={images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        onScroll={handleScroll}
        renderItem={({ item, index }) => (
          <View className="relative" style={[{ width }]}>
            {/* Check if URL is local or remote */}
            <Image source={typeof item.url === 'string' ? { uri: item.url } : item.url} className="w-full h-full object-cover" />
            {item.caption && (
              <Text className="absolute bottom-4 left-4 text-white text-xl font-semibold">
                {item.caption}
              </Text>
            )}
          </View>
        )}
      />
      {/* Pagination Dots */}
      <View className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-row">
        {images.map((_, index) => (
          <View
            key={index}
            className={`w-2.5 h-2.5 mx-1 rounded-full bg-white opacity-50 ${
              activeIndex === index ? 'opacity-100' : ''
            }`}
          />
        ))}
      </View>
    </View>
  );
};

export default Carousel;