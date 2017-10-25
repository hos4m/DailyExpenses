import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Tab, Tabs, TabHeading, Text } from 'native-base';
import { FontAwesome } from "react-native-vector-icons";

import AppHeader from "./components/header";
import ExpensesScreen from "./screens/expenses";
import SummaryScreen from "./screens/summary";
import CategoriesScreen from "./screens/categories";
import SettingsScreen from "./screens/settings";

export default class App extends React.Component {
  generateTabHeading(name) {
    return (
      <TabHeading>
        <FontAwesome name={name} style={styles.tabIcon} />
      </TabHeading>
    );
  }

  render() {
    return (
      <Container>
        <AppHeader />

        <Tabs tabBarPosition="bottom">
          <Tab heading={this.generateTabHeading('money')}>
            <Content style={styles.appContent}>
              <ExpensesScreen />
            </Content>
          </Tab>

          <Tab heading={this.generateTabHeading('list')}>
            <Content style={styles.appContent}>
              <CategoriesScreen />
            </Content>
          </Tab>

          <Tab heading={this.generateTabHeading('pie-chart')}>
            <Content style={styles.appContent}>
              <SummaryScreen />
            </Content>
          </Tab>

          <Tab heading={this.generateTabHeading('gears')}>
            <Content style={styles.appContent}>
              <SettingsScreen />
            </Content>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  appContent: {
    padding: 10,
  },

  tabIcon: {
    fontSize: 20,
  },
});
