import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, CheckBox, Alert, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CartPage() {
  // Sample data for cart items
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Product 1',
      price: 30.00,
      quantity: 1,
      shopName: 'Shop 1',
      image: 'https://via.placeholder.com/80',
    },
    {
      id: 1.5,
      name: 'Product 2',
      price: 30.00,
      quantity: 1,
      shopName: 'Shop 1',
      image: 'https://via.placeholder.com/80',
    },
    {
      id: 2,
      name: 'Product 3',
      price: 45.00,
      quantity: 2,
      shopName: 'Shop 2',
      image: 'https://via.placeholder.com/80',
    },
    {
      id: 2.1,
      name: 'Product 3.1',
      price: 45.00,
      quantity: 2,
      shopName: 'Shop 2',
      image: 'https://via.placeholder.com/80',
    },
    {
      id: 2.2,
      name: 'Product 3.2',
      price: 45.00,
      quantity: 2,
      shopName: 'Shop 2',
      image: 'https://via.placeholder.com/80',
    },
    {
      id: 3,
      name: 'Product 4',
      price: 45.00,
      quantity: 2,
      shopName: 'Shop 3',
      image: 'https://via.placeholder.com/80',
    },
    {
      id: 4,
      name: 'Product 5',
      price: 45.00,
      quantity: 2,
      shopName: 'Shop 4',
      image: 'https://via.placeholder.com/80',
    },
  ]);

  // State for selected items and modal visibility
  const [selectedItems, setSelectedItems] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);

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

  // Function to calculate the total price of selected items
  const calculateTotal = () => {
    return cartItems
      .filter((item) => selectedItems.includes(item.id))
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  // Handle checkout action and show alert if no items are selected
  const handleCheckout = () => {
    if (selectedItems.length === 0) {
      Alert.alert("Please select a product first.");
      return;
    }
    setModalVisible(true);  // Show modal if items are selected
  };

  return (
    <ScrollView className="flex-1 p-4 bg-gray-100">
      {/* Header */}
      <Text className="text-2xl font-bold mb-4">Your Cart</Text>

      {/* Select All checkbox */}
      <View className='flex-row items-center bg-white p-4 mb-4 rounded-lg shadow'>
        <CheckBox
          value={selectedItems.length === cartItems.length}
          onValueChange={() =>
            setSelectedItems(
              selectedItems.length === cartItems.length
                ? []  // Unselect all if everything is selected
                : cartItems.map((item) => item.id)
            )
          }
        />
        <Text className="text-lg font-semibold ml-2">Select All</Text>
      </View>

      {/* Render grouped items by shop */}
      {groupedItemsArray.map((group) => (
        <View key={group.shopName} className="bg-white p-4 mb-4 rounded-lg shadow">
          <View className="flex-row items-center">
            <CheckBox
              value={selectedItems.filter(id => group.items.some(item => item.id === id)).length === group.items.length}
              onValueChange={() => toggleSelectShopItems(group.shopName)} // Toggle all items in the shop
            />
            <Text className="text-xl font-bold ml-2">{group.shopName}</Text>
          </View>

          {/* Render items within each shop */}
          {group.items.map((item) => (
            <View key={item.id} className="flex-row items-center mt-2">
              <CheckBox
                value={selectedItems.includes(item.id)}  // Check if item is selected
                onValueChange={() => toggleSelectItem(item.id)}  // Toggle individual item selection
              />
              <Image source={{ uri: item.image }} className="w-20 h-20 rounded ml-2" />
              <View className="flex-1 ml-4">
                <Text className="text-lg font-semibold">{item.name}</Text>
                <Text className="text-gray-600">${item.price.toFixed(2)}</Text>
                <Text className="text-gray-600">Quantity: {item.quantity}</Text>
              </View>
            </View>
          ))}
        </View>
      ))}

      {/* Checkout and Total Container */}
      <View className="flex items-end p-4 bg-white rounded-lg shadow mb-4 sticky bottom-0 z-50">
        <Text className="text-lg font-semibold">Total: ${calculateTotal()}</Text>
        <TouchableOpacity onPress={handleCheckout} className="bg-purple-700 rounded-lg p-2 mt-2 w-[7rem] items-center">
          <Text className="text-white text-lg font-semibold">Checkout</Text>
        </TouchableOpacity>
      </View>

      {/* Checkout Modal */}
      <Modal visible={isModalVisible} animationType="slide" transparent={true}>
        <View className="flex-1 justify-center items-center bg-black bg-opacity-50">
          <View className="bg-white p-6 rounded-lg w-[90%]">
            {/* Modal Header with Close Button */}
            <View className="flex-row justify-between items-center mb-4">
              <Text className="text-2xl font-bold">Order Summary</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Ionicons name="close" size={24} color="purple" />
              </TouchableOpacity>
            </View>

            {/* Grouped Order Summary */}
            {groupedItemsArray
              .filter(group => group.items.some(item => selectedItems.includes(item.id)))  // Filter selected items
              .map((group) => (
                <View key={group.shopName} className="mb-4">
                  <Text className="text-xl font-semibold mb-2">{group.shopName}</Text>
                  {group.items
                    .filter((item) => selectedItems.includes(item.id))  // Only show selected items
                    .map((item) => (
                      <View key={item.id} className="flex-row justify-between my-2">
                        <Text>{item.name} (x{item.quantity})</Text>
                        <Text>${(item.price * item.quantity).toFixed(2)}</Text>
                      </View>
                    ))}
                </View>
              ))}

            {/* Total Price */}
            <Text className="text-lg font-semibold mt-4">
              Total Price: ${calculateTotal()}
            </Text>

            {/* Add Order Button */}
            <TouchableOpacity
              onPress={() => {
                // Handle order confirmation here
                Alert.alert("Order added successfully!");  // Simulating order submission
                setModalVisible(false);  // Close modal after order
              }}
              className="bg-green-600 rounded-lg p-2 mt-6 items-center"
            >
              <Text className="text-white text-lg font-semibold">Add Order</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}
