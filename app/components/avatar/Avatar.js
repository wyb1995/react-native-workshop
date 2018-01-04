import React, { Component } from 'react';
import { FlatList, Text, View, StyleSheet, Image } from 'react-native';
import backgroundRound from '../../images/backgroudRound/round.png';

class Avatar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={backgroundRound}
          style={styles.backgroundImage}/>
        <Text style={styles.text}>{this.props.text}</Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flexShrink: 1,
    aspectRatio: 1,
  },
  text: {
    position: 'absolute',
    backgroundColor: 'transparent',
    color: '#fff',
  },
});

export default Avatar;