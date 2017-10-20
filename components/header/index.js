import React from 'react';
import { TouchableHighlight, View } from "react-native";
import { Header, Body, Left, Right, Title, Text } from "native-base";
import { FontAwesome } from "react-native-vector-icons";

import styles from "./styles";

export default class AppHeader extends React.Component {
  plusOnPress() {
    alert('test');
  }

  render() {
    return (
      <Header>
        <Left />

        <Body>
          <Title>DailyExpenses</Title>
        </Body>

        <Right style={styles.headerRight}>
          <TouchableHighlight onPress={() => this.plusOnPress()} underlayColor="transparent">
            <View style={styles.headerRightView}>
              <FontAwesome name='plus' style={styles.plusIcon} />
              <Text>Add</Text>
            </View>
          </TouchableHighlight>
        </Right>
      </Header>
    )
  }
};
