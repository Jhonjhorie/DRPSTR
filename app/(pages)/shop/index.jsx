import { StyleSheet, Text, View, Image,  Modal, TouchableOpacity } from 'react-native'
import React, { useState, useEffect} from 'react'
import SideBarNav from '@/components/BarNav'
import { Button } from 'react-native-elements/dist/buttons/Button'
import { Ionicons } from '@expo/vector-icons';

const Shop = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalVisible2, setIsModalVisible2] = useState(false);
    const [imageUri, setImageUri] = useState(null);

    // MODAL
    const toggleModal = () => {
      setIsModalVisible(!isModalVisible);
    };
    const toggleModal2 = () => {
    setIsModalVisible2(!isModalVisible2);
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
    };
  return (


    <View className='h-full w-full bg-custom1 '>
        {/* Modal */}
        <Modal
            transparent={true} 
            animationType="fade"
            visible={isModalVisible} 
            onRequestClose={toggleModal} 
        >

        <View className='flex-1 justify-center items-center   bg-black bg-opacity-50'>
            <View className=' h-auto w-[50%] bg-white  rounded-lg p-6 shadow-lg'>
                <View className='h-[20%] w-[20%] left-0 -mt-2 ml-3 absolute justify-end'>
                    <Image
                        className="object-fit"
                        style={{ width: '80%', height: '100%' }}
                        resizeMode="cover"
                        source={require('../../../assets/images/blackLogo.png')}
                    />
                </View>
            <Text className='text-right mb-5 font-bold text-lg  '>  <Ionicons name="storefront" size={25} className="mr-2 align-middle " /> SIGN UP</Text>
            <Text className='mt-7 text-right right-3 '>Become a dripstr <span className='font-semibold'>MERCHANT </span></Text>

                <View className='flex-row gap-4'>
                    <View className='flex-1 justify-center'> 
                      <input placeholder='SHOP NAME' className=' border-2 rounded-md p-2 border-violet-950 m-2' type="text"/>
                      <input placeholder='PHONE NUMBER' className=' border-2 rounded-md p-2 border-violet-950 m-2' type="text"/>
                      <input placeholder='EMAIL' className=' border-2 rounded-md p-2 border-violet-950 m-2' type="text"/>
                      <input placeholder='TYPE OF BUSINESS' className=' border-2 rounded-md p-2 border-violet-950 m-2' type="text"/>
                    </View>
                    <View className='flex-2 bg-slate-400 rounded-sm p-2'>
                      <View className='h-52 justify-center  w-full bg-slate-100'>
                          {/* Display the selected image if it exists */}
                          {imageUri ? (
                            <Image source={{ uri: imageUri }} style={{ width: '100%', height: '100%' }} resizeMode="cover" className='border-2-fuchsia-950 ' />
                            
                          ) : (
                            <Ionicons name="image" size={100} className="text-center text-purple-950" />              
                          ) }
                        
                      </View>
                      
                      <input  onChange={handleImageChange}  className=' hover:bg-custom1 cursor-pointer overflow-y-hidden  bg-slate-300 ' type="file" name="" id="" /> 
                      <Text   onPress={clearImageSelection} className='font-bold text-lg bg-slate-400 w-7 text-center h-7 rounded-full right-0 top-0 z-20 absolute hover:text-red-600 cursor-pointer hover:duration-200'>X</Text>
                    </View>
                </View>

                <View className='flex-row space-x-2 w-full justify-end p-2 ml-2'>
                <Button
                    className='bg-[#4E31AA]  rounded-lg '
                    onPress={toggleModal} 
                    title='SUBMIT'
                > </Button>
                <Button
                    className='bg-[#4E31AA] rounded-lg'
                    onPress={toggleModal} 
                    title='CANCEL'
                > </Button>
                </View>
           
              </View>
          </View>
        </Modal>
        {/* Modal */}

    
        {/* Modal2  */}
        <Modal
        transparent={true} 
        animationType="fade"
        visible={isModalVisible2} 
        onRequestClose={toggleModal2} 
        >

        <View className='flex-1 justify-center items-center h-auto bg-black bg-opacity-50'>
          <View className='w-[30%] h-[45%] bg-white  rounded-lg p-6 shadow-lg'>
            <View className='h-[20%] w-[20%] left-0 -mt-2 ml-3 absolute justify-end'>
            <Image
                        className="object-fit"
                        style={{ width: '80%', height: '100%' }}
                        resizeMode="cover"
                        source={require('../../../assets/images/blackLogo.png')}
                    />
            </View>
            <Text className='text-right mb-5 font-bold text-lg  '>  <Ionicons name="brush" size={25} className="mr-2 align-middle " /> SIGN UP</Text>

            <Text className='mt-7 text-right right-3 '>Become a dripstr <span className='font-semibold'>ARTIST </span></Text>
              <input placeholder='USERNAME' className=' border-2 rounded-md p-2 border-violet-950 m-2  ' type="text"/>
              <input placeholder='PASSWORD' className=' border-2 rounded-md p-2 border-violet-950 m-2 mb-5' type="password" />

            
            <View className='flex-row space-x-4 w-full justify-end p-2'>
            <Button
              className='bg-[#4E31AA]  rounded-lg '
              onPress={toggleModal2} 
              title='SUBMIT'
            > </Button>
             <Button
              className='bg-[#4E31AA] rounded-lg'
              onPress={toggleModal2} 
              title='CANCEL'
            > </Button>
            </View>
           
          </View>
        </View>
      </Modal>
        {/* Modal2 */}

        <View className='absolute z-10 pl-2'>
            <SideBarNav className=''></SideBarNav>
        </View>

        <View className='md:flex md:flex-row md:flex-1'>
        

            {/* First Container */}
            <View className='flex-1 h-full justify-center md:-mt-20'>
                <Text className='text-5xl font-bold  text-center '>"Empowering Dreams, <br /> One Step at a Time."</Text>
                <Text className='text-right mr-32  font-semibold'>with <span className='text-lg font-bold'>DRIPSTR</span></Text>
                <br />
            </View>
            
            {/* Second Container */}
            <View className='flex-1 h-full object-fill  items-center  '>

                <View className='w-[80%] absolute hover:bg-opacity-60 hover:shadow-white hover:shadow-lg duration-300  z-10 bottom-44 rounded-tl-full rounded-bl-full shadow-[#000] shadow-lg bg-[#4E31AA] justify-end right-0'>
                    <Button  onPress={toggleModal2} className='bg-slate-700 rounded-xl text-black h-10 w-[25%] text-[10px] items-center justify-center' title="BE AN ARTIST"/>
                </View>
                
                <View className='w-full absolute  hover:bg-opacity-60 hover:shadow-white hover:shadow-lg duration-300  z-10 bottom-28 rounded-tl-full rounded-bl-full shadow-[#000] shadow-lg  bg-[#4E31AA] justify-end right-0'>
                    <Button onPress={toggleModal} className='bg-slate-700 rounded-xl text-black h-10 w-[20%] text-[10px] items-center justify-center' title="BE A SELLER"/>
                </View>
                    <Image
                        className="object-fit"
                        style={{ width: '80%', height: '100%' }}
                        resizeMode="cover"
                        source={require('../../../assets/images/sample1.jpg')}
                    />
            </View>
        </View>
    </View>
  )
}

export default Shop

const styles = StyleSheet.create({})