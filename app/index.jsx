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
    <View style={styles.container}> 
      <Header />
      
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        {/* Ribbon Navigation */}
        <SideBarNav items={ribbonItems} />

        {/* Banner */}
        <View style={styles.bannerContainer}>
          <Image
            source={{ uri: 'https://example.com/banner-image.jpg' }}
            style={styles.bannerImage}
            resizeMode="cover"
          />
        </View>

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e2e8f0',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  scrollContainer: {
    paddingBottom: 16,
  },
  bannerContainer: {
    height: 180,
    marginVertical: 10,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  section: {
    marginVertical: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 16,
    color: '#333',
  },
  categoriesContainer: {
    flexDirection: 'row',
    padding: 8,
  },
  categoryCard: {
    width: 100,
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#E0F7FA',
    borderRadius: 8,
    marginHorizontal: 8,
  },
  categoryText: {
    marginTop: 8,
    fontSize: 14,
    color: '#333',
  },
  productsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    padding: 8,
  },
  productCard: {
    width: '45%',
    padding: 10,
    borderRadius: 8,
  },
  productImage: {
    width: '100%',
    height: 120,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 4,
  },
  productPrice: {
    fontSize: 14,
    color: '#888',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#4CAF50',
  },
  dealsContainer: {
    paddingHorizontal: 8,
  },
  dealCard: {
    width: 150,
    padding: 10,
    marginHorizontal: 8,
    borderRadius: 8,
  },
  dealImage: {
    width: '100%',
    height: 100,
  },
  dealText: {
    marginTop: 8,
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold',
  },
});
