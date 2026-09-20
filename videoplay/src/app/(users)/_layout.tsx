import { View } from 'react-native';
import SearchTab from '@/components/SearchTab';
import AppTabs from '@/components/app-tabs';

export default function UsersLayout() {
  return (
    <View style={{ flex: 1 }}>
      <SearchTab />
      <AppTabs />
    </View>
  );
}