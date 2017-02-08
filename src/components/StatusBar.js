import React, { Component } from 'react';
import { View, Text, } from 'react-native';
import styles from '../style';

const StatusBar = props => (
  <View>
    <View style={styles.statusBar} />
    <View style={styles.navBar}>
      <Text style={styles.navBarTitle}>{props.title}</Text>
    </View>
  </View>
);

export default StatusBar;