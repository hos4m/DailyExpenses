import React from 'react';
import { View, Button, Text } from 'native-base';
import { Ionicons } from 'react-native-vector-icons';
import PropTypes from 'prop-types';

import styles from './styles';

const ActionButton = ({ title, onPressFunc }) => (
  <View style={styles.addButtonView}>
    <Button block style={styles.addButton} onPress={onPressFunc}>
      <Ionicons name="ios-add" style={styles.addIcon} />
      <Text style={styles.addText}>{title}</Text>
    </Button>
  </View>
);

ActionButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPressFunc: PropTypes.func.isRequired
};

export default ActionButton;
