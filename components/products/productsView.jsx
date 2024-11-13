import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, Image, Text, View } from 'react-native';
import { Link } from 'expo-router';
import { products } from './sampledata';
import { Ionicons } from '@expo/vector-icons';

const ProductsView = () => {
  const [numColumns, setNumColumns] = useState(2); 
  const [key, setKey] = useState('grid-2'); // Initial key based on default numColumns

  const updateColumns = () => {
    const screenWidth = Dimensions.get('window').width;
    let columns = 2; // mobile
    if (screenWidth > 1024) {
      columns = 6; // Desktop
    } else if (screenWidth > 768) {
      columns = 4; // Tablet
    }
    setNumColumns(columns);
    setKey(`grid-${columns}`);
  };

  useEffect(() => {
    updateColumns();
    Dimensions.addEventListener('change', updateColumns);
    return () => {
      Dimensions.removeEventListener('change', updateColumns);
    };
  }, []);

  // Add placeholders for the last row to avoid stretching
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
          item.empty ? ( // If placeholder, render an invisible View
            <View style={{ flex: 1, margin: 1 }} />
          ) : (
            <Link
              href='/'
              className='flex flex-col mx-2 mb-2 p-2 rounded-md group  hover:scale-105 gap-1 bg-slate-50 drop-shadow-sm'
              style={{ alignItems: 'center', flex: 1 }}
            >
              {item.str && <Image source={require('@/assets/images/BlackLogo.svg')}
               className='absolute opacity-50 top-2 left-0'
               style={{ width: 30, height: 30 }}
               resizeMode="contain"
              />}
              <View className='absolute flex flex-row right-0 top-2'>
                {item.voucher && 
                <Text className='text-[0.65rem] border-[0.5px] border-primary-color px-0.5 font-thin'>SHOP VOUCHER</Text>
                }
                {(item.discount != 0) && 
                <Text className='text-[0.65rem] border-[0.5px] text-white bg-primary-color border-primary-color px-0.5 font-bold'>{item.discount}%</Text>
                }
              </View>
              <Image
                source={typeof item.url === 'string' ? { uri: item.url } : item.url}
                className=''
                style={{ width: 180, height: 200 }}
                resizeMode="contain"
              />
              <View style={{ width: '95%'}}  className='flex flex-col'>
              {item.product && <Text className='text-secondary-color text-md font-medium text-ellipsis line-clamp-1'>
                {item.product}</Text>}
              <View className='flex flex-row justify-between'>
              {item.price && <Text className='text-primary-color text-md font-medium'>
                ₱{item.price}</Text>}
                <View className='flex flex-row items-center'>

                <Text className='text-primary-color text-md font-thin'>
                  {item.rate} </Text>
                {(item.rate == 5) && <Ionicons size={13} className='color-primary-color mr-1' name='star'/>}
                {(item.rate < 5 && item.rate != 0) && <Ionicons size={13} className='color-primary-color mr-1' name='star-half'/>}
                {(item.rate == 0) && <Ionicons size={13} className='color-primary-color mr-1' name='star-outline'/>}
                <Text className='text-secondary-color text-md font-thin'>
                | {item.sold} sold</Text>
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
