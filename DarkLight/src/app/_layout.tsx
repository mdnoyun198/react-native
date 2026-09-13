import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import * as SystemUI from 'expo-system-ui';
import { View, StatusBar } from 'react-native';
import { CustomThemeProvider, useTheme } from '@/context/ThemeContext';

import { AnimatedSplashOverlay } from '@/components/animated-icon';
import AppTabs from '@/components/app-tabs';

SplashScreen.preventAutoHideAsync();

function LayoutContent() {
  const { themeMode } = useTheme();
  const bgColor = themeMode === 'dark' ? '#000000' : '#ffffff' ;

  // root native window background sync করা হচ্ছে
  useEffect(() => {
    SystemUI.setBackgroundColorAsync(bgColor);
  }, [bgColor]);

  return (
    <View style={{ flex: 1, backgroundColor: bgColor }}>
      <StatusBar
        barStyle={themeMode === 'dark' ? 'light-content' : 'dark-content'}
        translucent
        backgroundColor="transparent"
      />

      <AnimatedSplashOverlay />
      <AppTabs />
    </View>
  );
}

export default function TabLayout() {
  return (
    <CustomThemeProvider>
      <LayoutContent />
    </CustomThemeProvider>
  );
}