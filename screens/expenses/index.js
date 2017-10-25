import React from "react";
import { View, Text } from "native-base";

import ActionButton from "../../components/actionButton";
import styles from "./styles";

export default class ExpensesScreen extends React.Component {
  onAddExpensesClick() {
    alert("Add Expenses");
  }

  render() {
    return (
      <View>
        <ActionButton title="Add Expenses" onPressFunc={() => this.onAddExpensesClick()} />

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
