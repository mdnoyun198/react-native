dark mode
components/DarkLight.tsx
```
import { useColorScheme, Appearance, StyleSheet, View, Pressable, Text } from 'react-native';

function DarkLight() {
  
  const colorScheme = useColorScheme();

  return (
    <View style={styles.content}>
      <Pressable
        style={[styles.btn, colorScheme === 'light' && styles.active]}
        onPress={() => Appearance.setColorScheme('light')}
      >
        <Text style={styles.btnText}>Light</Text>
      </Pressable>

      <Pressable
        style={[styles.btn, colorScheme === 'dark' && styles.active]}
        onPress={() => Appearance.setColorScheme('dark')}
      >
        <Text style={styles.btnText}>Dark</Text>
      </Pressable>
    </View>
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
  active: {
    backgroundColor: '#333',
    borderColor: '#333',
  },
  btnText: {
    color: '#333',
  },
});
```
