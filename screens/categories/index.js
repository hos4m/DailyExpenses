import React from "react";
import { Alert } from "react-native";
import { View, Text } from "native-base";
import { FontAwesome } from "react-native-vector-icons";

import ActionButton from "../../components/actionButton";
import styles from "./styles";

export default class CategoriesScreen extends React.Component {
  addCategory() {
    alert("Add Category");
  }

  editCategory() {
    alert("Edit Cateogry");
  }

  deleteCategory() {
    Alert.alert(
      'Confirm',
      'Are you sure you want to delete this category?',
      [
        {text: 'Yes', onPress: () => console.log('Yes pressed')},
        {text: 'No', onPress: () => console.log('No pressed')},
      ],
      { cancelable: true }
    )
  }

  render() {
    return (
      <View>
        <ActionButton title="Add Category" onPressFunc={() => this.addCategory()} />

        <View>
          <View style={styles.entryRow}>
            <View>
              <Text style={styles.text}>Taxi</Text>
            </View>

            <View style={styles.iconsWrapper}>
              <FontAwesome name="edit" style={styles.icon} onPress={() => this.editCategory()} />
              <FontAwesome name="trash" style={[styles.icon, styles.deleteIcon]} onPress={() => this.deleteCategory()} />
            </View>
          </View>

          <View style={styles.entryRow}>
            <View>
              <Text style={styles.text}>Food</Text>
            </View>

            <View style={styles.iconsWrapper}>
              <FontAwesome name="edit" style={styles.icon} onPress={() => this.editCategory()} />
              <FontAwesome name="trash" style={[styles.icon, styles.deleteIcon]} onPress={() => this.deleteCategory()} />
            </View>
          </View>
        </View>
      </View>
    )
  }
};
