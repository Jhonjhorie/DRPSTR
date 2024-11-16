import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, Animated, StyleSheet, useWindowDimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import useMediaQuery from '@/hooks/mediaQueryChecker';
import HeaderMob from './chatMob.android';


const ChatMenu = () => {
    const isMobile = useMediaQuery();
  const [ChatVisible, setChat] = useState(false);
  const [selectChat, setSelect] = useState(null);
  const [minimized, setMinimized] = useState(false);
  const messages = Array.from({ length: 12 }, (_, i) => `Message ${i + 1}`);

  const animate = useRef(new Animated.Value(300)).current;
  const chatAnim = useRef(new Animated.Value(0)).current;

  const { width } = useWindowDimensions();
  
  const toggleChatbox = () => {
    setChat(!ChatVisible);
  };

  const openChat = (message) => {
    if (selectChat !== message) {
      setSelect(message);
      setMinimized(false);
      Animated.timing(animate, {
        toValue: 0,
        duration: 150,
        useNativeDriver: true,
      }).start();
    }
  };

  const closeChat = () => {
    Animated.timing(animate, {
      toValue: 300,
      duration: 150,
      useNativeDriver: true,
    }).start(() => setSelect(null));
  };

  const toggleChat = () => {
    setMinimized(!minimized);
    Animated.timing(chatAnim, {
      toValue: minimized ? 0 : 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  if(isMobile){return <HeaderMob/>}
  else{


  return (
    <View style={styles.container}>
      {/* Chat Icon */}
      <TouchableOpacity onPress={toggleChatbox}>
        <Ionicons name="chatbox-ellipses" size={24} color="black" />
      </TouchableOpacity>

      {/* Chatbox */}
      {ChatVisible && (
        <View style={styles.chatbox}>
          <View style={styles.chatboxHeader}>
            <Text style={styles.headerText}>Messages</Text>
            <TouchableOpacity onPress={toggleChatbox}>
              <Ionicons name="close-outline" size={24} color="black" />
            </TouchableOpacity>
          </View>

          <ScrollView style={styles.scrollView}>
            {messages.slice(0, 10).map((message, index) => (
              <TouchableOpacity key={index} onPress={() => openChat(message)} style={styles.messageItem}>
                <Image
                  source={{ uri: 'https://via.placeholder.com/80' }}
                  style={styles.messageImage}
                />
                <Text style={styles.messageText}>{message}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          {messages.length > 10 && !minimized && (
            <TouchableOpacity style={styles.seeAllButton} onPress={() => {/* Navigate to all messages view */}}>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          )}
        </View>
      )}

      {/* Bottom Message Input Area */}
      {selectChat && (
        <Animated.View
          style={[
            styles.chatInputContainer,
            {
              transform: [
                {
                  translateY: chatAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 200], // Adjust this based on desired behavior
                  }),
                },
              ],
              height: minimized ? 50 : 300, // Adjust height depending on minimized state
            },
          ]}
        >
          <View style={styles.chatInputHeader}>
            <Text style={styles.headerText}>{selectChat}</Text>
            <View style={styles.chatInputActions}>
              <TouchableOpacity onPress={toggleChat}>
                <Ionicons name={minimized ? "chevron-up-outline" : "remove-outline"} size={24} color="black" />
              </TouchableOpacity>
              <TouchableOpacity onPress={closeChat}>
                <Ionicons name="close-outline" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>

          {!minimized && (
            <View style={styles.inputArea}>
              <TextInput
                placeholder="Type a message..."
                style={styles.textInput}
                multiline
              />
              <TouchableOpacity style={styles.sendButton}>
                <Ionicons name="send" size={20} color="white" />
              </TouchableOpacity>
            </View>
          )}
        </Animated.View>
      )}
    </View>
  );
};
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  chatbox: {
    position: 'absolute',
    top: 10,
    right: 0,
    width: 250,
    backgroundColor: 'white',
    shadowColor: 'rgba(0,0,0,0.1)',
    shadowRadius: 4,
    shadowOpacity: 0.3,
    borderRadius: 10,
    zIndex: 50,
  },
  chatboxHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  scrollView: {
    maxHeight: 240,
  },
  messageItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    flexDirection: 'row',
    alignItems: 'center',
  },
  messageImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 8,
  },
  messageText: {
    fontSize: 14,
    marginLeft: 8,
  },
  seeAllButton: {
    padding: 12,
    backgroundColor: '#f1f1f1',
    textAlign: 'center',
  },
  seeAllText: {
    textAlign: 'center',
    color: '#007BFF',
  },
  chatInputContainer: {
    position: 'absolute',
    justifyContent: 'space-between',
    top: 475,
    right: 65,
    width: '80%',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    zIndex: 50,
  },
  chatInputHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  chatInputActions: {
    flexDirection: 'row',
  },
  inputArea: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd',
    padding: 8,
  },
  sendButton: {
    marginLeft: 12,
    padding: 8,
    backgroundColor: '#007BFF',
    borderRadius: 50,
  },
});

export default ChatMenu;
