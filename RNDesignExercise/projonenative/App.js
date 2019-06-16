import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Superman from './components/Superman';
import Red from './components/Red';
import Blue from './components/Blue';
import Green from './components/Green';

export default class App extends React.Component {
  render() {
    return (

      <View style={styles.container}>
        <Red />
        <Blue />
        <Green />
      </View>



    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',

  },

});
