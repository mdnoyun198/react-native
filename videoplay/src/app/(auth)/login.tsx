import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import SignupGoogle from '../../components/SignupGoogle';
import { useState } from 'react';




export default function LoginScreen() {

  const [formData, setFormData] = useState({ email: '', password: '' })

  const handleSubmit = async() => {




  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      className="flex-1 bg-white dark:bg-neutral-900 px-6 "
      showsVerticalScrollIndicator={false}
    >
      <View className="w-full max-w-md mx-auto flex-col justify-center items-center gap-4 py-8">

        {/* Title & Info Message */}
        <View className="items-center gap-1 mb-2">
          <Text className="text-2xl font-bold text-neutral-900 dark:text-white">
            Welcome Back
          </Text>
          <Text className="text-sm text-neutral-500 dark:text-neutral-400">
            Enter login information
          </Text>
        </View>

        {/* Email Input */}
        <TextInput
          placeholder="Enter Email"
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="#9ca3af"
          className="w-full border border-neutral-300 dark:border-neutral-700 rounded-xl px-4 py-3.5 text-sm text-neutral-900 dark:text-white bg-neutral-50 dark:bg-neutral-800"
          value={formData.email}
          onChangeText={(text) => setFormData({ ...formData, email: text })}
        />

        {/* Password Input */}
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="#9ca3af"
          className="w-full border border-neutral-300 dark:border-neutral-700 rounded-xl px-4 py-3.5 text-sm text-neutral-900 dark:text-white bg-neutral-50 dark:bg-neutral-800"
          value={formData.password}
          onChangeText={(text) => setFormData({ ...formData, password: text })}
        />

        {/* Login Button */}
        <TouchableOpacity
          activeOpacity={0.8}
          className="w-full bg-blue-500 rounded-xl py-3.5 items-center justify-center mt-1"
          onPress={handleSubmit}
        >
          <Text className="text-white text-sm font-semibold">
            Login
          </Text>
        </TouchableOpacity>

        {/* Bottom Links & Google Login */}
        <View className="flex-col gap-4 w-full mt-2">

          {/* Forgot Password Link */}
          <TouchableOpacity activeOpacity={0.7} className="self-center">
            <Text className="text-pink-500 text-sm font-medium">
              Forgot your password?
            </Text>
          </TouchableOpacity>

          {/* Google Sign-In Component */}
          <SignupGoogle />

          {/* Signup Redirect Link */}
          <View className="flex-row justify-center items-center mt-1">
            <Text className="text-sm text-neutral-600 dark:text-neutral-400">
              You have no account?{" "}
            </Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Text className="text-pink-500 text-sm font-semibold">
                Signup
              </Text>
            </TouchableOpacity>
          </View>

        </View>

      </View>
    </ScrollView>
  );
}