import React, { Component } from 'react';
import { connect } from 'redux-zero/react';
import moment from 'moment';
import { View, Text, Button, Form, Item, Input, Picker } from 'native-base';
import { Modal, Alert } from 'react-native';
const PickerItem = Picker.Item;
import { Ionicons } from 'react-native-vector-icons';

import generateID from '../../utils/generateID';
import actions from '../../redux/actions/expenses.actions';
import ActionButton from '../../components/actionButton';
import styles from './styles';
import commonStyles from '../../config/commonStyles';

class ExpensesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.resetAddExpenseFields()
    };
  }

  resetAddExpenseFields() {
    return {
      modalVisible: false,
      modalAmount: null,
      modalSelectedCategory: null
    };
  }

  onAddExpensesClick() {
    if (this.props.categories.length === 0) {
      alert('Please add a category first before adding an expense, you can add a category from the second tab.');
    } else {
      this.setState({ modalVisible: true });
    }
  }

  onModalCategorySelect(val) {
    this.setState({ modalSelectedCategory: val });
  }

  changeModalPrice(val) {
    this.setState({ modalAmount: val });
  }

  modalAdd() {
    const { modalAmount, modalSelectedCategory } = this.state;

    if (modalAmount && modalSelectedCategory) {
      const payload = {
        id: generateID(),
        date: new Date().toString(),
        category: modalSelectedCategory,
        amount: modalAmount
      };
      this.props.addExpense(payload);
      this.setState({ ...this.resetAddExpenseFields() });
    } else {
      alert('All fields are required');
    }
  }

  modalCancel() {
    this.setState({ modalVisible: false });
  }

  deleteExpense(id) {
    Alert.alert(
      'Confirm',
      'Are you sure you want to delete this expense?',
      [
        { text: 'No', onPress: () => console.log('No pressed') },
        { text: 'Yes', onPress: () => this.props.deleteExpense(id) }
      ],
      { cancelable: true }
    );
  }

  render() {
    return (
      <View>
        <ActionButton title="Add Expenses" onPressFunc={() => this.onAddExpensesClick()} />

        {this.props.expenses.length === 0 && <Text style={styles.noItems}>NONE</Text>}

        {this.props.expenses.map(expense => (
          <View style={styles.entryRow} key={expense.id}>
            <View>
              <Text style={styles.entryCategory}>{expense.category}</Text>
              <Text style={styles.entryDate}>{moment(new Date(expense.date)).format('MMMM Do YYYY')}</Text>
            </View>

            <View style={styles.rowRightArea}>
              <Text style={styles.entryExpense}>${expense.amount}</Text>
              <Ionicons
                name="ios-trash-outline"
                style={[commonStyles.icon, commonStyles.deleteIcon]}
                onPress={() => this.deleteExpense(expense.id)}
              />
            </View>
          </View>
        ))}

        <Modal animationType="slide" transparent={false} visible={this.state.modalVisible}>
          <View style={styles.modal}>
            <Form style={styles.modalForm}>
              <Item style={styles.modalFormItem}>
                <Text style={styles.modalDollarSign}>$</Text>
                <Input
                  keyboardType="numeric"
                  placeholder="---"
                  placeholderTextColor="#999"
                  onChangeText={val => this.changeModalPrice(val)}
                  style={styles.modalFormInput}
                />
              </Item>

              <Item style={styles.modalFormItem}>
                <Picker
                  iosHeader="Select Category"
                  placeholder="Select Category"
                  mode="dropdown"
                  selectedValue={this.state.modalSelectedCategory}
                  onValueChange={this.onModalCategorySelect.bind(this)}
                >
                  {this.props.categories.map(category => (
                    <PickerItem key={category.id} label={category.name} value={category.name} />
                  ))}
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

const mapToProps = ({ expenses, categories }) => ({ expenses, categories });
export default connect(mapToProps, actions)(({ expenses, categories, addExpense, deleteExpense }) => (
  <ExpensesScreen
    expenses={expenses}
    categories={categories}
    addExpense={addExpense}
    deleteExpense={deleteExpense}
  />
));
