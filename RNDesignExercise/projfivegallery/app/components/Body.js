/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';

export default class Body extends Component {
  render() {
    return (
      <ScrollView>

        <View style={styles.bigview}>
          <View style={styles.smallview}>
            <Image
              style={styles.myimage}
              source={require('../img/img1.jpeg')}
               />
          </View>
          <View style={styles.smallview}>
            <Image
              style={styles.myimage}
              source={require('../img/img2.jpeg')}
               />
          </View>
          <View style={styles.smallview}>
            <Image
              style={styles.myimage}
              source={require('../img/img3.jpeg')}
               />
          </View>
          <View style={styles.smallview}>
            <Image
              style={styles.myimage}
              source={require('../img/img4.jpeg')}
               />
          </View>
          <View style={styles.smallview}>
            <Image
              style={styles.myimage}
              source={require('../img/img5.jpeg')}
               />
          </View>
          <View style={styles.smallview}>
            <Image
              style={styles.myimage}
              source={require('../img/img6.jpeg')}
               />
          </View>
          <View style={styles.smallview}>
            <Image
              style={styles.myimage}
              source={require('../img/img1.jpeg')}
               />
          </View>
          <View style={styles.smallview}>
            <Image
              style={styles.myimage}
              source={require('../img/img2.jpeg')}
               />
          </View>
          
        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  bigview: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  smallview: {
    margin: 2,
    height: 100,
    width: (Dimensions.get('window').width / 2) - 4,
  },
  myimage: {
    flex: 1,
    width: null,
    alignSelf: 'stretch',
  }
});
