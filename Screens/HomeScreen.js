import {
  StyleSheet,
  View,
  Text, 
} from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={{color: 'red'}}>Home Screen</Text>
    </View>
  ) 
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center'
  },


})