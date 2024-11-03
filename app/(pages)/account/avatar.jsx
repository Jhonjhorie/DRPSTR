import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";

const CharacterCreationSidebar = () => {
  return (
    <ScrollView className="flex-1 bg-slate-200 p-4">
      <Text className="text-2xl font-bold mb-6 text-gray-800">
        Character Creation
      </Text>

      <View className="flex-row">
        <View>
          {/* Body Orientation */}
          <View className="mb-6">
            <Text className="text-lg font-semibold text-gray-800 mb-2">
              Gender
            </Text>
            <View className="flex-row">
              <TouchableOpacity className="py-2 px-4 bg-indigo-500 rounded-lg mb-2">
                <Text className="text-white">Boy</Text>
              </TouchableOpacity>
              <TouchableOpacity className="py-2 px-4 bg-indigo-500 rounded-lg mb-2 mx-2">
                <Text className="text-white">Girl</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Height Selection */}
          <View className="mb-6">
            <Text className="text-lg font-semibold text-gray-800 mb-2">
              Height
            </Text>
            <View className="flex-row">
              <TouchableOpacity className="py-2 px-4 bg-indigo-500 rounded-lg mb-2">
                <Text className="text-white">Short</Text>
              </TouchableOpacity>
              <TouchableOpacity className="py-2 px-4 bg-indigo-500 rounded-lg mb-2 mx-2">
                <Text className="text-white">Average</Text>
              </TouchableOpacity>
              <TouchableOpacity className="py-2 px-4 bg-indigo-500 rounded-lg mb-2">
                <Text className="text-white">Tall</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Weight Selection */}
          <View className="mb-6">
            <Text className="text-lg font-semibold text-gray-800 mb-2">
              Weight
            </Text>
            <View className="flex-row">
              <TouchableOpacity className="py-2 px-4 bg-indigo-500 rounded-lg mb-2">
                <Text className="text-white">Slim</Text>
              </TouchableOpacity>
              <TouchableOpacity className="py-2 px-4 bg-indigo-500 rounded-lg mb-2 mx-2">
                <Text className="text-white">Average</Text>
              </TouchableOpacity>
              <TouchableOpacity className="py-2 px-4 bg-indigo-500 rounded-lg mb-2">
                <Text className="text-white">Heavy</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Hair Options */}
          <View className="mb-6">
            <Text className="text-lg font-semibold text-gray-800 mb-2">
              Hair
            </Text>{" "}
            <View className="flex-row">
              <TouchableOpacity className="py-2 px-4 bg-indigo-500 rounded-lg mb-2">
                <Text className="text-white">Short</Text>
              </TouchableOpacity>
              <TouchableOpacity className="py-2 px-4 bg-indigo-500 rounded-lg mb-2 mx-2">
                <Text className="text-white">Medium</Text>
              </TouchableOpacity>
              <TouchableOpacity className="py-2 px-4 bg-indigo-500 rounded-lg mb-2">
                <Text className="text-white">Long</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      <View style={styles.container}>
        {/* Local Image */}
        <Image
          source={require("../../../assets/images/boy.png")}
          style={styles.image}
        />
      </View>
      </View>
      <TouchableOpacity className="py-2 w-60  px-4 bg-indigo-500 rounded-lg mb-2">
                <Text className="text-white text-center">Save Avatar</Text>
              </TouchableOpacity>

    </ScrollView>
  );
};

export default CharacterCreationSidebar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
      resizeMode: 'cover',   
      width: 180,
      height: 500,
  },
});
