import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



function Home() {
  return (

    <SafeAreaView className="flex-1 items-center justify-center bg-red-700">
      <View>
        <Text className="text-green-400">hello</Text>
      </View>

    </SafeAreaView>


  )
}

export default Home

