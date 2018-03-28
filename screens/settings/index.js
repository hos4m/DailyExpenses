import React from 'react';
import { Alert, AsyncStorage } from 'react-native';
import { View, Button, Text, Picker } from 'native-base';
const PickerItem = Picker.Item;

import store, { initialState } from '../../redux/store';
import styles from './styles';

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

  showClearModal() {
    Alert.alert(
      'Confirm',
      'Are you sure you want to delete everything INCLUDING Expenses and Categories?',
      [
        { text: 'No', onPress: () => console.log('No pressed') },
        { text: 'Yes', onPress: () => this.destroyAllData() }
      ],
      { cancelable: true }
    );
  }

  async destroyAllData() {
    try {
      await AsyncStorage.clear();
      store.setState(initialState);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <View>
        <Button danger block onPress={() => this.showClearModal()}>
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
