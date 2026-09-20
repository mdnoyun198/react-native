import React, { createContext, useContext, useEffect, useState } from 'react';
import * as SecureStore from 'expo-secure-store';
import * as SplashScreen from 'expo-splash-screen';
import { API_BASE_URL, registerSignOut } from '../lib/apiClient';

SplashScreen.preventAutoHideAsync();

type UserData = {
  _id?: string;
  name?: string;
  email?: string;
  image?: string;
  status?: string;
};

type AuthContextType = {
  session: string | null;
  user: UserData | null;
  isLoading: boolean;
  signIn: (token: string, userObj?: UserData) => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({
  session: null,
  user: null,
  isLoading: true,
  signIn: async () => {},
  signOut: async () => {},
});

export function AuthProvider({ children }: React.PropsWithChildren) {
  const [session, setSession] = useState<string | null>(null);
  const [user, setUser] = useState<UserData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const signOut = async () => {
    setSession(null);
    setUser(null);
    await SecureStore.deleteItemAsync('userToken');
    await SecureStore.deleteItemAsync('userData');
  };

  useEffect(() => {
    // 401 এরর পেলে যাতে কিক-আউট করতে পারে তার জন্য apiClient এ signOut রেজিস্টার করা
    registerSignOut(signOut);

    async function verifyAndLoadSession() {
      try {
        const storedToken = await SecureStore.getItemAsync('userToken');

        if (storedToken) {
          // অ্যাপ অপেন হওয়ার সময় একবারই ব্যাকএন্ডে সেশন ভ্যালিডিটি চেক করা
          const response = await fetch(`${API_BASE_URL}/api/auth/check`, {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${storedToken}`,
              'Content-Type': 'application/json',
            },
          });

          const data = await response.json();

          if (response.ok && data.valid) {
            setSession(storedToken);
            setUser(data.user);
            await SecureStore.setItemAsync('userData', JSON.stringify(data.user));
          } else {
            await signOut();
          }
        }
      } catch (e) {
        console.error('Initial verification error:', e);
        await signOut();
      } finally {
        setIsLoading(false);
        await SplashScreen.hideAsync();
      }
    }

    verifyAndLoadSession();
  }, []);

  const signIn = async (token: string, userObj?: UserData) => {
    setSession(token);
    setUser(userObj || null);
    await SecureStore.setItemAsync('userToken', token);
    if (userObj) {
      await SecureStore.setItemAsync('userData', JSON.stringify(userObj));
    }
  };

  return (
    <AuthContext.Provider value={{ session, user, isLoading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useSession() {
  const value = useContext(AuthContext);
  if (!value) {
    throw new Error('useSession must be used within an AuthProvider');
  }
  return value;
}