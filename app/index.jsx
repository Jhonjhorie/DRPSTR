import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, Card, Button } from 'react-native-elements';
import Header from '../components/Header';  
import SideBarNav from '../components/BarNav';

const HomeScreen = () => {
  const ribbonItems = [
    { label: 'Home', path: '/', icon: 'home' },
    { label: 'Order', path: '/(pages)/shop', icon: 'storefront' }, 
    { label: 'Notification', path: '/(pages)/notification', icon: 'notifications' }, 
    { label: 'Account', path: '/(pages)/account', icon: 'person' }, 
  ];

  return (
    <View className='bg-slate-300 h-full w-full'> 
      <Header />

      <ScrollView className='pb-4'>
        
        {/* Ribbon Navigation */}
        <SideBarNav items={ribbonItems} />


        {/* Uncomment sections as needed */}
        {/* Featured Products */}
        {/* <View style={styles.section}>
          <Text style={styles.sectionTitle}>Featured Products</Text>
          <View style={styles.productsContainer}>
            {[1, 2, 3].map((item) => (
              <Card key={item} containerStyle={styles.productCard}>
                <Image
                  source={{ uri: 'https://example.com/product-image.jpg' }}
                  style={styles.productImage}
                  resizeMode="contain"
                />
                <Text style={styles.productName}>Product {item}</Text>
                <Text style={styles.productPrice}>$99.99</Text>
                <Button
                  title="Add to Cart"
                  buttonStyle={styles.button}
                  icon={<Icon name="cart-plus" type="font-awesome" color="#FFF" size={18} />}
                />
              </Card>
            ))}
          </View>
        </View> */}

        {/* Deals */}
        {/* <View style={styles.section}>
          <Text style={styles.sectionTitle}>Exclusive Deals</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.dealsContainer}>
            {[1, 2, 3].map((deal) => (
              <Card key={deal} containerStyle={styles.dealCard}>
                <Image
                  source={{ uri: 'https://example.com/deal-image.jpg' }}
                  style={styles.dealImage}
                  resizeMode="contain"
                />
                <Text style={styles.dealText}>Deal {deal} - Save 30%</Text>
              </Card>
            ))}
          </ScrollView>
        </View> */}

        {/* Categories */}
        {/* <View style={styles.section}>
          <Text style={styles.sectionTitle}>Shop by Category</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>
            {["Men's Wear", "Women's Wear", "Electronics", "Accessories"].map((category, index) => (
              <TouchableOpacity key={index} style={styles.categoryCard}>
                <Icon name="tags" type="font-awesome" color="#4CAF50" size={24} />
                <Text style={styles.categoryText}>{category}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View> */} 
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
