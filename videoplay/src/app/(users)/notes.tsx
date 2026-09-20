import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Linking,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// নোটস বা লেকচার শিট ডাটা
const NOTES_DATA = [
  {
    id: '1',
    title: 'Complete English Grammar Cheat Sheet PDF',
    category: 'Grammar',
    size: '2.4 MB',
    downloads: '1.2k',
    isFree: true,
    fileUrl: 'https://example.com/sample.pdf',
  },
  {
    id: '2',
    title: 'Top 500 Vocabulary Words for IELTS & Admissions',
    category: 'Vocabulary',
    size: '4.1 MB',
    downloads: '3.5k',
    isFree: true,
    fileUrl: 'https://example.com/sample.pdf',
  },
  {
    id: '3',
    title: 'Spoken English Daily Usage Sentences',
    category: 'Spoken',
    size: '1.8 MB',
    downloads: '950',
    isFree: true,
    fileUrl: 'https://example.com/sample.pdf',
  },
  {
    id: '4',
    title: 'Academic Writing Rules & Sentence Structures',
    category: 'Writing',
    size: '3.0 MB',
    downloads: '2.1k',
    isFree: false,
    price: '৳ ৫০',
    fileUrl: 'https://example.com/sample.pdf',
  },
];

export default function HomeScreen() {
  const handleDownload = (url: string) => {
    Linking.openURL(url).catch((err) =>
      console.error("Couldn't open file", err)
    );
  };

  return (
    <View className="flex-1 ">
      <SafeAreaView className="flex-1 px-4">
        <ScrollView showsVerticalScrollIndicator={false}>
          
          {/* Header Section */}
          <View className="mt-4 mb-6">
            <Text className="text-2xl font-bold text-white">
              Study Notes & PDF 📚
            </Text>
            <Text className="text-sm text-slate-400 mt-1">
              Download lecture notes and practice sheets for free
            </Text>
          </View>

          {/* Quick Categories */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="mb-6 flex-row gap-2"
          >
            {['All', 'Grammar', 'Vocabulary', 'Spoken', 'Writing'].map((cat, index) => (
              <TouchableOpacity
                key={index}
                className={`px-4 py-2 rounded-full border ${
                  index === 0
                    ? 'bg-blue-600 border-blue-600'
                    : 'bg-slate-900 border-slate-800'
                }`}
              >
                <Text
                  className={`text-xs font-semibold ${
                    index === 0 ? 'text-white' : 'text-slate-400'
                  }`}
                >
                  {cat}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Notes List */}
          <View className="gap-4 pb-8">
            {NOTES_DATA.map((note) => (
              <View
                key={note.id}
                className="bg-slate-900 border border-slate-800 p-4 rounded-2xl flex-row items-center justify-between"
              >
                {/* Left Side: Icon & Details */}
                <View className="flex-row items-center flex-1 mr-3">
                  <View className="w-12 h-12 bg-blue-500/10 rounded-xl items-center justify-center mr-3">
                    <Text className="text-2xl">📄</Text>
                  </View>

                  <View className="flex-1">
                    <View className="flex-row items-center gap-2 mb-1">
                      <Text className="text-[10px] font-bold text-blue-400 bg-blue-500/20 px-2 py-0.5 rounded">
                        {note.category}
                      </Text>
                      <Text className="text-[10px] text-slate-400">
                        {note.size} • {note.downloads} downloads
                      </Text>
                    </View>

                    <Text
                      className="text-sm font-semibold text-white leading-5"
                      numberOfLines={2}
                    >
                      {note.title}
                    </Text>
                  </View>
                </View>

                {/* Right Side: Download/Buy Button */}
                <TouchableOpacity
                  className={`px-3 py-2 rounded-xl flex-row items-center gap-1 ${
                    note.isFree ? 'bg-blue-600' : 'bg-emerald-600'
                  }`}
                  onPress={() => handleDownload(note.fileUrl)}
                >
                  <Text className="text-white text-xs font-semibold">
                    {note.isFree ? '📥 PDF' : `🔓 ${note.price}`}
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>

        </ScrollView>
      </SafeAreaView>
    </View>
  );
}