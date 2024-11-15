import React from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import { Link } from 'expo-router';

const OrderCardAnd = ({ orders  }) => {
const sorted = orders.slice(0, 1);

  return (
    <View className='overflow-hidden'
    style={{ width: '65%' , height:'100%',}}
        >
      <FlatList
        scrollEnabled={false}
        data={sorted}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Link href='/' 
          className='flex flex-row bg-gray-200 rounded-md group mt-4 py-1' style={{ width: '100%', height: '100%' }}>
            <View className='ml-2 p-1'>
              <Text className='text-secondary-color text-md text-ellipsis line-clamp-1'>{item.product}</Text>
              <Text className='text-primary-color text-sm font-bold'>TO RECEIVE</Text>
            </View>
          </Link>
        )}
   
        ListEmptyComponent={<Text>No orders available</Text>} 
      />
    </View>
  );
};

export default OrderCardAnd;
