import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Tab, Tabs, TabHeading, Text } from 'native-base';
import { FontAwesome } from "react-native-vector-icons";

import AppHeader from "./components/header";

export default class App extends React.Component {
  generateHeading(name) {
    return(
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
          <Tab heading={this.generateHeading('money')}>
            <Content style={styles.appContent}>
              <Text>Tab 1</Text>
            </Content>
          </Tab>
          <Tab heading={this.generateHeading('pie-chart')}>
            <Content style={styles.appContent}>
              <Text>Tab 2</Text>
            </Content>
          </Tab>
          <Tab heading={this.generateHeading('list')}>
            <Content style={styles.appContent}>
              <Text>Tab 3</Text>
            </Content>
          </Tab>
          <Tab heading={this.generateHeading('gears')}>
            <Content style={styles.appContent}>
              <Text>Tab 4</Text>
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
