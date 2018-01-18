import React, { Component } from 'react';
import { Alert } from 'react-native';
import { View, Text } from 'native-base';
import { Ionicons } from 'react-native-vector-icons';
import { connect } from 'redux-zero/react';
import Prompt from 'react-native-prompt';

import actions from '../../redux/actions/category.actions';
import ActionButton from '../../components/actionButton';
import categoryActions from '../../redux/actions/category.actions';
import styles from './styles';

const mapToProps = ({ categories }) => ({ categories });
export default connect(mapToProps, actions)(({ categories, addCategory }) => (
  <CategoriesScreen categories={categories} addCategory={addCategory} />
));

class CategoriesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddModalVisible: false
    };
  }

  addCategory(value) {
    if (value.length > 0) {
      const payload = {
        id: new Date().toString(),
        name: value
      };

      this.props.addCategory(payload);
      this.setState({ isAddModalVisible: false });
    } else {
      alert("Name can't be blank");
    }
  }

  editCategory() {
    alert('Edit Cateogry');
  }

  deleteCategory() {
    Alert.alert(
      'Confirm',
      'Are you sure you want to delete this category?',
      [
        { text: 'Yes', onPress: () => console.log('Yes pressed') },
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
                <Ionicons name="ios-construct-outline" style={styles.icon} onPress={() => this.editCategory()} />
                <Ionicons
                  name="ios-trash-outline"
                  style={[styles.icon, styles.deleteIcon]}
                  onPress={() => this.deleteCategory()}
                />
              </View>
            </View>
          ))}
        </View>
      </View>
    );
  }
}
