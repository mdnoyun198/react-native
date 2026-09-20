import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen() {
  return (
    <View className="flex-1 bg-slate-950">
      <SafeAreaView className="flex-1 px-4">
        <ScrollView showsVerticalScrollIndicator={false}>
          
          {/* Top Header */}
          <View className="py-4 flex-row justify-between items-center border-b border-slate-800/80">
            <Text className="text-xl font-bold text-white">My Profile</Text>
            <TouchableOpacity className="bg-slate-900 p-2 rounded-xl border border-slate-800">
              <Text className="text-base">⚙️</Text>
            </TouchableOpacity>
          </View>

          {/* User Info Card */}
          <View className="bg-slate-900 border border-slate-800 rounded-2xl p-5 my-5 items-center">
            <View className="relative mb-3">
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400' }}
                className="w-24 h-24 rounded-full border-2 border-blue-500"
              />
              <TouchableOpacity className="absolute bottom-0 right-0 bg-blue-600 p-2 rounded-full border-2 border-slate-900">
                <Text className="text-xs text-white">✏️</Text>
              </TouchableOpacity>
            </View>

            <Text className="text-lg font-bold text-white">Md. Noyun</Text>
            <Text className="text-xs text-slate-400 mt-0.5">noyun@example.com</Text>

            {/* Account Status Badge */}
            <View className="mt-3 bg-blue-950 border border-blue-800/60 px-3 py-1 rounded-full">
              <Text className="text-blue-400 text-[11px] font-semibold">
                Premium Student
              </Text>
            </View>
          </View>

          {/* Learning Progress Quick Stats */}
          <View className="flex-row justify-between gap-3 mb-6">
            <View className="flex-1 bg-slate-900 border border-slate-800 p-3.5 rounded-xl items-center">
              <Text className="text-xl font-bold text-blue-500">12</Text>
              <Text className="text-[11px] text-slate-400 mt-0.5">Enrolled</Text>
            </View>
            <View className="flex-1 bg-slate-900 border border-slate-800 p-3.5 rounded-xl items-center">
              <Text className="text-xl font-bold text-emerald-500">8</Text>
              <Text className="text-[11px] text-slate-400 mt-0.5">Completed</Text>
            </View>
            <View className="flex-1 bg-slate-900 border border-slate-800 p-3.5 rounded-xl items-center">
              <Text className="text-xl font-bold text-amber-500">15h</Text>
              <Text className="text-[11px] text-slate-400 mt-0.5">Watch Time</Text>
            </View>
          </View>

          {/* Account Options List */}
          <Text className="text-sm font-semibold text-slate-400 mb-2 px-1">
            Account Settings
          </Text>

          <View className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden mb-6">
            
            <TouchableOpacity className="flex-row items-center justify-between p-4 border-b border-slate-800/60">
              <View className="flex-row items-center gap-3">
                <Text className="text-base">📚</Text>
                <Text className="text-sm font-medium text-slate-200">My Enrolled Courses</Text>
              </View>
              <Text className="text-slate-500 text-xs">➔</Text>
            </TouchableOpacity>

            <TouchableOpacity className="flex-row items-center justify-between p-4 border-b border-slate-800/60">
              <View className="flex-row items-center gap-3">
                <Text className="text-base">📑</Text>
                <Text className="text-sm font-medium text-slate-200">Downloaded Notes & PDFs</Text>
              </View>
              <Text className="text-slate-500 text-xs">➔</Text>
            </TouchableOpacity>

            <TouchableOpacity className="flex-row items-center justify-between p-4 border-b border-slate-800/60">
              <View className="flex-row items-center gap-3">
                <Text className="text-base">💳</Text>
                <Text className="text-sm font-medium text-slate-200">Payment History</Text>
              </View>
              <Text className="text-slate-500 text-xs">➔</Text>
            </TouchableOpacity>

            <TouchableOpacity className="flex-row items-center justify-between p-4">
              <View className="flex-row items-center gap-3">
                <Text className="text-base">🔔</Text>
                <Text className="text-sm font-medium text-slate-200">Notification Preferences</Text>
              </View>
              <Text className="text-slate-500 text-xs">➔</Text>
            </TouchableOpacity>

          </View>

          {/* Logout Button */}
          <TouchableOpacity className="bg-red-500/10 border border-red-500/30 p-4 rounded-2xl items-center mb-8">
            <Text className="text-red-500 font-semibold text-sm">Log Out</Text>
          </TouchableOpacity>

        </ScrollView>
      </SafeAreaView>
    </View>
  );
}