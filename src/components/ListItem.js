import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import styles from '../style';

const ListItem = props => (
  <TouchableHighlight onPress={props.onPress}>
    <View style={styles.li}>
      <Text style={styles.liText}>{props.item.title}</Text>
    </View>
  </TouchableHighlight>
);

export default ListItem;