import { useColorScheme, Appearance, StyleSheet, View, Pressable } from 'react-native';
import { Sun, Moon } from 'lucide-react-native';
import { Colors } from '@/constants/theme';

function DarkLight() {
  const scheme = (useColorScheme() ?? 'light') as 'light' | 'dark';
  const isDark = scheme === 'dark';
  const colors = Colors[scheme];

  return (
    <View style={styles.content}>
      {isDark && (
        <Pressable
          style={styles.btn}
          onPress={() => Appearance.setColorScheme('light')}
        >
          <Sun size={22} color="#FFFFFF" />
        </Pressable>
      )}

      {!isDark && (
        <Pressable
          style={styles.btn}
          onPress={() => Appearance.setColorScheme('dark')}
        >
          <Moon size={22} color={colors.grayColor} />
        </Pressable>
      )}
    </View>
  );
}

export default DarkLight;

const styles = StyleSheet.create({
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    padding: 4,
    borderRadius: 8,
  },
});