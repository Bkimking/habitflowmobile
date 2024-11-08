import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { Icon } from 'react-native-elements';
import styles from './navbarstyles';

const Navbar = () => {
  
  return (
    <View style={styles.container}>
      {/* Navbar */}
      <View style={styles.navbar}>
        <Text style={styles.title}>Habit Flow</Text>
        <TouchableOpacity style={styles.iconContainer}>
          <Icon name="more-vertical" type="feather" size={24} color="#000" />
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default Navbar;
