import React from "react";
import { Alert } from "react-native";
import { View, Button, Text, Picker } from "native-base";
const PickerItem = Picker.Item;

import styles from "./styles";

export default class SettingsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'light',
    }
  }

  onThemePickerChange(val) {
    this.setState({ theme: val });
  }

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

        <Picker
          iosHeader="Select Theme"
          mode="dropdown"
          selectedValue={this.state.theme}
          onValueChange={this.onThemePickerChange.bind(this)}
          style={styles.themePicker}
        >
          <PickerItem label="Light Theme" value="light" />
          <PickerItem label="Dark Theme" value="dark" />
        </Picker>
      </View>
    )
  }
};
