import React from "react";
import { View, Text } from "native-base";

import ActionButton from "../../components/actionButton";
import styles from "./styles";

export default class CategoriesScreen extends React.Component {
  onAddCategoryPress() {
    alert("Add Category");
  }

  render() {
    return (
      <View>
        <ActionButton title="Add Category" onPressFunc={() => this.onAddCategoryPress()} />
      </View>
    )
  }
};
