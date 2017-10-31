import React from "react";
import { View, Text, Button, Form, Item, Input, Picker } from "native-base";
import { Modal } from "react-native";
const PickerItem = Picker.Item;

import ActionButton from "../../components/actionButton";
import styles from "./styles";

export default class ExpensesScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      modalAmount: null,
      modalSelectedCategory: null,
    };
  }

  onAddExpensesClick() {
    this.setState({ modalVisible: true });
  }

  onModalCategorySelect(val) {
    this.setState({ modalSelectedCategory: val });
  }

  changeModalPrice(val) {
    this.setState({ modalAmount: val })
  }

  modalAdd() {
    const { modalAmount, modalSelectedCategory } = this.state;

    if (modalAmount && modalSelectedCategory) {
      alert("Expnses add functionality");
    } else {
      alert("All fields are required");
    }
  }

  modalCancel() {
    this.setState({ modalVisible: false });
  }

  render() {
    return (
      <View>
        <ActionButton
          title="Add Expenses"
          onPressFunc={() => this.onAddExpensesClick()}
        />

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

        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
        >
          <View style={styles.modal}>
            <Form style={styles.modalForm}>
              <Item style={styles.modalFormItem}>
                <Text style={styles.modalDollarSign}>$</Text>
                <Input
                  keyboardType="numeric"  
                  placeholder="---"
                  placeholderTextColor="#999"
                  onChangeText={(val) => this.changeModalPrice(val)}
                  style={styles.modalFormInput} />
              </Item>

              <Item style={styles.modalFormItem}>
                <Picker
                  iosHeader="Select Category"
                  placeholder="Select Category"
                  mode="dropdown"
                  selectedValue={this.state.modalSelectedCategory}
                  onValueChange={this.onModalCategorySelect.bind(this)}
                >
                  <PickerItem label="Taxi" value="taxi" />
                  <PickerItem label="Food" value="food" />
                </Picker>
              </Item>
            </Form>

            <View style={styles.modalButtons}>
              <Button block success onPress={() => this.modalAdd()}>
                <Text>Add</Text>
              </Button>

              <Button block danger onPress={() => this.modalCancel()} style={{ marginTop: 11 }}>
                <Text>Cancel</Text>
              </Button>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
