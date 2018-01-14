import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Tab, Tabs, TabHeading, Text } from 'native-base';
import { Ionicons } from 'react-native-vector-icons';
import { Provider } from 'redux-zero/react';

import store from './redux/store';
import AppHeader from './components/header';
import ExpensesScreen from './screens/expenses';
import SummaryScreen from './screens/summary';
import CategoriesScreen from './screens/categories';
import SettingsScreen from './screens/settings';

export default class App extends React.Component {
  generateTabHeading(name) {
    return (
      <TabHeading>
        <Ionicons name={name} style={styles.tabIcon} />
      </TabHeading>
    );
  }

  render() {
    return (
      <Provider store={store}>
        <Container>
          <AppHeader />

          <Tabs tabBarPosition="bottom">
            <Tab heading={this.generateTabHeading('ios-cash-outline')}>
              <Content style={styles.appContent}>
                <ExpensesScreen />
              </Content>
            </Tab>

            <Tab heading={this.generateTabHeading('ios-list-box-outline')}>
              <Content style={styles.appContent}>
                <CategoriesScreen />
              </Content>
            </Tab>

            <Tab heading={this.generateTabHeading('ios-stats-outline')}>
              <Content style={styles.appContent}>
                <SummaryScreen />
              </Content>
            </Tab>

            <Tab heading={this.generateTabHeading('ios-options-outline')}>
              <Content style={styles.appContent}>
                <SettingsScreen />
              </Content>
            </Tab>
          </Tabs>
        </Container>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  appContent: {
    padding: 10
  },

  tabIcon: {
    fontSize: 20
  }
});
