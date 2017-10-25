import React, { PropTypes } from "react";
import { View, Button, Text } from "native-base";
import { FontAwesome } from "react-native-vector-icons";

import styles from "./styles";

const ActionButton = ({ title, onPressFunc }) => (
  <View style={styles.addButtonView}>
    <Button block style={styles.addButton} onPress={onPressFunc}>
      <FontAwesome name="plus" style={styles.addIcon} />
      <Text style={styles.addText}>{title}</Text>
    </Button>
  </View>
);

ActionButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPressFunc: PropTypes.func.isRequired,
}

export default ActionButton;
