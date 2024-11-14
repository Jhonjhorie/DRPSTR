import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, CheckBox, Alert, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CartPage() {
  // Sample data for cart items
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Product 1',
      price: 30.0,
      quantity: 1,
      shopName: 'Shop 1',
      image: 'https://via.placeholder.com/80',
    },
    {
      id: 1.5,
      name: 'Product 2',
      price: 30.0,
      quantity: 1,
      shopName: 'Shop 1',
      image: 'https://via.placeholder.com/80',
    },
    {
      id: 2,
      name: 'Product 3',
      price: 45.0,
      quantity: 2,
      shopName: 'Shop 2',
      image: 'https://via.placeholder.com/80',
    },
    {
      id: 2.1,
      name: 'Product 3.1',
      price: 45.0,
      quantity: 2,
      shopName: 'Shop 2',
      image: 'https://via.placeholder.com/80',
    },
    {
      id: 2.2,
      name: 'Product 3.2',
      price: 45.0,
      quantity: 2,
      shopName: 'Shop 2',
      image: 'https://via.placeholder.com/80',
    },
    {
      id: 3,
      name: 'Product 4',
      price: 45.0,
      quantity: 2,
      shopName: 'Shop 3',
      image: 'https://via.placeholder.com/80',
    },
    {
      id: 4,
      name: 'Product 5',
      price: 45.0,
      quantity: 2,
      shopName: 'Shop 4',
      image: 'https://via.placeholder.com/80',
    },
  ]);

  const [selectedItems, setSelectedItems] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isSuccessVisible, setSuccessVisible] = useState(false); // State for success container


  // Group cart items by shop and calculate total quantity and price
  const groupedItems = cartItems.reduce((acc, item) => {
    const key = item.shopName;
    if (!acc[key]) {
      acc[key] = {
        shopName: key,
        items: [],
        totalQuantity: 0,
        totalPrice: 0,
      };
    }
    acc[key].items.push(item);
    acc[key].totalQuantity += item.quantity;
    acc[key].totalPrice += item.price * item.quantity;
    return acc;
  }, {});

  // Convert groupedItems object to an array for easier rendering
  const groupedItemsArray = Object.values(groupedItems);

  // Function to toggle selection of individual cart items
  const toggleSelectItem = (id) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((itemId) => itemId !== id)
        : [...prevSelected, id]
    );
  };

   // Function to toggle selection of all items in a specific shop
  const toggleSelectShopItems = (shopName) => {
    const itemsInShop = cartItems.filter((item) => item.shopName === shopName);
    const allSelected = itemsInShop.every((item) => selectedItems.includes(item.id));
    if (allSelected) {
      setSelectedItems((prevSelected) =>
        prevSelected.filter((itemId) => !itemsInShop.some((item) => item.id === itemId))
      );
    } else {
      setSelectedItems((prevSelected) => [
        ...prevSelected,
        ...itemsInShop.map((item) => item.id),
      ]);
    }
  };

  // Function to calculate total price
  const calculateTotal = () => {
    return cartItems
      .filter((item) => selectedItems.includes(item.id))
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  // Function to delete a product
  const handleDeleteProduct = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
    setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
  };

  // Function to delete a shop
  const handleDeleteShop = (shopName) => {
    setCartItems(cartItems.filter((item) => item.shopName !== shopName));
    setSelectedItems(
      selectedItems.filter((id) => !cartItems.some((item) => item.id === id && item.shopName === shopName))
    );
  };

  //DeleteAll Function
  const handleDeleteAll = () => {
    setCartItems([]);
    setSelectedItems([]);
  };

  //Checkout Function
  const handleCheckout = () => {
    if (selectedItems.length === 0) {
      Alert.alert('Please select a product first.');
      return;
    }
    setModalVisible(true);
  };


  //Order Added Successfully Function
  const handleConfirmOrder = () => {
    setModalVisible(false);
    setSuccessVisible(true); // Show success container
    setTimeout(() => setSuccessVisible(false), 1500); // Hide after 1.5 seconds
  };

  return (
    <ScrollView className="flex-1 p-4 bg-gray-100">
      <Text className="text-2xl font-bold mb-4">Your Cart</Text>

      {isSuccessVisible && ( // Success container
        <View className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg items-center z-50">
          <Ionicons name="checkmark-circle" size={64} color="green" />
          <Text className="text-lg font-semibold mt-2">Order added successfully!</Text>
        </View>
      )}

      <View className="flex-row items-center bg-white p-4 mb-4 rounded-lg shadow">
        <CheckBox
          value={selectedItems.length === cartItems.length}
          onValueChange={() =>
            setSelectedItems(
              selectedItems.length === cartItems.length
                ? []  
                : cartItems.map((item) => item.id)
            )
          }
        />
        <Text className="text-lg font-semibold ml-2">Select All</Text>
        <TouchableOpacity onPress={handleDeleteAll} className="ml-auto">
          <Ionicons name="trash-outline" size={24} color="red" />
        </TouchableOpacity>
      </View>

      {groupedItemsArray.map((group) => (
        <View key={group.shopName} className="bg-white p-4 mb-4 rounded-lg shadow">
          <View className="flex-row items-center">
            <CheckBox
              value={selectedItems.filter((id) => group.items.some((item) => item.id === id)).length === group.items.length}
              onValueChange={() => toggleSelectShopItems(group.shopName)}
            />
            <Text className="text-xl font-bold ml-2">{group.shopName}</Text>
            <TouchableOpacity onPress={() => handleDeleteShop(group.shopName)} className="ml-auto">
              <Ionicons name="trash-outline" size={24} color="red" />
            </TouchableOpacity>
          </View>
          {group.items.map((item) => (
            <View key={item.id} className="flex-row items-center mt-2">
              <CheckBox
                value={selectedItems.includes(item.id)}
                onValueChange={() => toggleSelectItem(item.id)}
              />
              <Image source={{ uri: item.image }} className="w-20 h-20 rounded ml-2" />
              <View className="flex-1 ml-4">
                <Text className="text-lg font-semibold">{item.name}</Text>
                <Text className="text-gray-600">${item.price.toFixed(2)}</Text>
                <Text className="text-gray-600">Quantity: {item.quantity}</Text>
              </View>
              <TouchableOpacity onPress={() => handleDeleteProduct(item.id)} className="ml-2">
                <Ionicons name="trash-outline" size={24} color="red" />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      ))}

      <View className="flex items-end p-4 bg-white rounded-lg shadow mb-4 sticky bottom-0 z-50">
        <Text className="text-lg font-semibold">Total: ${calculateTotal()}</Text>
        <TouchableOpacity onPress={handleCheckout} className="bg-purple-700 rounded-lg p-2 mt-2 w-[7rem] items-center">
          <Text className="text-white text-lg font-semibold">Checkout</Text>
        </TouchableOpacity>
      </View>

      <Modal visible={isModalVisible} animationType="slide" transparent={true}>
        <View className="flex-1 justify-center items-center bg-black bg-opacity-50">
          <View className="bg-white p-6 rounded-lg w-[90%]">
            <View className="flex-row justify-between items-center mb-4">
              <Text className="text-2xl font-bold">Order Summary</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Ionicons name="close" size={24} color="purple" />
              </TouchableOpacity>
            </View>
            {cartItems
              .filter((item) => selectedItems.includes(item.id))
              .map((item) => (
                <View key={item.id} className="flex-row justify-between items-center">
                  <Text className="text-lg">{item.name}</Text>
                  <Text className="text-lg">${(item.price * item.quantity).toFixed(2)}</Text>
                </View>
              ))}
            <View className="mt-4">
              <Text className="text-xl font-semibold">
                Total: ${calculateTotal()}
              </Text>
            </View>
            <TouchableOpacity
              onPress={handleConfirmOrder}
              className="bg-purple-700 rounded-lg p-2 mt-4"
            >
              <Text className="text-white text-lg font-semibold text-center">Confirm Order</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}
