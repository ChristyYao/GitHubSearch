/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { users } from './datasource/data';

export default class ChatList extends Component {
  render() {
    return (
      <ScrollView>
        <List>
          {users.map((user) =>
            <TouchableOpacity>
              <ListItem
                key={user.login.username}
                roundAvatar
                avatar={{uri: user.picture.thumbnail }}
                title={`${user.name.first.toUpperCase()}`}
                subtitle={user.email}
                 />

            </TouchableOpacity>

          )}

        </List>
      </ScrollView>
    );
  }
}

ChatList.defaultProps = { ...users }
