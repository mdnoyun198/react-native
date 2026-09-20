import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Linking,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// ভিডিও এবং প্লেলিস্ট ডাটা
const PLAYLIST_DATA = [
  {
    id: '1',
    title: 'Tense Masterclass: Basic to Advanced',
    duration: '45:20',
    instructor: 'Noyun',
    badge: 'Grammar Series',
    thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800',
    description:
      'এই ভিডিওতে আমরা Tense এর বেসিক থেকে এডভান্সড পর্যন্ত সব নিয়ম নিয়ে আলোচনা করেছি। ভর্তি পরীক্ষা বা একাডেমিক পরীক্ষার জন্য এই ক্লাসটি খুবই গুরুত্বপূর্ণ। সম্পূর্ণ ভিডিওটি মনোযোগ দিয়ে দেখুন।',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    id: '2',
    title: 'Right Form of Verbs - Rule 1 to 10',
    duration: '32:15',
    instructor: 'Noyun',
    badge: 'Grammar Series',
    thumbnail: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800',
    description:
      'Right Form of Verbs সহজে মনে রাখার ১০টি টেকনিক নিয়ে সাজানো হয়েছে আজকের টিউটোরিয়ালটি।',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    id: '3',
    title: 'Preposition Tricks for Admission Exam',
    duration: '28:40',
    instructor: 'Noyun',
    badge: 'Admission Special',
    thumbnail: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800',
    description:
      'Apt Prepositions দ্রুত মনে রাখার শর্টকাট ট্রিকস। এডমিশন পরীক্ষার্থীদের জন্য মাস্ট-ওয়াচ।',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
];

export default function HomeScreen() {
  const [activeVideo, setActiveVideo] = useState(PLAYLIST_DATA[0]);

  const openYouTube = (url: string) => {
    Linking.openURL(url).catch((err) =>
      console.error("Couldn't open URL", err)
    );
  };

  return (
    <View className="flex-1 ">
      <SafeAreaView className="flex-1 px-4">
        <ScrollView showsVerticalScrollIndicator={false}>
          
          {/* Main Video Player Card */}
          <View className="mt-2 mb-4">
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => openYouTube(activeVideo.youtubeUrl)}
              className="relative w-full h-52 bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 justify-center items-center"
            >
              <Image
                source={{ uri: activeVideo.thumbnail }}
                className="w-full h-full opacity-70"
              />
              
              {/* Overlay YouTube Play Button */}
              <View className="absolute bg-red-600/90 px-4 py-2 rounded-xl flex-row items-center gap-2">
                <Text className="text-white font-bold text-base">▶ Watch on</Text>
                <Text className="text-white font-black text-lg tracking-tighter">YouTube</Text>
              </View>

              <View className="absolute bottom-3 right-3 bg-black/80 px-2 py-0.5 rounded">
                <Text className="text-white text-[10px]">{activeVideo.duration}</Text>
              </View>
            </TouchableOpacity>

            {/* Video Title & Badges */}
            <Text className="text-xl font-bold text-white mt-3 mb-1">
              {activeVideo.title}
            </Text>

            <View className="flex-row items-center gap-2 mb-4">
              <Text className="text-xs text-slate-400">
                Instructor: <Text className="text-slate-200 font-medium">{activeVideo.instructor}</Text>
              </Text>
              <View className="bg-blue-900/60 border border-blue-700/50 px-2 py-0.5 rounded">
                <Text className="text-blue-400 text-[10px] font-semibold">
                  {activeVideo.badge}
                </Text>
              </View>
            </View>

            {/* Description Box */}
            <View className="bg-slate-900/80 border border-slate-800/80 rounded-2xl p-4">
              <Text className="text-xs text-slate-300 leading-5">
                {activeVideo.description}
              </Text>
            </View>
          </View>

          {/* Playlist Drawer Section */}
          <View className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden mb-8">
            <View className="p-4 border-b border-slate-800 bg-slate-900/50">
              <Text className="text-base font-bold text-white">
                Grammar Full Course
              </Text>
              <Text className="text-[11px] text-slate-400 mt-0.5">
                1/{PLAYLIST_DATA.length} Videos • Updated Today
              </Text>
            </View>

            {/* Playlist Items */}
            <View>
              {PLAYLIST_DATA.map((item, index) => {
                const isActive = item.id === activeVideo.id;
                return (
                  <TouchableOpacity
                    key={item.id}
                    onPress={() => setActiveVideo(item)}
                    className={`flex-row items-center p-4 border-b border-slate-800/50 ${
                      isActive ? 'bg-blue-950/40' : 'bg-transparent'
                    }`}
                  >
                    <View className="w-6 items-center justify-center mr-2">
                      {isActive ? (
                        <Text className="text-blue-500 text-xs">▶</Text>
                      ) : (
                        <Text className="text-slate-500 text-xs font-bold">{index + 1}</Text>
                      )}
                    </View>

                    <View className="flex-1 mr-2">
                      <Text
                        className={`text-xs font-semibold ${
                          isActive ? 'text-blue-400' : 'text-slate-200'
                        }`}
                        numberOfLines={1}
                      >
                        {item.title}
                      </Text>
                      <Text className="text-[10px] text-slate-500 mt-1">
                        {item.duration}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

        </ScrollView>
      </SafeAreaView>
    </View>
  );
}