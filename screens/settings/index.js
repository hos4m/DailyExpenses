import React from "react";
import { Alert } from "react-native";
import { View, Button, Text } from "native-base";

export default class SettingsScreen extends React.Component {
  clearEverything() {
    Alert.alert(
      'Confirm',
      'Are you sure you want to delete everything INCLUDING Expenses and Categories?',
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
        <Button danger block onPress={() => this.clearEverything()}>
          <Text>Clear Everything?</Text>
        </Button>
      </View>
    )
  }
};
