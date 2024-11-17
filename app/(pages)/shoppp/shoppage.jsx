import { Text, View, Image, Dimensions, Button } from 'react-native'
import React, { Component } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { BarChart } from 'react-native-chart-kit';
import ShopSidebar from '@/components/shop/Shopsidebar';
export class shoppage extends Component {
  render() {

    const data = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        { //data number
          data: [50, 40, 60, 75, 90, 20, 140, 110, 95, 80, 70, 60], 
        },
      ],
    };
    const screenWidth = Dimensions.get('window').width;
    const chartWidth = screenWidth * 0.55;

    return (
      <View className='h-full w-full bg-slate-300 flex-row '>
         {/*this is the navbar component*/}
          <ShopSidebar className="relative"></ShopSidebar>
        <View className='p-5 w-[80%]'>
          <View>
            <Text className='text-5xl font-semibold text-violet-950'>Welcome Tommy!</Text>
            <Text className='text-base font-semibold p-2 text-violet-800'>Here is the overview of your business</Text>
          </View>
          <View className='flex-row  h-full w-full'>
            <View className=' w-[75%] py-2 gap-5'> 
              <View className=' w-full h-40 flex-row gap-5 justify-center'>
                <div className='bg-slate-100 h-40 w-64 py-3 rounded-lg items-center text-center align-middle justify-center'>
                  <Text className='text-[70px] text-violet-800'>404</Text> <br />
                  <Text className='font-semibold text-violet-950'>ORDER TOTAL</Text>
                </div>
                <div className='bg-slate-100 h-40 w-64 py-3 rounded-lg items-center text-center align-middle justify-center'>
                  <Text className='text-[70px] text-violet-800'>1k</Text> <br />
                  <Text className='font-semibold text-violet-950'>FOLLOWERS</Text>
                </div>
                <div className='bg-slate-100 h-40 w-64 py-3 rounded-lg items-center text-center align-middle justify-center'>
                  <Text className='text-[70px] text-violet-800'>56k</Text> <br />
                  <Text className='font-semibold text-violet-950'>TOTAL INCOME</Text>
                </div>
              </View>
              <View className=' justify-center w-full px-3 h-64'>
                <View className='bg-slate-100 w-full justify-center items-center  h-full rounded-lg'>
                <div className='text-md text-slate-800 font-bold left-0 justify-start'>YEARLY SALES</div>
                <BarChart 
                  data={data}
                  width={chartWidth} 
                  height={220}
                  yAxisLabel=""
                  chartConfig={{
                    backgroundColor: '#fff',
                    backgroundGradientFrom: '#2E073F',
                    backgroundGradientTo: '#443C68',
                    borderRadius: '',
                    decimalPlaces: 0,
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                      borderRadius: 100,
                    },
                    propsForDots: {
                      r: '6',
                      strokeWidth: '2',
                      stroke: '#ffa726',
                    },
                  }}
                  fromZero={true}
                />
                </View>
              </View>
              <View className=' w-full h-14 flex-row justify-end pr-5 gap-5'>
                  <button className='bg-slate-50 shadow-sm hover:duration-300 justify-end rounded-lg h-10
                   hover:bg-violet-500 w-[20%] text-violet-900 font-semibold'>MANAGE PRODUCT</button>
                  <button className='bg-slate-50 shadow-sm hover:duration-300 justify-end rounded-lg
                   h-10 hover:bg-violet-500 w-auto px-2 text-violet-900 font-semibold'> <Ionicons ></Ionicons> CUSTOMER FEEDBACK</button>
                  
              </View>

            </View>

            {/* NOTOFICATION PART */}
            <View className='h-[75%] rounded-lg bg-slate-100 w-[25%] p-2'>
              <div className='gap-5 flex-row justify-between flex p-2'>
                <div>
                  <Text className='text-xl text-violet-950 font-medium'>Notification</Text>
                </div>
                <div>
                  <Ionicons name='notifications-outline' size='150%' className='justify-end text-violet-950'/>
                </div>
              </div>
              <div className='h-full p-1 rounded-md bg-slate-300'>
                <div className='flex w-full h-14 rounded-md p-2 mb-1 hover:shadow-sm hover:bg-violet-400 cursor-pointer hover:duration-300 bg-slate-100'>
                  <div className='rounded-full h-full w-10  '>
                  <Image
                      className="object-cover rounded-full border"
                      style={{ width: '100%', height: '100%' }}
                      resizeMode="cover"
                      source={require('../../../assets/images/erica.jpg')}
                  />
                  </div>
                  <Text className=' ml-1 font-semibold text-slate-900 '>Erica mae <br /> <span className='text-[10px] font-normal '>Just made an order</span></Text>
                </div>
                <div className=' flex w-full h-14 rounded-md mb-1 hover:shadow-sm hover:bg-violet-400 cursor-pointer hover:duration-300 p-2 bg-slate-100'>
                  <div className='rounded-full h-full w-10  '>
                  <Image
                      className="object-cover rounded-full border"
                      style={{ width: '100%', height: '100%' }}
                      resizeMode="cover"
                      source={require('../../../assets/images/sample2.jpg')}
                  />
                  </div>
                  <Text className=' ml-1 font-semibold text-slate-900 '>Paolo <br /> <span className='text-[10px] font-normal '>Just made and order</span></Text>
                </div>
                <div className='w-full h-14  p-2 mb-1 hover:shadow-sm hover:bg-violet-950 cursor-pointer hover:duration-300 flex bg-violet-900 rounded-md'>
                  <div className='  h-full w-10   '>
                  <Image
                      className="object-cover rounded-lg bg-violet-500 border"
                      style={{ width: '100%', height: '100%' }}
                      resizeMode="cover"
                      source={require('../../../assets/images/blackLogo.png')}
                  />
                  
                  </div>
                  <Text className=' ml-1 font-semibold text-white '>DRIPSTR <br /> <span className='text-[10px] font-normal '>Dripster terms and conditions</span></Text>
                </div>
                
              </div>
             
            </View>
            
          </View>

          <View>
          </View>

        </View> 

      </View>
    )
  }
}

export default shoppage