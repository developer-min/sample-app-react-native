import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>ようこそ！これはSampleです。</Text>
      <Text style = {{ color: '#fff'}}>ようこそ！これはSampleです。</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#272727',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
