import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, CheckBox } from 'react-native';
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

  // State to manage selected items
  const [selectedItems, setSelectedItems] = useState([]);

  // Group items by shopName
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

  const groupedItemsArray = Object.values(groupedItems);

  // Toggle checkbox selection for individual items
  const toggleSelectItem = (id) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((itemId) => itemId !== id)
        : [...prevSelected, id]
    );
  };

  // Toggle checkbox selection for all items in a shop
  const toggleSelectShopItems = (shopName) => {
    const shopItems = groupedItems[shopName].items.map(item => item.id);
    const isSelected = selectedItems.filter(id => shopItems.includes(id)).length === shopItems.length;

    if (isSelected) {
      // Unselect if all were selected
      setSelectedItems(prevSelected => prevSelected.filter(itemId => !shopItems.includes(itemId)));
    } else {
      // Select all items of that shop
      setSelectedItems(prevSelected => [...new Set([...prevSelected, ...shopItems])]);
    }
  };

  // Calculate total price of selected items
  const calculateTotal = () => {
    return cartItems
      .filter((item) => selectedItems.includes(item.id))
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
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

 
      {/* Select All Checkbox */}
      <View className='flex-row items-center bg-white p-4 mb-4 rounded-lg shadow'>
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
      </View>

      {/* Render grouped items */}
      {groupedItemsArray.map((group) => (
        <View key={group.shopName} className="bg-white p-4 mb-4 rounded-lg shadow">
          <View className="flex-row items-center">
            <CheckBox
              value={selectedItems.filter(id => group.items.some(item => item.id === id)).length === group.items.length}
              onValueChange={() => toggleSelectShopItems(group.shopName)}
            />
            <Text className="text-xl font-bold ml-2">{group.shopName}</Text>
          </View>
 

          {group.items.map((item) => (
            <View key={item.id} className="flex-row items-center mt-2">
              {/* Checkbox */}
              <CheckBox
                value={selectedItems.includes(item.id)}
                onValueChange={() => toggleSelectItem(item.id)}
              />

              {/* Product Image */}
              <Image source={{ uri: item.image }} className="w-20 h-20 rounded ml-2" />

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
          <Text className="mt-2 font-semibold">
            Total Quantity: {group.totalQuantity} | Total Price: ${group.totalPrice.toFixed(2)}
          </Text>
        </View>
      ))}

       <View className="flex flex-col place-items-end sticky z-100 bottom-0 p-4 bg-white rounded-lg shadow mb-4">
        {/* Total Price */}
        <View className="">
          <Text className="text-lg font-semibold">Total: ${calculateTotal()}</Text>
        </View>
        {/* Checkout Button */}
        <TouchableOpacity className="bg-purple-700 rounded-lg p-2 items-center w-[7rem]">
          <Text className="text-white text-lg font-semibold">Checkout</Text>
        </TouchableOpacity>
 
      </View>
    </ScrollView>
  );
}
