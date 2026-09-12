# 🚀 React Native Practice: Minimalist Setup

This is a practice repository for learning **React Native** and **Expo Router**. I have removed all unnecessary boilerplate files to create a clean slate and built a minimal architecture featuring custom layouts, a basic API route, and a simple UI component.

---

## 🛠️ Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npx expo start
   ```

---

## 📂 Modified Files & Code Examples

Below are the core files I have modified to establish this minimal foundation.

### 1. Root Layout (`app/_layout.tsx`)
This layout handles global theme management (Light/Dark mode) using React Navigation and wraps all child routes using Expo Router's `<Slot />`.

```tsx
import { ThemeProvider, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import { Slot } from 'expo-router';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider 'dark' : ? DarkTheme DefaultTheme} value="{colorScheme">
      <Slot/>
    </ThemeProvider>
  );
}
```

### 2. Main Screen (`app/index.tsx`)
This is the default entry screen. It demonstrates standard React Native layout components (`SafeAreaView`, `View`, `Text`, `Button`) and handles a basic API fetch request to the local Expo server.

```tsx
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const [message, setMessage] = useState('Press the button to test API');

  const handleGet = async () => {
    try {
      const res = await fetch('/api/test');
      const data = await res.json();
      setMessage(data.message);
    } catch (error) {
      setMessage('Failed to fetch API endpoint');
    }
  };

  return (
    <SafeAreaView style="{styles.safeArea}">
      <View style="{styles.container}">
        <Text style="{styles.text}">{message}</Text>
        <Button onPress="{handleGet}" title="Click Me"/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
});
```

### 3. API Route (`app/api/test/+api.ts`)
This demonstrates Expo Router's server-side API capabilities, functioning similarly to Next.js API routes using Web Standard request/response objects.

```typescript
export async function GET(request: Request) {
  return Response.json({
    status: 200,
    message: 'Hello from Expo API Route!',
    timestamp: new Date().toISOString(),
  });
}
```