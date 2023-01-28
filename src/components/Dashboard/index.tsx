import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Dashboard = () => {
    return (
    <Text style={styles.cardTitle}>
        Welcome
  </Text>
    )
}

const styles = StyleSheet.create({
    cardTitle: {
        fontSize: 22,
        color: '#000000',
        textAlign: 'center',
    }
})

export default Dashboard