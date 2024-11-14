import React from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import { Link } from 'expo-router';
import { products } from '@/constants/sampleData';
import { Ionicons } from '@expo/vector-icons';
import useResponsiveColumns from './useResponsiveColumn';

const ProductsView = () => {
  const { numColumns, key } = useResponsiveColumns();

  // placeholder para sa stretching haha gusto ipilit flex
  const dataWithPlaceholders = [...products];
  while (dataWithPlaceholders.length % numColumns !== 0) {
    dataWithPlaceholders.push({ empty: true }); // Placeholder item
  }

  return (
    <View style={{ width: '100%' }} className='rounded-lg flex-row flex items-center align-middle'>
      <Text className='absolute left-[-6.8em] top-24 rotate-[270deg] text-lg text-slate-500'>
        Order Now, Drip Later
      </Text>
      <FlatList
        data={dataWithPlaceholders}
        scrollEnabled={false}
        key={key} // Update key to trigger re-render on numColumns change
        keyExtractor={(item, index) => item.prodId || `placeholder-${index}`}
        numColumns={numColumns}
        renderItem={({ item }) =>
          item.empty ? ( // If placeholder, render an invisible View with same styling
            <View
              style={{ flex: 1}}
              className="flex flex-col mx-2 mb-2 p-2 rounded-md "
            />
          ) : (
            <Link
              href="/"
              
              className="flex flex-col mx-2 mb-2 p-2 rounded-md group hover:scale-105 gap-1 bg-slate-50 drop-shadow-sm"
              style={{ flex: 1, alignItems:'center' }}
            >
              {item.str && (
                <Image
                  source={require('@/assets/images/BlackLogo.svg')}
                  className="absolute opacity-50 top-2 left-0"
                  style={{ width: 30, height: 30 }}
                  resizeMode="contain"
                />
              )}
              <View className="absolute flex flex-row right-0 top-2">
                {item.voucher && (
                  <Text className="text-[0.65rem] border-[0.5px] border-primary-color px-0.5 font-thin">
                    SHOP VOUCHER
                  </Text>
                )}
                {item.discount != 0 && (
                  <Text className="text-[0.65rem] border-[0.5px] text-white bg-primary-color border-primary-color px-0.5 font-bold">
                    {item.discount}%
                  </Text>
                )}
              </View>
              <Image
                source={typeof item.url === 'string' ? { uri: item.url } : item.url}
                style={{ width: 180, height: 200 }}
                resizeMode="contain"
              />
              <View style={{ width: '95%' }} className="flex flex-col">
                {item.product && (
                  <Text className="text-secondary-color text-md font-medium text-ellipsis line-clamp-1">
                    {item.product}
                  </Text>
                )}
                <View className="flex flex-row justify-between">
                  {item.price && (
                    <Text className="text-primary-color text-md font-medium">
                      ₱{item.price}
                    </Text>
                  )}
                  <View className="flex flex-row items-center">
                    <Text className="text-primary-color text-md font-thin">
                      {item.rate}{' '}
                    </Text>
                    {item.rate == 5 && (
                      <Ionicons size={13} className="color-primary-color mr-1" name="star" />
                    )}
                    {item.rate < 5 && item.rate != 0 && (
                      <Ionicons size={13} className="color-primary-color mr-1" name="star-half" />
                    )}
                    {item.rate == 0 && (
                      <Ionicons size={13} className="color-primary-color mr-1" name="star-outline" />
                    )}
                    <Text className="text-secondary-color text-md font-thin">
                      | {item.sold} sold
                    </Text>
                  </View>
                </View>
              </View>
            </Link>
          )
        }
        contentContainerStyle={{ paddingHorizontal: 10 }}
      />
    </View>
  );
};

export default ProductsView;
