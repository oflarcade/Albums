import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
//create Component
const App = () => (
<View style={{ flex: 1 }}>
    <Header HeaderText={'Albums'} />
    <AlbumList />
  </View>
);

AppRegistry.registerComponent('albums', () => App);
