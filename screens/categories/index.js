import React, { Component } from "react";
import { Alert } from "react-native";
import { View, Text } from "native-base";
import { Ionicons } from "react-native-vector-icons";
import { connect } from "redux-zero/react";

import ActionButton from "../../components/actionButton";
import categoryActions from "../../redux/actions/category.actions";
import styles from "./styles";

const mapToProps = ({ categories }) => ({ categories });

class CategoriesScreen extends Component {  
  addCategory() {
    const { addCategoryAction, categories } = this.props;
    
    addCategoryAction({
      id: new Date(),
      title: "Test",
    });
  }

  editCategory() {
    alert("Edit Cateogry");
  }

  deleteCategory() {
    Alert.alert(
      'Confirm',
      'Are you sure you want to delete this category?',
      [
        { text: 'Yes', onPress: () => console.log('Yes pressed') },
        { text: 'No', onPress: () => console.log('No pressed') },
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
              <Ionicons name="ios-construct-outline" style={styles.icon} onPress={() => this.editCategory()} />
              <Ionicons name="ios-trash-outline" style={[styles.icon, styles.deleteIcon]} onPress={() => this.deleteCategory()} />
            </View>
          </View>

          <View style={styles.entryRow}>
            <View>
              <Text style={styles.text}>Food</Text>
            </View>

            <View style={styles.iconsWrapper}>
              <Ionicons name="ios-construct-outline" style={styles.icon} onPress={() => this.editCategory()} />
              <Ionicons name="ios-trash-outline" style={[styles.icon, styles.deleteIcon]} onPress={() => this.deleteCategory()} />
            </View>
          </View>
        </View>
      </View>
    )
  }
};

export default connect(mapToProps, categoryActions)(CategoriesScreen);
