import React from "react";
import { Modal } from "react-native";
import { Text, Button, View } from "native-base";
import { FontAwesome } from "react-native-vector-icons";

import styles from "./styles";

export default class ExpensesScreen extends React.Component {
  onAddExpensesClick() {
    alert('test');
  }

  render() {
    return (
      <View>
        <View style={styles.addButtonView}>
          <Button
            success
            style={styles.addButton}
            onPress={this.onAddExpensesClick.bind(this)}
          >
            <FontAwesome name="plus" style={styles.addIcon} />
            <Text style={styles.addText}>Add Expenses</Text>
          </Button>
        </View>
      </View>
    )
  }
};
