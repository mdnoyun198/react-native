import { StyleSheet, Text, View, Button, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

export default function HomeScreen() {

  const [message, setMessage] = useState<string>('Hello World!')

  const handleGet = async () => {

    try {

      const res = await fetch('http://192.168.0.100:8081/api/test', { method: "GET" })
      const data = await res.json()
      setMessage(data.message)

    } catch (error) {
      console.log(error)
    }

  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        
        <Text style={styles.text}>{message}</Text>


        <Button title="click" onPress={handleGet} />


      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    fontSize: 24,
  },

});