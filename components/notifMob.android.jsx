import React, { useState } from 'react';
import { View, Text, Modal, Image, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const NotifMob = ({ innerSidebar, activeName }) => {
  const [modalVisible, setModal] = useState(false);

  const mainSideBar = [
    { label: "Mall", path: '/(pages)/mall', icon: 'storefront' },
    { label: "Notification", path: '/notifications', icon: 'notifications' },
    { label: "Account", path: '/(pages)/account', icon: 'person' },
  ];

  const notifPress = (item, event) => {
    if (item.label === "Notification") {
      event.preventDefault();
      setModal(true);
    }
  };

  if (innerSidebar) {
    return (
      <View className="z-30 flex flex-row justify-start w-16 rounded-md sticky left-2 mt-[25vh]">
        <Link
          href={'/'}
          className="group items-center flex h-full pl-1 bg-secondary-color px-2 hover:bg-primary-color hover:px-3 w-16 rounded-md duration-300 transition-all"
        >
          <Ionicons
            name="home"
            className="color-slate-50 group-hover:color-black duration-300 transition-all"
            size={20}
          />
        </Link>
        <View className="flex flex-column justify-center bg-slate-50 p-2 rounded-md w-9 drop-shadow-sm left-[-4px] hover:w-48 duration-300 transition-all overflow-hidden">
          {innerSidebar.map((item, index) => (
            <Link
              key={index}
              href={item.label !== "Notification" ? item.path : '/notifications'}
              onPress={(event) => notifPress(item, event)}
              className="flex gap-4 py-2 rounded-md group"
            >
              <View
                className={`${
                  activeName === item.label ? 'bg-primary-color' : 'hidden'
                } absolute left-[-9px] top-0 w-1 h-full z-40 rounded-r-md`}
              />
              <Ionicons
                name={item.icon}
                className={`${
                  activeName === item.label ? 'color-primary-color' : 'color-slate-500'
                } group-hover:color-primary-color`}
                size={20}
              />
              <Text
                className={`${
                  activeName === item.label ? 'text-primary-color font-bold' : 'text-slate-500'
                } text-sm font-semibold group-hover:text-primary-color group-hover:font-bold whitespace-nowrap overflow-hidden`}
              >
                {item.label}
              </Text>
            </Link>
          ))}
        </View>
      </View>
    );
  }
  else {
    return (
      <View className="flex flex-column justify-center bg-slate-50 p-2 rounded-md w-9 sticky z-10 drop-shadow-sm mt-[25vh] left-2 hover:w-48 duration-300 transition-all overflow-hidden z-30">
        {mainSideBar.map((item, index) => (
          <Link
            key={index}
            href={item.label !== "Notification" ? item.path : '/notifications'} // Use a placeholder href for Notification
            onPress={(event) => notifPress(item, event)} // Call handleNotifPress only for Notification
            className="flex gap-4 py-2 rounded-md group"
          >
            <View
              className={`${
                activeName === item.label ? 'bg-primary-color' : 'hidden'
              } absolute left-[-9px] top-0 w-1 h-full z-40`}
            />
            <Ionicons
              name={item.icon}
              className={`${
                activeName === item.label ? 'color-primary-color' : 'color-slate-500'
              } group-hover:color-primary-color`}
              size={20}
            />
            <Text
              className={`${
                activeName === item.label ? 'text-primary-color font-bold' : 'text-slate-500'
              } text-sm font-semibold group-hover:text-primary-color group-hover:font-bold`}
            >
              {item.label}
            </Text>
          </Link>
        ))}

        {/* Notification Modal */}
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModal(false)}
        >
          <View className="flex-1 justify-center items-center bg-black bg-opacity-50 z-50">
            <View className="w-11/12 bg-white rounded-lg p-4">
              <View className="flex-row justify-between items-center mb-4">
                <Text className="text-2xl font-bold">Notifications</Text>
                <TouchableOpacity onPress={() => setModal(false)}>
                <Ionicons name="close-outline" size={30} className="color-black hover:color-[--primary-color]" />
              </TouchableOpacity>
              </View>

              <View className="space-y-4">
                <TouchableOpacity>
                  <View className="flex-row items-center bg-gray-100 p-4 rounded-lg shadow hover:bg-slate-200">
                    <Image
                      source={{ uri: './assets/images/home/blackTshirt.png' }}
                      className="w-20 h-20 bg-slate-300 rounded"
                    />
                    <View className="ml-4">
                      <Text className="text-lg font-semibold">Viscount Blank 50% OFF </Text>
                      <Text className="text-gray-600">Limited Time Only!</Text>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View className="flex-row items-center bg-gray-100 p-4 rounded-lg shadow hover:bg-slate-200">
                    <Image
                      source={{ uri: 'https://via.placeholder.com/80' }}
                      className="w-20 h-20 rounded"
                    />
                    <View className="ml-4">
                      <Text className="text-lg font-semibold">Buy 1 Get 1 Free</Text>
                      <Text className="text-gray-600">50% Cashback!</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
};

export default NotifMob;
