import {StyleSheet, View } from 'react-native';

import { Appbar } from 'react-native-paper';

const  App = () => {
  return (
    <View style={styles.container}>
      <Appbar.Header>
      <Appbar.Content title="App Test" />
    </Appbar.Header>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 52
  }
});

export default App;
