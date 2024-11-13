import React from 'react';
import { View, Text, StyleSheet, Image,  } from 'react-native';
import { red } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import productshop from '../../app/(pages)/shoppp/productshop';


const ShopSidebar = () => {

    //Routing
    const navigation = useNavigation();
    //@ts-ignore
    const handlePress = (route) => {//@ts-ignore
        navigation.navigate(route);
    };
    
    return (
        <View className="h-full items-center w-[20%] shadow-sm bg-slate-200">
            {/* Add content for the sidebar here */}

            {/* Avatar of Store */}
            <View className="bg-black object-fit center ring-violet/50 h-[24%] w-full  ">
            <Image
                className="object-fit"
                style={{ width: '100%', height: '100%' }}
                resizeMode="cover"
                source={require('../../assets/images/shoplogo.jpg')}
            />

            </View>

            {/* Shop Name */}

            <Text className="text-lg text-slate-950 p-2 font-bold"> SNEECKERZ </Text>

            {/* Navbar */}
            <View className=" h-[55%] w-full p-5">
                <Text 
                onPress={() => handlePress('shoppage')}
                className="font-semibold text-md text-slate-800 duration-200 hover:bg-slate-600 hover:bg-opacity-20 cursor-pointer p-2 rounded-md flex items-center ">
                    <Ionicons name="stats-chart-outline" size={20} className="mr-5" /> 
                    DASHBOARD
                </Text>

                <Text
                onPress={() => handlePress('ordershop')}
                className="font-semibold text-md text-slate-800 duration-200 hover:bg-slate-600 hover:bg-opacity-20 cursor-pointer p-2 rounded-md flex items-center ">
                    <Ionicons name="notifications-outline" size={20} className="mr-5" /> 
                    ORDERS
                </Text>

                <Text 
                onPress={() => handlePress('productshop')}
                className="font-semibold text-md text-slate-800 duration-200 hover:bg-slate-600 hover:bg-opacity-20 cursor-pointer p-2 rounded-md flex items-center ">
                    <Ionicons name="pricetag-outline" size={20} className="mr-5" /> 
                    PRODUCTS
                </Text>

                <Text 
                onPress={() => handlePress('followershop')}
                className="font-semibold text-md text-slate-800 duration-200 hover:bg-slate-600 hover:bg-opacity-20 cursor-pointer p-2 rounded-md flex items-center ">
                    <Ionicons name="people-outline" size={20} className="mr-5" /> 
                    FOLLOWERS
                </Text>

                <Text 
                onPress={() => handlePress('settingshop')}
                className="font-semibold text-md text-slate-800 duration-200 hover:bg-slate-600 hover:bg-opacity-20 cursor-pointer p-2 rounded-md flex items-center ">
                    <Ionicons name="settings-outline" size={20} className="mr-5" /> 
                    SETTINGS
                </Text>

                <View className='w-[86%] bg-slate-700 h-[0.5%] bottom-11 rounded-full align-bottom absolute'></View>    
                <Text 
                onPress={() => handlePress('../account/index')}
                className="font-semibold bottom-0 w-[86%] absolute text-md text-slate-800 duration-200 hover:bg-slate-600 hover:bg-opacity-20 cursor-pointer p-2 rounded-md flex items-center ">
                    <Ionicons name="home-outline" size={20} className="mr-5" /> 
                    BACK TO MAIN
                </Text>
            </View>

        </View>
    );
};
   
  
export default ShopSidebar;
  