import {SafeAreaView, StyleSheet} from 'react-native';
import AppEntry from './src/AppEntry';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <AppEntry />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
