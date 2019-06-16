/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import { Container, Header, DeckSwiper, Card, CardItem, Thumbnail, Left, Body, Icon } from 'native-base';


const cards = [
  {
    text: 'Card One',
    name: 'One',
    image: require('./img/img1.jpeg'),
  },
  {
    text: 'Card Two',
    name: 'Two',
    image: require('./img/img2.jpeg'),
  },
  {
    text: 'Card Three',
    name: 'Three',
    image: require('./img/img3.jpeg'),
  },
  {
    text: 'Card Four',
    name: 'Four',
    image: require('./img/img4.jpeg'),
  },
];





export default class SwipeCard extends Component {
  render() {
    return (
      <DeckSwiper
        dataSource={cards}
        renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={item.image} />
                    <Body>
                      <Text>{item.text}</Text>
                      <Text note>Hitesh Clicked</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 300, flex: 1 }} source={item.image} />
                </CardItem>
                <CardItem>
                  <Icon name="heart" style={{ color: '#ED4A6A' }} />
                  <Text>{item.name}</Text>
                </CardItem>
              </Card>
            }


         />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
