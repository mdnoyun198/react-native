import React from 'react';
import { View, TextInput, Pressable, useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Search, Menu } from 'lucide-react-native';
import { Colors } from '@/constants/theme';
import DarkLight from './DarkLight';

export default function SearchTab() {
  const scheme = (useColorScheme() ?? 'light') as 'light' | 'dark';
  const colors = Colors[scheme];

  return (
    <SafeAreaView edges={['top']} style={{ backgroundColor: colors.background }}>
      <View 
        className="flex-row items-center justify-between gap-3 px-4 py-3"
        style={{ borderBottomWidth: 1, borderBottomColor: colors.borderColor }}
      >
        {/* Menu Button */}
        <Pressable 
          android_ripple={{ color: colors.borderColor, borderless: true }}
          className="p-1 rounded-full"
        >
          <Menu size={24} color={colors.text} />
        </Pressable>

        {/* Responsive Clean Search Bar */}
        <View 
          className="flex-1 flex-row items-center gap-2 rounded-full px-3 py-1"
          style={{ borderWidth: 1, borderColor: colors.borderColor, backgroundColor: 'transparent' }}
        >
          <Search size={16} color={colors.grayColor} />
          <TextInput
            placeholder="Search..."
            placeholderTextColor={colors.grayColor}
            className="flex-1 text-sm py-1.5"
            style={{ color: colors.text }}
          />
        </View>

        {/* Theme Toggle Button */}
        <DarkLight />
      </View>
    </SafeAreaView>
  );
}