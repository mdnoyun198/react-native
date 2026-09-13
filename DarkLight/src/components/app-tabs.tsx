import { NativeTabs } from 'expo-router/unstable-native-tabs';
import { useTheme } from '@/context/ThemeContext';


export default function AppTabs() {
  const { themeMode } = useTheme();
  const bgColor = themeMode === 'dark' ? '#000000' : '#ffffff';

  return (

    <NativeTabs
      backgroundColor={bgColor}
      indicatorColor="rgba(255, 162, 2, 0.23)"
      rippleColor="rgba(255, 162, 2, 0.15)"
    >

      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          src={require('@/assets/images/tabIcons/home.png')}
          renderingMode="template"
        />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="(users)/products">
        <NativeTabs.Trigger.Label>Products</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          src={require('@/assets/images/tabIcons/explore.png')}
          renderingMode="template"
        />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="(users)/cart">
        <NativeTabs.Trigger.Label>Cart</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          src={require('@/assets/images/tabIcons/explore.png')}
          renderingMode="template"
        />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="(users)/profile">
        <NativeTabs.Trigger.Label>Profile</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          src={require('@/assets/images/tabIcons/explore.png')}
          renderingMode="template"
        />
      </NativeTabs.Trigger>


    </NativeTabs>

  );
}