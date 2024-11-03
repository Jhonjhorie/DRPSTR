import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Linking, ImageBackground, Image} from 'react-native';

const LogIn = () => {
  const openURL = () => {
    Linking.openURL('https://example.com');
};
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (email && password) {
            Alert.alert('Login Successful', `Welcome, ${email}!`);
        } else {
            Alert.alert('Error', 'Please enter both email and password.');
        }
    };

    return (
      <ImageBackground
      source={{ uri: '/assets/images/bgForAdmin.png' }}
      style={styles.background}
      resizeMode="cover"
      >
        <View style={styles.container}>
            <View style={styles.containerLeft}>
              <Text style={styles.title}>WELCOME</Text>
              <Text style={styles.text}>Please Login to Admin Dashboard</Text><br/>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Text style={styles.linkRight} onPress={openURL}>Forgot Password?</Text><br/>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity><br/>
            <Text>Dont have an Account?</Text>
            <Text style={styles.link} onPress={openURL}>SIGN UP</Text>
            
          </View>
        

        <View style={styles.containerRight}>
              <Image
                source={{ uri: '/assets/images/blackLogo.png' }} 
                style={styles.logo}
            />
        </View>
        </View>
      </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
    },
    logo: {
      width: 200,         
      height: 200,       
      resizeMode: 'contain', 
  },
    container: {
      width: '80%',
      height: '80%',
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: '#fff',
      borderWidth: 5,  
      borderRadius: 10,  
      overflow: 'hidden',  
    },
    containerLeft: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#ededed',
      height: '100%'
    },
    containerRight: {
      justifyContent: 'center',
      alignItems: 'center',
      width: '40%',
    },
    title: {
      fontSize: 48,
      color: '#BF7CDA',
      fontWeight: 'bold',
      textAlign: 'center',
      fontFamily: 'impact',
    },
    text: {
      fontFamily: 'arial',
      fontSize: 18,
    },
    input: {
      height: 50,
      width: '50%',
      backgroundColor: '#fff',
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 10,
      marginBottom: 15,
    },
    link: {
      color: '#1E90FF', 
      textDecorationLine: 'underline', 
    },
    linkRight: {
      color: '#1E90FF', 
      textDecorationLine: 'underline', 
      paddingLeft: '30%',
    },
    button: {
      backgroundColor: '#941AE5',
      width: '30%',
      alignItems: 'center',
      borderRadius: 8,
      paddingVertical: 10,
      paddingHorizontal: 20,
      marginTop: 10,
    },
    buttonText: {
      color: '#fff',
    }
});

export default LogIn;
