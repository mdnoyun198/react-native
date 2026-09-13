import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DarkLight from "@/components/DarkLight";



export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        <Text style={styles.text}>this is a Home</Text>

        <DarkLight />

      </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1, // পুরো স্ক্রিনের জায়গা নিবে
  },
  content: {
    flex: 1,
    justifyContent: 'center', // স্ক্রিনের মাঝে নিয়ে আসবে
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: '#ff0000', // ব্যাকগ্রাউন্ড কালারের সাথে টেক্সটের কালার নিশ্চিত করার জন্য
  },


})

