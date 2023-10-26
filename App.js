import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import spacing from './aurora-ui/styles/spacing';

export default function App() {
  for(let i in spacing.padding){
    console.log(i,spacing.padding[i])
  }
  for(let i in spacing.padding){
    console.log(i,spacing.padding[i])
  }
  for(let i in spacing.margin){
    console.log(i,spacing.margin[i])
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
