// Report.jsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Report = ({ data }) => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>Report Summary</Text>
            {data && data.length > 0 ? (
                data.map((item, index) => (
                    <View key={index} style={styles.item}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.description}>{item.description}</Text>
                    </View>
                ))
            ) : (
                <Text style={styles.noData}>No report data available</Text>
            )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
    },
    item: {
        backgroundColor: '#ffffff',
        padding: 16,
        marginVertical: 8,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 1,
        elevation: 3,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
    },
    description: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
    },
    noData: {
        fontSize: 16,
        color: '#999',
        textAlign: 'center',
        marginTop: 20,
    },
});

export default Report;
