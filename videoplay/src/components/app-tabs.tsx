import { Tabs } from 'expo-router';
import { useColorScheme, Pressable, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from '@/constants/theme';
import { House, GraduationCap, BookOpenText, Play, UserRound } from "lucide-react-native";

export default function AppTabs() {
  const scheme = (useColorScheme() ?? 'light') as 'light' | 'dark';
  const isDark = scheme === 'dark';
  const colors = Colors[scheme];

  const insets = useSafeAreaInsets();

  // Active icon color direct handling (Black for Light mode, White for Dark mode)
  const activeIconColor = isDark ? '#FFFFFF' : '#000000';

  const navLinks = [
    { name: "index", title: "Home", icon: House },
    { name: "(users)/courses", title: "Courses", icon: GraduationCap },
    { name: "(users)/notes", title: "Notes", icon: BookOpenText },
    { name: "(users)/tutorials", title: "Tutorials", icon: Play },
    { name: "(users)/profile", title: "Profile", icon: UserRound },
  ];

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: activeIconColor,
        tabBarInactiveTintColor: colors.grayColor,
        tabBarStyle: {
          backgroundColor: colors.background,
          height: 64 + insets.bottom,
          paddingBottom: insets.bottom > 0 ? insets.bottom : 8,
          paddingTop: 6,
          paddingHorizontal: 8,
          borderTopWidth: 1,
          borderTopColor: colors.borderColor,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '500',
        },
        tabBarButton: ({ ref, ...props }) => {
          const isSelected = props.accessibilityState?.selected;

          return (
            <View className="flex-1 p-1">
              <Pressable
                {...props}
                style={[
                  { flex: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 16, overflow: 'hidden' },
                  isSelected && { backgroundColor: colors.backgroundElement }
                ]}
                android_ripple={{
                  borderless: false,
                  color: colors.borderColor,
                }}
              />
            </View>
          );
        },
      }}
    >
      {navLinks.map((item, index) => {
        const IconComponent = item.icon;

        return (
          <Tabs.Screen
            key={index}
            name={item.name}
            options={{
              title: item.title,
              tabBarIcon: ({ color, size }) => (
                <IconComponent color={color} size={size} />
              ),
            }}
          />
        );
      })}
    </Tabs>
  );
}