import React, { Component } from 'react';
import { Alert } from 'react-native';
import { View, Text } from 'native-base';
import { Ionicons } from 'react-native-vector-icons';
import { connect } from 'redux-zero/react';
import Prompt from 'react-native-prompt';

import generateID from '../../utils/generateID';
import actions from '../../redux/actions/category.actions';
import ActionButton from '../../components/actionButton';
import styles from './styles';

class CategoriesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddModalVisible: false,
      isEditModalVisible: false,
      editModalName: ''
    };
  }

  componentWillMount() {
    this.props.getCategories();
  }

  addCategory(value) {
    if (value.length > 0) {
      const findExistingCategory = this.props.categories.find(
        category => category.name.toLowerCase() === value.toLowerCase()
      );

      if (!findExistingCategory) {
        const payload = { id: generateID(), name: value };
        this.props.addCategory(payload);
        this.setState({ isAddModalVisible: false });
      } else {
        alert('Category already exists');
      }
    } else {
      alert("Name can't be blank");
    }
  }

  editCategoryOnClick(category) {
    this.setState({ isEditModalVisible: true, editModalName: category.name });
  }

  editCategoryOnSubmit(id, value) {
    if (value.length > 0) {
      const findExistingCategory = this.props.categories.find(
        category => category.name.toLowerCase() === value.toLowerCase()
      );

      if (!findExistingCategory) {
        this.props.editCategory(id, value);
        this.setState({ isEditModalVisible: false, editModalName: '' });
      } else {
        alert('Category already exists');
      }
    } else {
      alert("Name can't be blank");
    }
  }

  deleteCategory(id) {
    Alert.alert(
      'Confirm',
      'Are you sure you want to delete this category?',
      [
        { text: 'Yes', onPress: () => this.props.deleteCategory(id) },
        { text: 'No', onPress: () => console.log('No pressed') }
      ],
      { cancelable: true }
    );
  }

  render() {
    return (
      <View>
        <ActionButton title="Add Category" onPressFunc={() => this.setState({ isAddModalVisible: true })} />

        <Prompt
          title="Category Name"
          placeholder="Start typing"
          visible={this.state.isAddModalVisible}
          onCancel={() => this.setState({ isAddModalVisible: false })}
          onSubmit={value => this.addCategory(value)}
        />

        {this.props.categories.length === 0 && <Text style={styles.noItems}>NONE</Text>}

        <View>
          {this.props.categories.map(category => (
            <View key={category.id} style={styles.entryRow}>
              <View>
                <Text style={styles.text}>{category.name}</Text>
              </View>

              <View style={styles.iconsWrapper}>
                <Ionicons
                  name="ios-construct-outline"
                  style={styles.icon}
                  onPress={() => this.editCategoryOnClick(category)}
                />

                <Prompt
                  title="Category New Name"
                  defaultValue={this.state.editModalName}
                  placeholder="Start typing"
                  visible={this.state.isEditModalVisible}
                  onCancel={() => this.setState({ isEditModalVisible: false })}
                  onSubmit={value => this.editCategoryOnSubmit(category.id, value)}
                />

                <Ionicons
                  name="ios-trash-outline"
                  style={[styles.icon, styles.deleteIcon]}
                  onPress={() => this.deleteCategory(category.id)}
                />
              </View>
            </View>
          ))}
        </View>
      </View>
    );
  }
}

const mapToProps = ({ categories }) => ({ categories });

export default connect(mapToProps, actions)(
  ({ categories, getCategories, addCategory, editCategory, deleteCategory }) => (
    <CategoriesScreen
      categories={categories}
      getCategories={getCategories}
      addCategory={addCategory}
      editCategory={editCategory}
      deleteCategory={deleteCategory}
    />
  )
);
