import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

const HeaderMob = () => {
  const [chatVisible, setChatVisible] = useState(false);
  const [messages, setMessages] = useState(Array.from({ length: 10 }, (_, i) => `Message ${i + 1}`));
  const [newMessage, setNewMessage] = useState('');
  const [selectedChat, setSelectedChat] = useState(null); // Track selected chat

  const toggleChatbox = () => {
    setChatVisible(!chatVisible);
  };

  const closeChat = () => {
    setSelectedChat(null); // Close the chat and reset selected chat
    setChatVisible(false);
  };

  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, newMessage]);
      setNewMessage('');
    }
  };

  const handleMessageSelect = (message) => {
    setSelectedChat(message); // Set selected chat when a message is clicked
  };

  if (selectedChat) {
    return (
      <View style={{ flex: 1, justifyContent: 'space-between', backgroundColor: '#fff', paddingTop: 16, zIndex: 100 }}>
        {/* Header with back and close buttons */}
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16, borderBottomWidth: 1, borderColor: '#ddd' }}>
          <TouchableOpacity onPress={closeChat}>
            <Ionicons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={{ marginLeft: 20, fontSize: 18, fontWeight: 'bold' }}>{selectedChat}</Text>
        </View>

        {/* Message input and send button */}
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16, borderTopWidth: 1, borderColor: '#ddd' }}>
          <TextInput  
            value={newMessage}
            onChangeText={setNewMessage}
            placeholder="Type a message..."
            style={{ flex: 1, borderColor: '#ddd', borderWidth: 1, borderRadius: 8, padding: 8 }}
            multiline
          />
          <TouchableOpacity onPress={sendMessage} style={{ marginLeft: 8, padding: 8, backgroundColor: '#9800FF', borderRadius: 16 }}>
            <Ionicons name="send" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16, backgroundColor: '#f1f5f9', zIndex: 100, position: 'relative' }}>
      {/* Logo */}
      <Link href="/" asChild>
        <TouchableOpacity>
          <Image
            source={require('../assets/images/BlackLongLogo.svg')}
            style={{ width: 100, height: 30, resizeMode: 'contain' }}
          />
        </TouchableOpacity>
      </Link>

      {/* Search Bar */}
      <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, marginLeft: 8, backgroundColor: '#e2e8f0', borderRadius: 8, paddingHorizontal: 8 }}>
        <TextInput
          placeholder="Search..."
          placeholderTextColor="#888"
          style={{ flex: 1, color: '#000' }}
        />
        <TouchableOpacity>
          <Ionicons name="search" size={20} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Cart Icon */}
      <Link href="/cart" asChild>
        <TouchableOpacity style={{ marginLeft: 8 }}>
          <Ionicons name="cart" size={24} color="#000" />
        </TouchableOpacity>
      </Link>

      {/* Chat Icon */}
      <TouchableOpacity onPress={toggleChatbox} style={{ marginLeft: 8 }}>
        <Ionicons name="chatbox-ellipses" size={24} color="#000" />
      </TouchableOpacity>

      {/* Chatbox Popup */}
      {chatVisible && !selectedChat && (
        <View style={{
          position: 'absolute',
          top: 60,
          right: 16,
          width: 250,
          backgroundColor: '#fff',
          borderRadius: 8,
          shadowColor: '#000',
          shadowOpacity: 0.3,
          shadowRadius: 8,
          zIndex: 110,
          elevation: 10,
          maxHeight: 300, // Added maxHeight for better scroll behavior
        }}>
          {/* Chatbox Header */}
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 16,
            borderBottomWidth: 1,
            borderColor: '#ddd',
          }}>
            <Text style={{ fontWeight: 'bold' }}>Messages</Text>
            <TouchableOpacity onPress={toggleChatbox}>
              <Ionicons name="close-outline" size={24} color="#000" />
            </TouchableOpacity>
          </View>

          {/* Messages List */}
          <ScrollView contentContainerStyle={{ paddingHorizontal: 16 }}>
            {messages.map((message, index) => (
              <TouchableOpacity key={index} onPress={() => handleMessageSelect(message)}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 8 }}>
                  <Image
                    source={{ uri: 'https://via.placeholder.com/40' }}
                    style={{ width: 40, height: 40, borderRadius: 20 }}
                  />
                  <Text style={{ marginLeft: 10 }}>{message}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default HeaderMob;
