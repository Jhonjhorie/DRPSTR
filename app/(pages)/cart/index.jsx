import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CartPage() {
  // Sample data for cart items
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Product 1',
      price: 30.00,
      quantity: 1,
      image: 'https://via.placeholder.com/80',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 45.00,
      quantity: 2,
      image: 'https://via.placeholder.com/80',
    },
  ]);

  // Calculate total price
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  // Function to increase or decrease quantity
  const updateQuantity = (id, amount) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, (item.quantity || 1) + amount) } : item
      )
    );
  };

  // Function to remove item
  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <ScrollView className="flex-1 p-4 bg-gray-100">
      <Text className="text-2xl font-bold mb-4">Your Cart</Text>

      {cartItems.map((item) => (
        <View key={item.id} className="flex-row items-center bg-white p-4 mb-4 rounded-lg" style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
          {/* Product Image */}
          <Image source={{ uri: item.image }} className="w-20 h-20 rounded" />

          {/* Product Info */}
          <View className="flex-1 ml-4">
            <Text className="text-lg font-semibold">{item.name}</Text>
            <Text className="text-gray-600">${item.price.toFixed(2)}</Text>

            {/* Quantity Selector */}
            <View className="flex-row items-center mt-2">
              <TouchableOpacity onPress={() => updateQuantity(item.id, -1)} className="p-2">
                <Ionicons name="remove-circle-outline" size={24} color="gray" />
              </TouchableOpacity>
              <Text className="mx-2 text-lg">{item.quantity}</Text>
              <TouchableOpacity onPress={() => updateQuantity(item.id, 1)} className="p-2">
                <Ionicons name="add-circle-outline" size={24} color="gray" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Remove Button */}
          <TouchableOpacity onPress={() => removeItem(item.id)} className="p-2">
            <Ionicons name="trash-outline" size={24} color="red" />
          </TouchableOpacity>
        </View>
      ))}

      {/* Total Price */}
      <View className="p-4 bg-white rounded-lg" style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <Text className="text-lg font-semibold">Total: ${calculateTotal()}</Text>
      </View>

      {/* Checkout Button */}
      <TouchableOpacity className="bg-purple-700 py-3 rounded-lg items-center">
        <Text className="text-white text-lg font-semibold">Proceed to Checkout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
