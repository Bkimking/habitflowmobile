import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Navbar from './navbar'; // Importing Navbar component
import styles from './dashboardstyles'; // Importing styles

const Dashboard = ({ navigation }) => {
  const [tabs, setTabs] = useState(['⭐ My Habits']); // Initial tab for "My Habits"

  const handleAddTab = () => {
    const newTabName = `Habit ${tabs.length}`; // Example: New tab name is Habit 1, Habit 2, etc.
    setTabs([...tabs, newTabName]);
  };

  const handleAddHabit = () => {
    // Implement habit-adding logic specific to the selected tab here
  };

  return (
    <View style={styles.container}>
      <Navbar />

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabsContainer}>
        {tabs.map((tab, index) => (
          <TouchableOpacity key={index} style={styles.tab}>
            <Text style={styles.tabText}>{tab}</Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity style={styles.tab} onPress={handleAddTab}>
          <Text style={styles.tabText}>+ New Habit</Text>
        </TouchableOpacity>
      </ScrollView>

      <TouchableOpacity style={styles.fab} onPress={handleAddHabit}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Dashboard;