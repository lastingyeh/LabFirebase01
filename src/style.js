import { StyleSheet } from 'react-native';

export const constants = { actionColor: '#24CE84' };

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    flex: 1
  },
  listView: {
    flex: 1
  },
  statusBar: {
    backgroundColor: '#fff',
    height: 22
  },
  navBar: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    justifyContent: 'center',
    height: 44,
    flexDirection: 'row'
  },
  navBarTitle: {
    color: '#444',
    fontSize: 16,
    fontWeight: '500'
  },
  action: {
    backgroundColor: constants.actionColor,
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 14,
    paddingBottom: 16,
  },
  actionText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center'
  },
  li: {
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 14,
    paddingBottom: 16
  },
  liText: {
    color: '#333',
    fontSize: 16
  }
});

export default styles;