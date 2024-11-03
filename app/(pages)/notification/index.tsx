import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';


const notification = () => {
  return (
    <ScrollView className="flex-1 p-4 bg-slate-200 ml-12" >
      <Text className="text-2xl font-bold mb-4">Notifations</Text>
      
      {/* Notif Messages */}
      <View className="flex-row items-center bg-white p-4 mb-4 rounded-lg shadow">

        {/* notif Image */}
        <Image source={{ uri: 'https://via.placeholder.com/80' }}  className="w-20 h-20 rounded" />
            <View className="flex-1 ml-4">
                <Text className="text-lg font-semibold">Notif 1</Text>
                <Text className="text-gray-600">Safe from 50 pesos</Text>
            </View>         
      </View>  

      {/* Notif Messages */}
      <View className="flex-row items-center bg-white p-4 mb-4 rounded-lg shadow">

        {/* notif Image */}
        <Image source={{ uri: 'https://via.placeholder.com/80' }}  className="w-20 h-20 rounded" />
            <View className="flex-1 ml-4">
                <Text className="text-lg font-semibold">Notif 2</Text>
                <Text className="text-gray-600">Safe from 50 pesos</Text>
            </View>         
      </View>  

      {/* Notif Messages */}
      <View className="flex-row items-center bg-white p-4 mb-4 rounded-lg shadow">

        {/* notif Image */}
        <Image source={{ uri: 'https://via.placeholder.com/80' }}  className="w-20 h-20 rounded" />
            <View className="flex-1 ml-4">
                <Text className="text-lg font-semibold">Notif 3</Text>
                <Text className="text-gray-600">Safe from 50 pesos</Text>
            </View>         
      </View>
    </ScrollView>
 
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
},

  });
  
export default notification;