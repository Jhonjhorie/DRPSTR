// src/components/RibbonNavigation.jsx
import React from 'react';
import { View, Text} from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const SideBarNavAnd = ({ mainSideBar = [], innerSidebar = [], activeName }) => {
  // Handle the case where innerSidebar is provided
  if (innerSidebar.length > 0) {
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
            <Link key={index} href={item.path} className="flex gap-4 py-2 rounded-md group">
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
  } else {
    return (
      <View
        style={{ width: '99%', bottom: 80, position: 'absolute' }}
        className="flex flex-row justify-evenly bg-slate-50 p-2 rounded-t-3xl drop-shadow-sm left-0 hover:w-48 duration-300 transition-all overflow-hidden z-30"
      >
        {mainSideBar.map((item, index) => (
          <Link key={index} href={item.path} className="flex gap-4 py-2 rounded-md group">
            <View
              className={`${
                activeName === item.label ? 'bg-primary-color' : 'hidden'
              } absolute left-[-9px] top-0 w-1 h-full z-40 `}
            />
            <Ionicons
              name={item.icon}
              className={`${
                activeName === item.label ? 'color-primary-color' : 'color-secondary-color'
              } group-hover:color-primary-color`}
              size={25}
            />
          </Link>
        ))}
      </View>
    );
  }
};

export default SideBarNavAnd;
