import React from 'react';
import {
  Header, Body, Left, Right, Title
} from 'native-base';

export default class AppHeader extends React.Component {
  render() {
    return (
      <Header>
        <Left />

        <Body>
          <Title>DailyExpenses</Title>
        </Body>

        <Right />
      </Header>
    );
  }
}
