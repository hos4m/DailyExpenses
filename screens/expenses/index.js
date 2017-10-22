import React from "react";
import { Modal } from "react-native";
import { Text, Button, View } from "native-base";
import { FontAwesome } from "react-native-vector-icons";

import styles from "./styles";

export default class ExpensesScreen extends React.Component {
  onAddExpensesClick() {
    alert("test");
  }

  render() {
    return (
      <View>
        <View style={styles.addButtonView}>
          <Button
            block
            style={styles.addButton}
            onPress={this.onAddExpensesClick.bind(this)}
          >
            <FontAwesome name="plus" style={styles.addIcon} />
            <Text style={styles.addText}>Add Expenses</Text>
          </Button>
        </View>

        {[1, 2, 3, 4].map(() => {
          return [
            <View style={styles.entryRow}>
              <View>
                <Text style={styles.entryCategory}>Taxi</Text>
                <Text style={styles.entryDate}>12 Sep</Text>
              </View>

              <View>
                <Text style={styles.entryExpense}>$15</Text>
              </View>
            </View>
          ];
        })}
      </View>
    );
  }
}
