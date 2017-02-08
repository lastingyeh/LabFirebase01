import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import styles, { constants } from '../style';

const ActionButton = props => (
  <View style={styles.action}>
    <TouchableHighlight
      underlayColor={constants.actionColor}
      onPress={props.onPress}>
      <Text style={styles.actionText}>{props.title}</Text>
    </TouchableHighlight>
  </View>
);

export default ActionButton;