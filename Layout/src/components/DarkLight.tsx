import { useColorScheme, Appearance, StyleSheet, View, Pressable, Text } from 'react-native';
import { ThemedText } from './themed-text';

function DarkLight() {

  const colorScheme = useColorScheme();

  return (
    <View style={styles.content}>

      {colorScheme === 'dark' &&
        <Pressable
          style={styles.btn}
          onPress={() => Appearance.setColorScheme('light')}
        >
          <ThemedText>Light</ThemedText>
        </Pressable>
      }

      {colorScheme === 'light' &&
        <Pressable
          style={styles.btn}
          onPress={() => Appearance.setColorScheme('dark')}
        >
          <ThemedText>Dark</ThemedText>
        </Pressable>
      }

    </View >
  );
}

export default DarkLight;

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    gap: 12,
    padding: 12,
  },
  btn: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#999',
  },
});