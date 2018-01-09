import React, { Component } from 'react';
import { FlatList, Text, View, StyleSheet, TouchableOpacity, NativeModules } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Avatar from './avatar/Avatar';

const PhoneContact = NativeModules.PhoneContact;

class PhoneContactList extends Component {

  constructor(props) {
    super(props);
    this.state = {
        data: []
    }
  }

  _keyExtractor = (item, index) => index

  _renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => Actions.phoneContactDetail({item})}>
      <Avatar text={item.familyName}/>
      <Text>{item.fullName}</Text>
      <Text>{item.phoneNumber}</Text>
    </TouchableOpacity>
  )

  _renderSeparator = () => (
    <View style={styles.separator}/>
  )

    componentDidMount() {
        PhoneContact.show().then(data => this.setState({data}));
    }

  render() {

    return (
      <FlatList
        data={this.state.data}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
        ItemSeparatorComponent={this._renderSeparator}
      />
    );
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#ccc',
  },
});

export default PhoneContactList;