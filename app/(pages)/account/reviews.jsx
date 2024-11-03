import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Button } from 'react-native-elements';

const Reviews = () => {
  return (
    <ScrollView className="flex-1 bg-slate-200 p-4">
      {/* Header */}
      <Text className="text-2xl font-bold text-gray-800 mb-4">My Reviews</Text>

      {/* To Be Reviewed Section */}
      <View className="mb-6">
        <Text className="text-xl font-semibold text-gray-700">To Be Reviewed</Text>
        <View className="bg-white p-4 mt-2 rounded-md shadow">
          <Text className="text-base text-gray-800">Purchased on</Text>
          <Text className="text-gray-700 mt-2 font-medium">
            HomeAce Aluminum Foil Butyl Waterproof Tape For roof leak Roof Sealant Wall Crack Pandikit Sa Bubong Tape
          </Text>
          <Text className="text-gray-600">Size: wide 10CM * long 5M</Text>
          <Button
            title="Write a Review"
            buttonStyle={styles.buttonStyle}
            titleStyle={styles.buttonTitleStyle}
          />
        </View>
      </View>

      {/* History Section */}
      <View className="mb-6">
        <Text className="text-xl font-semibold text-gray-700">History (7)</Text>

        {/* Review Item 1 */}
        <View className="bg-white p-4 mt-2 rounded-md shadow">
          <Text className="text-base text-gray-800">Purchased on</Text>
          <Text className="mt-2 text-gray-700 font-medium">
            HomeAce Aluminum Foil Butyl Waterproof Tape For roof leak Roof Sealant Wall Crack Pandikit Sa Bubong Tape
          </Text>
          <Text className="text-gray-600">Size: wide 10CM * long 5M</Text>
          <View className="mt-2">
            <Text className="text-gray-800 font-bold">Delightful</Text>
            <Text className="text-gray-700">
              Easy to apply and use, Easy to apply and use, Easy to apply and use, Easy to apply and use, Easy to apply and use...
            </Text>
            <Text className="text-sm text-gray-600">Sold by HomeAce</Text>
          </View>
        </View>

        {/* Review Item 2 */}
        <View className="bg-white p-4 mt-2 rounded-md shadow">
          <Text className="text-base text-gray-800">Purchased on</Text>
          <Text className="mt-2 text-gray-700 font-medium">
            Dell Laptop Charger 19.5V 3.34A 4.5mm Dell Inspiron Series
          </Text>
          <View className="mt-2">
            <Text className="text-gray-800 font-bold">Delightful</Text>
            <Text className="text-gray-700">
              It is good quality, stock that sent to me is new, and it's working totally fine, the seller is very good
            </Text>
            <Text className="text-sm text-gray-600">Sold by SOCUM & CCTV</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: '#4F46E5',
    borderRadius: 8,
    marginTop: 10,
  },
  buttonTitleStyle: {
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Reviews;
