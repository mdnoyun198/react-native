
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemedView } from '@/components/themed-view';
import { ThemedText } from '@/components/themed-text';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import DarkLight from '@/components/DarkLight';


export default function HomeScreen() {
  return (
    <ThemedView style={styles.container} >
      <SafeAreaView style={styles.safeArea} >


        <Text className='text-red-500 text-2xl font-bold dark:text-amber-500'>hello</Text>
        <Text>hello</Text>
        <ThemedText>hello</ThemedText>
        <DarkLight />


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
    gap: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.three,
    maxWidth: MaxContentWidth,
  }
});
