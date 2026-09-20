import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, ActivityIndicator, Alert } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { useSession } from '@/context/AuthContext';
import { apiClient } from '@/lib/apiClient';

WebBrowser.maybeCompleteAuthSession();

export default function SignupGoogle() {
  const { signIn } = useSession();
  const [loading, setLoading] = useState(false);

  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    // সব ক্লায়েন্ট আইডি দিয়ে দিন, লাইব্রেরি এরর দেবে না
    webClientId: '122681671971-sk828vc1dco0hkocuv66vqigle1lb3l4.apps.googleusercontent.com',
    androidClientId: '122681671971-vr4hplv4q2me5f8caai77mekq5jqhouk.apps.googleusercontent.com',
    iosClientId: '122681671971-rl1atvvp25mcg5d68qthtebiesbi4lul.apps.googleusercontent.com',
    // এক্সপো গো-এর জন্য প্রক্সি ইউআরএল ফিক্সড করে দিন
    redirectUri: 'https://auth.expo.io/@anonymous/videoplay',
  });

  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;
      if (id_token) {
        handleBackendGoogleLogin(id_token);
      }
    }
  }, [response]);

  const handleBackendGoogleLogin = async (idToken: string) => {
    try {
      setLoading(true);
      const res = await apiClient('/api/auth/google-mobile', {
        method: 'POST',
        body: JSON.stringify({ idToken }),
      });

      if (res.token && res.user) {
        await signIn(res.token, res.user);
      }
    } catch (error: any) {
      Alert.alert('Google Sign-In Error', error.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="w-full mt-1 border border-neutral-300 dark:border-neutral-700 rounded-xl overflow-hidden">
      <TouchableOpacity
        activeOpacity={0.8}
        disabled={!request || loading}
        onPress={() => promptAsync()}
        className="w-full px-4 py-3.5 flex-row gap-3 items-center justify-center rounded-xl"
      >
        {loading ? (
          <ActivityIndicator size="small" color="#666666" />
        ) : (
          <>
            <Image
              source={{ uri: 'https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png' }}
              className="w-5 h-5"
              resizeMode="contain"
            />
            <Text className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
              Sign in with Google
            </Text>
          </>
        )}
      </TouchableOpacity>
    </View>
  );
}