import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-native';
import { View, Text } from 'native-base';
import { Ionicons } from 'react-native-vector-icons';
import { connect } from 'redux-zero/react';
import Prompt from 'rn-prompt';

import generateID from '../../utils/generateID';
import actions from '../../redux/actions/category.actions';
import ActionButton from '../../components/actionButton';
import styles from './styles';
import commonStyles from '../../config/commonStyles';

class CategoriesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddModalVisible: false,
      isEditModalVisible: false,
      editModalCategory: {}
    };
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
    this.setState({ isEditModalVisible: true, editModalCategory: category });
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
        { text: 'No', onPress: () => alert('No pressed') },
        { text: 'Yes', onPress: () => this.props.deleteCategory(id) }
      ],
      { cancelable: true }
    );
  }

  render() {
    return (
      <Fragment>
        <ActionButton
          title="Add Category"
          onPressFunc={() => this.setState({ isAddModalVisible: true })}
        />

        <Prompt
          title="Category Name"
          visible={this.state.isAddModalVisible}
          onCancel={() => this.setState({ isAddModalVisible: false })}
          onSubmit={value => this.addCategory(value)}
        />

        {this.props.categories.length === 0 && <Text style={styles.noItems}>NONE</Text>}

        <View>
          {this.props.categories.map(category => (
            <View key={category.id} style={styles.entryRow}>
              <Prompt
                title="Edit Category Name"
                defaultValue={this.state.editModalCategory.name}
                visible={this.state.isEditModalVisible}
                onCancel={() => this.setState({ isEditModalVisible: false })}
                onSubmit={value => this.editCategoryOnSubmit(this.state.editModalCategory.id, value)
                }
              />

              <View>
                <Text style={styles.text}>{category.name}</Text>
              </View>

              <View style={commonStyles.rightSideIconsWrapper}>
                <Ionicons
                  name="ios-construct-outline"
                  style={commonStyles.icon}
                  onPress={() => this.editCategoryOnClick(category)}
                />

                <Ionicons
                  name="ios-trash-outline"
                  style={[commonStyles.icon, commonStyles.deleteIcon]}
                  onPress={() => this.deleteCategory(category.id)}
                />
              </View>
            </View>
          ))}
        </View>
      </Fragment>
    );
  }
}

const mapToProps = ({ categories }) => ({ categories });
export default connect(
  mapToProps,
  actions
)(({
  categories, getCategories, addCategory, editCategory, deleteCategory
}) => (
  <CategoriesScreen
    categories={categories}
    getCategories={getCategories}
    addCategory={addCategory}
    editCategory={editCategory}
    deleteCategory={deleteCategory}
  />
));

CategoriesScreen.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  addCategory: PropTypes.func.isRequired,
  editCategory: PropTypes.func.isRequired,
  deleteCategory: PropTypes.func.isRequired
};
