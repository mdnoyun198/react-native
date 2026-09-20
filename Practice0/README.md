
















# React Native (Expo) - ইন্টারেক্টিভ নোটিফিকেশন এবং ইউজার প্রেজেন্স গাইড

এই ডকুমেন্টে রিঅ্যাক্ট নেটিভ (Expo) ব্যবহার করে কীভাবে ইনপুটসহ (Reply) নোটিফিকেশন তৈরি করতে হয়, অ্যাপ বন্ধ (Killed) থাকা অবস্থায় কীভাবে সেই রিপ্লাই সার্ভারে পাঠাতে হয় এবং মেসেঞ্জারের মতো অনলাইন/অফলাইন স্ট্যাটাস কীভাবে কাজ করে, তা ধাপে ধাপে আলোচনা করা হয়েছে।

---

## ১. প্রয়োজনীয় প্যাকেজ ইনস্টল করা

নোটিফিকেশন দেখানো এবং অ্যাপ বন্ধ থাকা অবস্থায় ব্যাকগ্রাউন্ডে কোড রান করার জন্য আমাদের দুটি প্যাকেজ লাগবে:

```bash
npx expo install expo-notifications expo-task-manager
```

---

## ২. ইন্টারেক্টিভ নোটিফিকেশন (রিপ্লাই বাটনসহ) এবং ব্যাকগ্রাউন্ড টাস্ক সেটআপ

নোটিফিকেশন ক্যাটাগরি তৈরি এবং ব্যাকগ্রাউন্ড টাস্ক রেজিস্টার করার কাজটি অ্যাপের একেবারে রুট ফাইলে (যেমন: `App.js` বা `index.js`-এর একদম উপরে) করতে হবে। তাহলে অ্যাপ পুরোপুরি বন্ধ (Killed) থাকলেও ওএস (OS) সরাসরি এই কোডটি রান করতে পারবে।

**সম্পূর্ণ কোড উদাহরণ (`App.js`):**

```javascript
import React, { useEffect } from 'react';
import { View, Button, Text } from 'react-native';
import * as Notifications from 'expo-notifications';
import * as TaskManager from 'expo-task-manager';

// ১. ব্যাকগ্রাউন্ড টাস্কের নাম ডিফাইন করা
const BACKGROUND_REPLY_TASK = 'BACKGROUND-REPLY-TASK';

// ২. অ্যাপ কিল্ড বা ব্যাকগ্রাউন্ডে থাকলে রিপ্লাই হ্যান্ডেল করার লজিক
TaskManager.defineTask(BACKGROUND_REPLY_TASK, async ({ data, error }) => {
  if (error) {
    console.error('ব্যাকগ্রাউন্ড টাস্ক এরর:', error);
    return;
  }

  const response = data.notificationResponse;
  
  // চেক করছি ইউজার 'reply_action' বাটনে চাপ দিয়ে মেসেজ পাঠিয়েছে কিনা
  if (response.actionIdentifier === 'reply_action') {
    const userMessage = response.userText; // ইউজারের টাইপ করা মেসেজ
    const senderId = response.notification.request.content.data.senderId;

    console.log(`Sending message: "${userMessage}" to User: ${senderId}`);

    // এখানে আপনার ব্যাকএন্ড এপিআইতে মেসেজটি পাঠাবেন
    /*
    await fetch('[https://your-api.com/send-message](https://your-api.com/send-message)', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ to: senderId, message: userMessage }),
    });
    */
  }
});

// ৩. টাস্কটিকে নোটিফিকেশন ইঞ্জিনের সাথে রেজিস্টার করা
Notifications.registerTaskAsync(BACKGROUND_REPLY_TASK);


// ৪. মূল কম্পোনেন্ট
export default function App() {
  useEffect(() => {
    // নোটিফিকেশনের ক্যাটাগরি এবং ইনপুট বাটন সেটআপ
    async function setupNotification() {
      await Notifications.setNotificationCategoryAsync('chat-reply', [
        {
          identifier: 'reply_action',
          buttonTitle: 'Reply',
          textInput: {
            submitButtonTitle: 'Send',
            placeholder: 'Type your message...',
          },
          options: {
            opensAppToForeground: false, // সেন্ড চাপলে অ্যাপ ওপেন হবে ঘন, ব্যাকগ্রাউন্ডেই কাজ করবে
          },
        },
      ]);
    }

    setupNotification();
  }, []);

  // লোকালি নোটিফিকেশন টেস্ট করার ফাংশন
  const triggerNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Noyun",
        body: "Hello! Are you available to work on the project?",
        categoryIdentifier: 'chat-reply', // এই ক্যাটাগরি আইডি দিলেই ইনপুট বক্স আসবে
        data: { senderId: 'user_123' }, // ব্যাকএন্ডে পাঠানোর জন্য দরকারি ডেটা
      },
      trigger: null, // সাথে সাথে নোটিফিকেশন আসবে
    });
  };

  return (
    <View 'center' 'center', 1, alignItems: flex: justifyContent: style="{{" }}>
      <Text>Notification & Reply Setup</Text>
      <Button onPress="{triggerNotification}" title="Test Notification"/>
    </View>
  );
}
```

---

## ৩. ইউজার অনলাইন/অফলাইন স্ট্যাটাস (প্রেজেন্স সিস্টেম) কীভাবে কাজ করে?

অ্যাপ পুরোপুরি কিল্ড (Killed) অবস্থায় থাকলে ক্লায়েন্ট সাইড (মোবাইল অ্যাপ) থেকে কখনোই সার্ভারকে বারবার বলা সম্ভব নয় যে "আমি অনলাইনে আছি"। এটি মূলত **সার্ভার সাইড বা ব্যাকএন্ড-এর আর্কিটেকচার** দিয়ে হ্যান্ডেল করা হয়। 

মেসেঞ্জার বা হোয়াটসঅ্যাপ ঠিক যেভাবে কাজ করে তার ফ্লো নিচে দেওয়া হলো:

### ক. লাইভ কানেকশন (WebSockets / Socket.io)
সাধারণত অনলাইন স্ট্যাটাস দেখানোর জন্য HTTP রিকোয়েস্টের বদলে **WebSockets** ব্যবহার করা হয়। 
* ইউজার যখন অ্যাপ ওপেন করে, তখন তার ডিভাইস থেকে সার্ভারে একটি সকেট কানেকশন তৈরি হয়।
* কানেকশন তৈরি হওয়া মাত্রই সার্ভার ডেটাবেজে ইউজারের স্ট্যাটাস আপডেট করে দেয়: `status: 'online'`।

### খ. ডিসকানেক্ট বা অ্যাপ কিল্ড হলে (Offline Status)
ইউজার যখন অ্যাপ পুরোপুরি ক্লোজ করে দেয় বা ইন্টারনেট অফ করে দেয়, তখন সকেট কানেকশনটি বিচ্ছিন্ন (Disconnect) হয়ে যায়।
* সার্ভার সাথে সাথে বুঝতে পারে যে কানেকশন কেটে গেছে।
* সার্ভার তখন ডেটাবেজে স্ট্যাটাস আপডেট করে দেয়: `status: 'offline', last_seen: '2026-09-20 12:00 PM'`।
* অন্য কোনো ইউজার যখন আপনার প্রোফাইল দেখবে, তারা সার্ভার থেকে এই ডেটাবেজ স্ট্যাটাসটাই দেখতে পাবে। 

### গ. পুশ নোটিফিকেশনের ভূমিকা
অ্যাপ কিল্ড থাকলে ইউজার অফলাইনেই থাকে। কিন্তু কেউ মেসেজ দিলে সার্ভার তখন সকেট দিয়ে মেসেজ পাঠাতে পারে না (কারণ কানেকশন নেই)। তখন সার্ভার **FCM (Firebase Cloud Messaging) / APNs (Apple Push Notification service)** ব্যবহার করে ইউজারের ফোনে পুশ নোটিফিকেশন পাঠায়। 

---

## সারসংক্ষেপ

1. **ইনপুট নোটিফিকেশন:** `setNotificationCategoryAsync` দিয়ে ইনপুট ফিল্ড ডিফাইন করতে হয় এবং পুশ নোটিফিকেশন পাঠানোর সময় `categoryIdentifier` যুক্ত করতে হয়।
2. **কিল্ড অবস্থায় রিপ্লাই:** `expo-task-manager` দিয়ে অ্যাপের বাইরে ব্যাকগ্রাউন্ডে কোড এক্সিকিউট করে ইউজারের রিপ্লাই ব্যাকএন্ডে পাঠাতে হয়।
3. **অনলাইন স্ট্যাটাস:** এটি অ্যাপ নয়, বরং ব্যাকএন্ডের সকেট কানেকশন (WebSocket Disconnect) দিয়ে কন্ট্রোল করা হয়।










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













