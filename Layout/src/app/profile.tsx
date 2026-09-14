import { StyleSheet, View, Image, Pressable } from "react-native";
import { ThemedView } from "@/components/themed-view";
import { ThemedText } from "@/components/themed-text";
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { SafeAreaView } from "react-native-safe-area-context";

export default function Profile() {
    return (
        <ThemedView style={styles.container}>
            <SafeAreaView style={styles.safeArea}>

                {/* Main Content Wrapper - Removed background color & fixed layout */}
                <View className="w-full flex items-center mt-10">
                    
                    {/* Profile Image Section */}
                    {/* w-32 দিয়ে নির্দিষ্ট সাইজ দেওয়া হয়েছে যেন aspect-square ঠিকমতো কাজ করে */}
                    <View className="w-32 aspect-square rounded-full relative overflow-hidden border-4 border-gray-200 dark:border-gray-800 mb-4">
                        <Image
                            source={{ uri: "https://lh3.googleusercontent.com/a/ACg8ocIF7I_fziE_cTMwXq9GjHJcCbnc4uD11-1DQsILn3PZqZl2EpQ=s261-c-no" }}
                            className="absolute inset-0 h-full w-full"
                            resizeMode="cover"
                        />
                    </View>

                    {/* User Info Section */}
                    <ThemedText type="title" className="text-2xl font-bold mb-1">Developer Bhai</ThemedText>
                    <ThemedText className="text-gray-500 mb-10">developer@example.com</ThemedText>

                    {/* Settings Options */}
                    <View className="w-full gap-4">
                        {/* Option 1 */}
                        <Pressable className="w-full bg-gray-100 dark:bg-gray-800 p-4 rounded-2xl flex-row justify-between items-center active:opacity-70">
                            <ThemedText className="font-semibold text-base">Account Settings</ThemedText>
                        </Pressable>
                        
                        {/* Option 2 (এখানে আগের বানানো Dark/Light বাটন অ্যাড করতে পারেন) */}
                        <Pressable className="w-full bg-gray-100 dark:bg-gray-800 p-4 rounded-2xl flex-row justify-between items-center active:opacity-70">
                            <ThemedText className="font-semibold text-base">App Appearance</ThemedText>
                        </Pressable>
                        
                        {/* Logout Button */}
                        <Pressable className="w-full bg-red-50 dark:bg-red-900/20 p-4 rounded-2xl mt-4 flex-row justify-center items-center active:opacity-70">
                            <ThemedText className="font-bold text-red-500 dark:text-red-400 text-base">Log Out</ThemedText>
                        </Pressable>
                    </View>

                </View>

            </SafeAreaView>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    safeArea: {
        flex: 1,
        paddingHorizontal: Spacing.four,
        alignItems: 'center',
        paddingBottom: BottomTabInset + Spacing.three,
        maxWidth: MaxContentWidth,
    }
});