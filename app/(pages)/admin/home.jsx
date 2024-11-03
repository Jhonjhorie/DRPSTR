// /features/User/home.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const Admin = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('perMonth');
  const [monthOpen, setMonthOpen] = useState(false);
  const [monthValue, setMonthValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Per Day', value: 'perDay' },
    { label: 'Per Week', value: 'perWeek' },
    { label: 'Per Month', value: 'perMonth' },
  ]);

  const monthItems = [
    { label: 'January', value: 'january' },
    { label: 'February', value: 'february' },
    { label: 'March', value: 'march' },
    { label: 'April', value: 'april' },
    { label: 'May', value: 'may' },
    { label: 'June', value: 'june' },
    { label: 'July', value: 'july' },
    { label: 'August', value: 'august' },
    { label: 'September', value: 'september' },
    { label: 'October', value: 'october' },
    { label: 'November', value: 'november' },
    { label: 'December', value: 'december' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.headerRow}>
          <Text style={styles.title}>Admin</Text>
          <View style={styles.dropdownContainer}>
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              placeholder="Select Frequency"
              style={styles.dropdown}
              dropDownContainerStyle={styles.dropdownContainerStyle}
            />
            <DropDownPicker
              open={monthOpen}
              value={monthValue}
              items={monthItems}
              setOpen={setMonthOpen}
              setValue={setMonthValue}
              placeholder="Select Month"
              style={styles.dropdown}
              dropDownContainerStyle={styles.dropdownContainerStyle}
            />
          </View>
        </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Sales</Text>
        <View style={styles.subSection}>
          <Text style={styles.subSectionTitle}>Total Sales:</Text>
          <Text style={styles.subSectionContent}>PHP10,000</Text>
          
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Customers</Text>
        <View style={styles.subSection}>
          <Text style={styles.subSectionTitle}>Total Customers</Text>
          <Text style={styles.subSectionContent}>1,000</Text>
        </View>
        <View style={styles.subSection}>
          <Text style={styles.subSectionTitle}>Active Customers</Text>
          <Text style={styles.subSectionContent}>800</Text>
        </View>
        <View style={styles.subSection}>
          <Text style={styles.subSectionTitle}>Customer Feedback</Text>
          <Text style={styles.subSectionContent}>Positive: 90%</Text>
          <Text style={styles.subSectionContent}>Negative: 10%</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Merchant Designer</Text>
        <View style={styles.subSection}>
          <Text style={styles.subSectionTitle}>Designer Name:</Text>
          <Text style={styles.subSectionContent}>John Doe</Text>
        </View>
        <View style={styles.subSection}>
          <Text style={styles.subSectionTitle}>Total Designs:</Text>
          <Text style={styles.subSectionContent}>50</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Sales Statistics</Text>
        <View style={styles.subSection}>
          <Text style={styles.subSectionTitle}>Monthly Growth:</Text>
          <Text style={styles.subSectionContent}>15%</Text>
        </View>
        <View style={styles.subSection}>
          <Text style={styles.subSectionTitle}>Average Sale Value:</Text>
          <Text style={styles.subSectionContent}>PHP500</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Top Sales Item</Text>
        <View style={styles.subSection}>
          <Text style={styles.subSectionTitle}>Item Name:</Text>
          <Text style={styles.subSectionContent}>Product A</Text>
        </View>
        <View style={styles.subSection}>
          <Text style={styles.subSectionTitle}>Total Sold:</Text>
          <Text style={styles.subSectionContent}>200</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Overall Total Users</Text>
        <View style={styles.subSection}>
          <Text style={styles.subSectionTitle}>Total Users:</Text>
          <Text style={styles.subSectionContent}>2,500</Text>
        </View>
      </View>
      
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1, 
    alignItems: 'center',
    paddingHorizontal: 10, 
  },
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 10,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 10, 
  },
  section: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
    padding: 20,
    backgroundColor: '#ddd',
    borderWidth: 1,         
    borderColor: '#bbb',   
    borderRadius: 5,        
  },
  subSection: {
    marginBottom: 10,
    padding: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#941AE5'
  },
  subSectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subSectionContent: {
    fontSize: 20,
    fontStyle: 'italic',
  },
  text: {
    fontSize: 24,
  },
  subtext: {
    fontSize: 18,
  },
  dropdown: {
    width: 150, // Set the width of the dropdown picker
    backgroundColor: '#fafafa',
  },
  dropdownContainer: {
    backgroundColor: '#e0e0e0',
    width: 150,
  },
});

export default Admin;
