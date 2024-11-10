import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';


const RibbonTab = ({ribbonItems, activeTab}) => {
if(ribbonItems)
  return (
    <View className='flex-1  absolute   right-0 z-50'>
        <View 
        className=" flex-row items-start justify-end h-12 hover:h-20 bg-slate-50 duration-300 transition-all rounded-bl-lg">
        {/* Website Name */}
        {ribbonItems.map((item, index) => (
            <Link
            key={index}
            href={item.path}
            className="flex gap-2 py-2 px-8 h-full  group flex-col items-center justify-start bg-slate-50 first:rounded-bl-lg hover:bg-primary-color duration-300 transition-all overflow-hidden"
            >
                <View  className={`${
                    activeTab === item.label ? 'bg-primary-color' : 'hidden'
                } absolute  bottom-0 h-1 w-full z-40 rounded-t-md`}/>
                <Ionicons name={item.icon} size={25} className={`${ activeTab === item.label ? 'color-primary-color' : 'color-secondary-color'} group-hover:color-slate-50 duration-300 transition-all`}></Ionicons>
                <Text className='text-sm text-secondary-color group-hover:text-slate-50  duration-300 transition-all'>{item.label}</Text>
            </Link>     
        ))}
        
        </View>
    </View>
  );
};

export default RibbonTab;
