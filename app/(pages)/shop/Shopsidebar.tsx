import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { red } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
import { Ionicons } from '@expo/vector-icons';



const ShopSidebar = () => {
    return (
        <View className="bg-[#2E073F] h-full items-center w-[20%]">
            {/* Add content for the sidebar here */}

            {/* Avatar of Store */}
            <View className="bg-black ring-2 object-fit center ring-violet/50 h-[35%] w-full  ">
            <Image
                className="object-fit"
                style={{ width: '100%', height: '100%' }}
                resizeMode="cover"
                source={require('../../../assets/images/avatarstore.jpg')}
            />

            </View>

            {/* Shop Name */}

            <Text className="text-lg text-white p-2 font-bold"> SNEECKERZ </Text>

            {/* Navbar */}
            <View className=" h-[50%] w-full p-5">
                <Text className="font-semibold text-md text-white duration-200 hover:bg-slate-100 hover:bg-opacity-20 cursor-pointer p-2 rounded-md flex items-center ">
                    <Ionicons name="home" size={20} className="mr-5" /> 
                    HOME
                </Text>

                <Text className="font-semibold text-md text-white duration-200 hover:bg-slate-100 hover:bg-opacity-20 cursor-pointer p-2 rounded-md flex items-center ">
                    <Ionicons name="notifications" size={20} className="mr-5" /> 
                    ORDERS
                </Text>

                <Text className="font-semibold text-md text-white duration-200 hover:bg-slate-100 hover:bg-opacity-20 cursor-pointer p-2 rounded-md flex items-center ">
                    <Ionicons name="pricetag" size={20} className="mr-5" /> 
                    PRODUCTS
                </Text>

                <Text className="font-semibold text-md text-white duration-200 hover:bg-slate-100 hover:bg-opacity-20 cursor-pointer p-2 rounded-md flex items-center ">
                    <Ionicons name="people" size={20} className="mr-5" /> 
                    FOLLOWERS
                </Text>

                <Text className="font-semibold text-md text-white duration-200 hover:bg-slate-100 hover:bg-opacity-20 cursor-pointer p-2 rounded-md flex items-center ">
                    <Ionicons name="settings" size={20} className="mr-5" /> 
                    SETTINGS
                </Text>


            </View>

        </View>
    );
};
   
  
export default ShopSidebar;
  