import React, { Component } from 'react';
import {
  ListView,
  View,
  AlertIOS,
} from 'react-native';

// components
import StatusBar from './components/StatusBar';
import ActionButton from './components/ActionButton';
import ListItem from './components/ListItem';

// styles
import styles from './style';

// firebase config
import * as firebase from 'firebase';
import config from './config';

// create firebase instance
const firebaseApp = firebase.initializeApp(config);

class Main extends Component {

  constructor(props) {
    super(props);

    // defined ListView row-renew rules
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      })
    };

    // get ref from firebase DB
    let dbRef = firebaseApp.database().ref();
    // dbRef.child( 'DBName' )
    // as DBName isn't exist,it may create..
    this.itemsRef = dbRef.child('items');
  }

  // as app start, reload rows data
  listenForItems(itemsRef) {
    itemsRef.on('value',
      (snap) => {

        let items = [];
        snap.forEach((item) => {
          items.push({
            title: item.val().title,
            _key: item.key
          });
        });

        // set ListView dataSource from items
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(items)
        });
      });
  }

  // reload data from itemsRef of firebase
  componentDidMount() {
    this.listenForItems(this.itemsRef);
  }

  // render ListView renderRow
  renderRow = (item) => {
    const onPress = () => {
      AlertIOS.alert(
        'Complete',
        null,
        [
          { text: 'Delete', onPress: (text) => this.itemsRef.child(item._key).remove() },
          { text: 'Cancel', onPress: (text) => console.log('Cancelled.', item._key) }
        ]
      );
    }

    return (<ListItem item={item} onPress={onPress} />);
  }

  // add item ('title','msg','callback||buttons','default-value")
  addItem = () => {
    AlertIOS.prompt(
      'Add New Item',
      null,
      [
        { text: 'Cancel', onPress: () => console.log('Cancel AddItem'), style: 'cancel' },
        { text: 'Add', onPress: (text) => this.itemsRef.push({ title: text }) }
      ],
      'plain-text'
    );
  }

  // render View
  render() {
    return (
      <View style={styles.container}>
        <StatusBar title="Grocery List" />

        <ListView dataSource={this.state.dataSource}
                  renderRow={this.renderRow}
                  enableEmptySections={true}
                  style={styles.listView} />

        <ActionButton onPress={this.addItem} title="Add" />

      </View>
    );
  }
}

export default Main;
