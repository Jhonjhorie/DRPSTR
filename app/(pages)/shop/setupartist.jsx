import { View, TextInput, Text, StyleSheet, 
    Image, Platform, ImageBackground, Modal, 
    Alert, TouchableOpacity, PermissionsAndroid
  } from 'react-native';
  import React, { useState, useEffect} from 'react'
  import SideBarNav from '@/components/BarNav'
  import { Button } from 'react-native-elements/dist/buttons/Button'
  import { Ionicons } from '@expo/vector-icons';
  import { Picker } from '@react-native-picker/picker';
  import * as MediaLibrary from 'expo-media-library';
  import * as ImagePicker from 'expo-image-picker';
  import { useNavigation } from '@react-navigation/native';

  const setupartist = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [imageUri, setImageUri] = useState(null);
    const [selectedBusinessType, setSelectedBusinessType] = useState("");
    const [phoneNumber, setPhoneNumber] = useState('');
    const [permissionGranted, setPermissionGranted] = useState(false);
    const [image, setImage] = useState('null')
    const navigation = useNavigation();
    //upload photo
    const handleImagePickerPress = async () => {
      console.log('handleImagePickerPress triggered');
      await openImagePicker();
    };
  
    // launches the image gallery
    const openImagePicker = async () => {
      try {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [1, 1], 
          quality: 1,
        });
  
        if (!result.canceled) {
          const selectedImageUri = result.assets[0].uri;
          setImage(selectedImageUri);
          setImageUri(selectedImageUri);
        } else {
          console.log('Image picker canceled');
        }
      } catch (error) {
        console.error('Error launching image picker: ', error); 
      }
    };
    
    //cancel upload photo
    const clearImageSelection = () => {
      setImageUri(null);
    };

    const toggleModal = () => {
      setIsModalVisible(!isModalVisible);
    };
    const closemodal = () => {
      setIsModalVisible(false);
    };
    useEffect(() => {
      const requestPermission = async () => {
        const { status } = await MediaLibrary.requestPermissionsAsync();
        if (status === 'granted') {
          setPermissionGranted(true);
        } else {
          Alert.alert('Permission Denied', 'You need to grant permissions to use the photo library');
        }
      };
    
      requestPermission();
    }, []);
    
    

    //don't allow alphabet type
    const handlePhoneNumberChange = (text) => {
      const numericText = text.replace(/[^0-9]/g, ''); 
      setPhoneNumber(numericText);
    };
    useEffect(() => {
      const requestPermission = async () => {
        const { status } = await MediaLibrary.requestPermissionsAsync();
        console.log('MediaLibrary Permission Status:', status);  // Log permission status
        if (status === 'granted') {
          setPermissionGranted(true);
        } else {
          Alert.alert('Permission Denied', 'You need to grant permissions to use the photo library');
        }
      };
    
      requestPermission();
    }, []);
    

    return (
      
      <View className='bg-custom1 bg-slate-300 md:flex-row h-screen overflow-y-hidden w-full' style={styles.parentview}>
        <View className='absolute z-10 pl-2'>
          <SideBarNav className=''></SideBarNav>
        </View>
        {/* CONTAINER 1 */}
        <View className=' z-0 justify-center -mt-10 h-auto pt-20 md:pt-0 md:h-full md:w-1/2'>
          <Text className='md:text-5xl text-3xl font-bold  text-center '>"From Passion to Palette, {"\n"} Art that Inspires, Pieces that Last."</Text>
          <Text className='md:text-right text-center md:mr-32  font-semibold'>by <Text className='text-lg font-bold'>DRIPSTR</Text></Text>
        </View>
            
        {/* CONTAINER 2 */}
        <View className='md:w-1/2 h-full md:justify-center'>
          <View style={styles.container} className='absolute z-0' >
            <Image
                source={require('../../../assets/images/blackLogo.png')}  
                style={styles.image}
                resizeMode="cover" 
                className='blur-sm'
        
              />
          </View>
          {/* SET UP FORM */}
          <View className='self-center top-10 md:-top-10 place-content-center align-middle
          h-auto md:w-auto w-[85%]  bg-slate-100 bg-opacity-80 rounded-lg backdrop:blur-sm  '>
            <View className='p-3 md:p-10 justify-center align-middle'>
            <Text className='text-2xl md:text-4xl text-pretty text-center font-medium'>Artist Shop Account Setup</Text>
              <Text className='mt-7 text-right right-3'>
                Become a dripstr <Text className='font-semibold'>ARTIST</Text>
              </Text>
              <TextInput placeholder='SHOP NAME' className=' border-2 bg-slate-50 bg-opacity-50 rounded-md p-2 border-violet-900 m-2'
              type="text"/>
              <TextInput placeholder='PHONE NUMBER' className=' border-2 bg-slate-50 bg-opacity-50 rounded-md p-2 border-violet-900 m-2'
                keyboardType="numeric" 
                maxLength={11}
                value={phoneNumber}
                onChangeText={handlePhoneNumberChange}
              />
              <TextInput placeholder='EMAIL' className=' border-2 bg-slate-50 bg-opacity-50 rounded-md p-2 border-violet-900 m-2' type="email"/>
              <View style={styles.pickerWrapper} className='self-center w-[96%] cursor-pointer '>
                <Picker
                  selectedValue={selectedBusinessType}
                  onValueChange={(itemValue) => setSelectedBusinessType(itemValue)} 
                  style={styles.picker}
                >
                  <Picker.Item label="TYPE OF BUSINESS" value=""  />
                  <Picker.Item label="Option 1" value="option1" className='' />
                  <Picker.Item label="Option 2" value="option2" />
                  <Picker.Item label="Option 3" value="option3" />
                </Picker>
              </View>
              <View className='flex-row gap-2 justify-center mt-2'>
                <TouchableOpacity activeOpacity={0.8} style={styles.buttonpick}
                  className='rounded-lg text-lg p-2 bg-slate-100 w-[75%] md:w-[82%]
                  text-center hover:bg-[#4E31AA]
                    h-10
                  '
                  onPress={ handleImagePickerPress }
                  >
                    <Text style={styles.buttonText} className='text-slate-900 font-semibold text-center'>CHOOSE SHOP LOGO</Text>
                  </TouchableOpacity>
                    <TouchableOpacity
                          style={styles.buttonView}
                          className='bg-[#4E31AA] hover:bg-[#6545ce] h-10 items-center justify-center font-semibold rounded-lg '
                          onPress={toggleModal} 
                    > 
                    <Text style={styles.buttonText} className='text-slate-900 font-semibold text-center px-4'>
                      <Ionicons name='image' style={styles.iconsee}/>
                      </Text>
                    </TouchableOpacity>     
                </View>
                <View className='mt-5 w-full px-2'>
                  <TouchableOpacity className=' h-12 hover:bg-[#a489fb] rounded-md justify-center bg-[#4E31AA] '>
                    <Text className='text-xl text-center font-bold'>SUBMIT</Text>
                  </TouchableOpacity>
                </View>
                <View className='mt-2 w-full px-2'>
                  <TouchableOpacity className=' h-12 rounded-md justify-center '
                   onPress={() => navigation.navigate('index')}
                    >
                    <Text className=' text-center text-slate-700 hover:text-slate-950 '>BECOME A DRIPSTR MERCHANT</Text>
                  </TouchableOpacity>
                </View>
            </View>
          </View>
        </View>

        {/* Modal */}
        <Modal
              transparent={true} 
              animationType="fade"
              visible={isModalVisible} 
              onRequestClose={toggleModal} 
          >

          <View className='flex-1 justify-center items-center   bg-black bg-opacity-70 ' 
          style={styles.modalBackBg}>
              <View className='h-[50%] w-[90%] md:h-[50%] md:w-[30%]  bg-slate-200  rounded-lg p-5 shadow-lg'>
                <View className='h-full w-full'>
                  <Text className='font-bold text-lg text-center p-2'>SHOP LOGO</Text>
                  <View className='h-[75%] w-[100%] bg-slate-100 justify-center rounded-md mb-2 '>
                            {/* Display the selected image if it exists */}
                            {imageUri ? (
                              <Image  
                                source={{ uri: imageUri  }} 
                                style={[
                                  { width: '100%', height: '100%' },
                                  styles.image
                                ]}
                                resizeMode="cover" 
                                className="border-2 border-fuchsia-950" 
                              />
                            ) : (
                              <Ionicons 
                                name="image" 
                                size={100} 
                                
                                style={{ textAlign: 'center', color: '#7C3AED' }} 
                              />
                            )}

                  </View>
                  <View className='flex-row w-full gap-2 justify-between '>
                    <TouchableOpacity
                      className='bg-slate-400 hover:bg-[#4E31AA]  rounded-md'
                      onPress={closemodal} 
                      style={styles.closebtn}
                     
                    > 
                     <Text className='p-2 font-semibold'>CLOSE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      className='bg-[#fa899e] hover:bg-[#ff133e] rounded-md '
                      
                      style={styles.cancelbtn}
                      onPress={clearImageSelection}
                    > 
                    <Text className='p-2 font-semibold'>CANCEL</Text>
                    </TouchableOpacity> 
                  </View>
                  
                </View>

              </View>
            </View>
          </Modal>
          {/* Modal */}

      </View>
    )
  }




  //background image logo blur di nagana yung tailwind huhu
  const styles = StyleSheet.create({

    container: {
      backgroundColor: 'none',
      width: '70%',
      height: '70%',
      position: 'absolute',
      alignSelf: 'flex-end',
      bottom: 0,
    },
    buttonpick: {
      textAlign: 'center',
      justifyContent: 'center',
      shadowColor:  '#000',
      shadowOpacity: 0.15,
      shadowRadius: 3.5,
      transition: 'all 0.3s ease',
      elevation:  5
    },
    image: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
    buttonView:{
      backgroundColor: '#4E31AA',
      transition: 'all 0.3s ease',
    },
    pickerWrapper: {
      borderColor: '#6B21A8',   
      borderWidth: 2,       
      width: '95%',
      borderRadius: 8,           
      overflow: 'hidden',
      justifyContent: 'center',        
      margin: 10,
    
    },
    picker: {
      height: 40,
      cursor: 'pointer',
      backgroundColor: '#F3F4F6',  
      fontSize: 16,
      color: '#000',
    },
    iconsee: {
      fontSize: 20,
    },
    modalBackBg: {
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    closebtn: {
      transition: 'all 0.3s ease',
    },
    cancelbtn: {
      
      transition: 'all 0.3s ease',
    }
  });
  export default setupartist