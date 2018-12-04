import React from 'react';
import { Alert, AsyncStorage } from 'react-native';
import {
  View, Button, Text, Picker
} from 'native-base';

import store, { initialState } from '../../redux/store';
import styles from './styles';

const PickerItem = Picker.Item;

export default class SettingsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'light'
    };
  }

  onThemePickerChange(val) {
    this.setState({ theme: val });
  }

  static showClearModal() {
    Alert.alert(
      'Confirm',
      'Are you sure you want to delete everything INCLUDING Expenses and Categories?',
      [
        { text: 'No', onPress: () => alert('No pressed') },
        { text: 'Yes', onPress: () => SettingsScreen.destroyAllData() }
      ],
      { cancelable: true }
    );
  }

  static async destroyAllData() {
    try {
      await AsyncStorage.clear();
      store.setState(initialState);
    } catch (error) {
      alert(error);
    }
  }

  render() {
    return (
      <View>
        <Button danger block onPress={() => SettingsScreen.showClearModal()}>
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
    );
  }
}
