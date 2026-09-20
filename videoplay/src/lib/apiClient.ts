import * as SecureStore from 'expo-secure-store';

export const API_BASE_URL = 'http://192.168.0.100:3000'; // আপনার সার্ভার ইউআরএল

let signOutCallback: (() => void) | null = null;

// AuthContext থেকে signOut রেজিস্টার করার হেল্পার
export const registerSignOut = (callback: () => void) => {
  signOutCallback = callback;
};

interface FetchOptions extends RequestInit {
  headers?: Record<string, string>;
}

export async function apiClient<T = any>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T> {
  const token = await SecureStore.getItemAsync('userToken');

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(options.headers || {}),
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  // যদি ব্যাকএন্ড থেকে সেশন এক্সপায়ার বা ব্লকড হওয়ার কারণে 401 বা 403 আসে
  if (response.status === 401 || response.status === 403) {
    if (signOutCallback) {
      await signOutCallback(); // অটোমেটিক লগআউট করে লগইন পেজে কিক করবে
    }
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || 'Unauthorized access');
  }

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || 'Something went wrong');
  }

  return response.json();
}