import React from "react";
import { Link, Stack } from "expo-router";
import { View, StyleSheet } from "react-native";


import SideBarNav from "@/components/BarNav";


import RibbonNavigation from '@/components/BarNav';


import RibbonTab from "@/components/ribbonTab";

const innerSideBar = [
  { label: "Manage Account", path: "/(pages)/account/dashboard", icon: "settings-outline" },
  { label: "My Profile", path: "/(pages)/account/profile", icon: "person-outline" },
  { label: "My Address Book", path: "/(pages)/account/address", icon: "location-outline" },
  { label: "My Payment Options", path: "/(pages)/account/payment", icon: "card-outline" },

  { label: "My Order", path: "/(pages)/account/orders", icon: "receipt-outline" },
  { label: "My Cancellations", path: "/(pages)/account/cancellations", icon: "close-circle-outline" },
  { label: "My Reviews", path: "/(pages)/account/reviews", icon: "star-outline" },
  { label: "My Wishlist and Followed Shop", path: "/(pages)/account/wishlist", icon: "heart-outline" },
  { label: "Set up Shop", path: "/(pages)/account/wow", icon: "storefront-outline" },
  { label: "Avatar", path: "/(pages)/account/avatar", icon: "person-circle-outline" },

];



const UserLayout = () => {
  return (
    <View style={styles.container}>

      {/* Absolute s */}

      <View style={styles.ribbonStyle}>
        <RibbonNavigation  activeName={'Account'}/>

      </View>
      {/* Sidebar */}

      
      <SideBarNav style={styles.sidebar} innerSidebar={innerSideBar} activeName="Featured" />


      {/* Main Content */}
      <View style={styles.mainContent}>
 
        {/* Stack Navigation */}
        <View style={styles.contentContainer}>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="dashboard" options={{ title: "User Account" }} />
          </Stack>
        </View>
      </View>

    </View>
 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  mainContent: {
    flex: 1,
    flexDirection: "row",
    paddingLeft: 20,
    
  },
  contentContainer: {
    flex: 1,
 
   },
  ribbonStyle: {
    position: 'absolute',
     width: '100%',
    zIndex: 10,  
    display: 'flex',
    flexDirection: 'row',
    }, 
});

export default UserLayout;
