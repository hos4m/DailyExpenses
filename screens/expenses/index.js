import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'redux-zero/react';
import moment from 'moment';
import {
  View, Text, Button, Form, Item, Input, Picker
} from 'native-base';
import { Modal, Alert } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import Prompt from 'rn-prompt';

import getDefaultExpensesFields from '../../utils/expensesUtils';
import generateID from '../../utils/generateID';
import actions from '../../redux/actions/expenses.actions';
import ActionButton from '../../components/actionButton';
import styles from './styles';
import commonStyles from '../../config/commonStyles';
import isNumeric from '../../utils/isNumeric';

const PickerItem = Picker.Item;

class ExpensesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...getDefaultExpensesFields()
    };
  }

  onAddExpensesClick() {
    if (this.props.categories.length === 0) {
      alert(
        'Please add a category first before adding an expense, you can add a category from the second tab.'
      );
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
      this.setState({ ...getDefaultExpensesFields() });
    } else {
      alert('All fields are required');
    }
  }

  editExpense(newExpenseAmount) {
    if (isNumeric(newExpenseAmount)) {
      try {
        this.props.editExpense(this.state.expenseBeingEdited.id, newExpenseAmount);
        this.setState({ isEditModalVisible: false });
      } catch (error) {
        alert(error);
      }
    } else {
      alert('Only numbers are allowed');
    }
  }

  deleteExpense(id) {
    Alert.alert(
      'Confirm',
      'Are you sure you want to delete this expense?',
      [
        { text: 'No', onPress: () => alert('No pressed') },
        { text: 'Yes', onPress: () => this.props.deleteExpense(id) }
      ],
      { cancelable: true }
    );
  }

  render() {
    const { expenses, categories } = this.props;
    const {
      modalVisible,
      modalSelectedCategory,
      isEditModalVisible,
      expenseBeingEdited
    } = this.state;

    return (
      <Fragment>
        <ActionButton title="Add Expenses" onPressFunc={() => this.onAddExpensesClick()} />

        {expenses.length === 0 && <Text style={styles.noItems}>NONE</Text>}

        <Prompt
          title={expenseBeingEdited.category}
          defaultValue={expenseBeingEdited.amount}
          visible={isEditModalVisible}
          submitText="Save"
          onCancel={() => this.setState({ isEditModalVisible: false })}
          onSubmit={newExpenseAmount => this.editExpense(newExpenseAmount)}
        />

        {expenses.map(expense => (
          <View style={styles.entryRow} key={expense.id}>
            <Text style={styles.entryExpense}>${expense.amount}</Text>

            <View>
              <Text style={styles.entryCategory}>{expense.category}</Text>
              <Text style={styles.entryDate}>
                {moment(new Date(expense.date)).format('MMMM Do YYYY')}
              </Text>
            </View>

            <View style={commonStyles.rightSideIconsWrapper}>
              <Ionicons
                name="ios-construct-outline"
                style={commonStyles.icon}
                onPress={() => {
                  this.setState({ expenseBeingEdited: expense, isEditModalVisible: true });
                }}
              />
              <Ionicons
                name="ios-trash-outline"
                style={[commonStyles.icon, commonStyles.deleteIcon]}
                onPress={() => this.deleteExpense(expense.id)}
              />
            </View>
          </View>
        ))}

        <Modal animationType="slide" transparent={false} visible={modalVisible}>
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
                  selectedValue={modalSelectedCategory}
                  onValueChange={this.onModalCategorySelect.bind(this)}
                >
                  {categories.map(category => (
                    <PickerItem key={category.id} label={category.name} value={category.name} />
                  ))}
                </Picker>
              </Item>
            </Form>

            <View style={styles.modalButtons}>
              <Button block success onPress={() => this.modalAdd()}>
                <Text>Add</Text>
              </Button>

              <Button
                block
                danger
                onPress={() => this.setState({ modalVisible: false })}
                style={{ marginTop: 11 }}
              >
                <Text>Cancel</Text>
              </Button>
            </View>
          </View>
        </Modal>
      </Fragment>
    );
  }
}

const mapToProps = ({ expenses, categories }) => ({ expenses, categories });
export default connect(
  mapToProps,
  actions
)(({
  expenses, categories, addExpense, editExpense, deleteExpense
}) => (
  <ExpensesScreen
    expenses={expenses}
    categories={categories}
    addExpense={addExpense}
    editExpense={editExpense}
    deleteExpense={deleteExpense}
  />
));

ExpensesScreen.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  addExpense: PropTypes.func.isRequired,
  editExpense: PropTypes.func.isRequired,
  deleteExpense: PropTypes.func.isRequired
};
