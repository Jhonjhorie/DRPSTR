import React from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import { Link } from 'expo-router';

const OrderCard = ({ orders  }) => {
const sorted = orders.slice(0, 2);

  return (
    <View className='overflow-hidden'
    style={{ width: '63%' , height:'77%',}}
        >
      <FlatList
        data={sorted}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Link href='/' 
          className='flex flex-row bg-gray-200 rounded-r-md group mt-2 py-1 px-2' style={{ width: '100%', height: '100%' }}>
            <Image
              source={typeof item.url === 'string' ? { uri: item.url } : item.url}
              className='bg-slate-50 rounded-lg'
              style={{ width: 80, height: 80 }}
              resizeMode="contain"
            />
            <View className='ml-2 p-1'>
              <Text className='text-secondary-color text-xl'>{item.product}</Text>
              <Text className='text-secondary-color'>{item.shop}</Text>
              <Text className='text-primary-color font-bold'>TO RECEIVE</Text>
            </View>
          </Link>
        )}
   
        ListEmptyComponent={<Text>No orders available</Text>} 
      />
    </View>
  );
};

export default OrderCard;
