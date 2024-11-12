import { View, TextInput, Text, StyleSheet, 
  Image, Platform, ImageBackground, Modal, Alert 
} from 'react-native';
import React, { useState, useEffect} from 'react'
import SideBarNav from '@/components/BarNav'
import { Button } from 'react-native-elements/dist/buttons/Button'
import { Ionicons } from '@expo/vector-icons';



const Shop = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [imageUri, setImageUri] = useState(null);
  const fileInputRef = React.useRef(null);

  const handlePress = () => {
    setIsModalVisible(false);

  };
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  const closemodal = () => {
    setIsModalVisible(false);
  };

  //upload image to the view
  const handleImageChange = (event) => {
    const file = event.target.files[0]; 
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUri(reader.result); 
      };
      reader.readAsDataURL(file);
    }
  };
  //cancel upload photo
  const clearImageSelection = () => {
    setImageUri(null);
 
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <View className='bg-custom1 md:flex-row  w-full h-full'>
      <View className='absolute z-10 pl-2'>
        <SideBarNav className=''></SideBarNav>
      </View>
      {/* CONTAINER 1 */}
      <View className=' justify-center -mt-10 h-auto pt-20 md:pt-0 md:h-full md:w-1/2'>
        <Text className='md:text-5xl text-3xl font-bold  text-center '>"Empowering Dreams, {"\n"} One Step at a Time."</Text>
        <Text className='md:text-right text-center md:mr-32  font-semibold'>with <Text className='text-lg font-bold'>DRIPSTR</Text></Text>
      </View>
          
      {/* CONTAINER 2 */}
      <View className='md:w-1/2 h-full md:justify-center'>
        <View style={styles.container} className='absolute z-0'>
          <Image 
              source={require('../../../assets/images/blackLogo.png')}  
              style={styles.image}
              resizeMode="cover" 
              className='blur-sm'
            />
        </View>
        {/* SET UP FORM */}
        <View className='self-center top-10 md:-top-10 place-content-center align-middle
         h-auto md:w-auto w-[80%]  bg-slate-100 bg-opacity-50 rounded-lg backdrop:blur-sm  '>
          <View className='p-5 md:p-10'>
          <Text className='text-2xl md:text-4xl text-pretty text-center font-medium'>Merchant Account Setup</Text>
          <Text className='mt-7 text-right right-3 '>Become a dripstr <Text className='font-semibold'>ARTIST </Text></Text>
            <input placeholder='SHOP NAME' className=' border-2 rounded-md p-2 border-violet-950 m-2' type="text"/>
            <input placeholder='PHONE NUMBER' className=' border-2 rounded-md p-2 border-violet-950 m-2' type="number"/>
            <input placeholder='EMAIL' className=' border-2 rounded-md p-2 border-violet-950 m-2' type="email"/>
            <select className='border-2 font-semibold rounded-md p-2 bg-slate-300 border-violet-950 m-2'>
              <option className='' value="">TYPE OF BUSINESS</option>
              <option  value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            <View className='flex-row gap-2 justify-center mt-2'>
              <input ref={fileInputRef} onChange={handleImageChange} type='file' className='bg-slate-50 hover:bg-custom1 border-2 w-[77%] md:w-[80%] rounded-md p-1 border-violet-950' ></input>
              <View>
                <Button
                      className='bg-[#4E31AA]  rounded-lg '
                      title='VIEW'
                      onPress={toggleModal} 
                > </Button>     
              </View>
                 
              </View>
            
          </View>
        </View>
      </View>

      {/* CONTAINER 2 
      <View className='b h-full p-10 md:w-1/2'>
        <TextInput
        placeholder='SHOP NAME'
        />
        <TextInput
          secureTextEntry={true}
          placeholder="ADDRESS"
        />

      </View> */}

      {/* Modal */}
      <Modal
            transparent={true} 
            animationType="fade"
            visible={isModalVisible} 
            onRequestClose={toggleModal} 
        >

        <View className='flex-1 justify-center items-center   bg-black bg-opacity-50'>
            <View className='h-[50%] w-[90%] md:h-[50%] md:w-[30%]  bg-white  rounded-lg p-5 shadow-lg'>
              <View className='h-full w-full'>
                <View className='h-[85%] w-[100%] bg-slate-400 justify-center rounded-md mb-2 '>
                          {/* Display the selected image if it exists */}
                          {imageUri ? (
                            <Image source={{ uri: imageUri }} style={{ width: '100%', height: '100%' }} resizeMode="cover" className='border-2-fuchsia-950 ' />
                            
                          ) : (
                            <Ionicons name="image" size={100} className="text-center justify-center text-purple-950" />              
                          ) }
                </View>
                <View className='flex-row w-full gap-2 justify-between bg-slate-700'>
                  <Button
                    className='bg-[#4E31AA] rounded-lg'
                    onPress={closemodal} 
                    title='CLOSE'
                  > </Button>
                  <Button
                    className='bg-[#ff133e]   rounded-lg '
                    title='CANCEL'
                    onPress={clearImageSelection}
                  > </Button> 
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
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  Button:{
    backgroundColor: '#fff',
  }
});
export default Shop