import React from 'react';
import { ScrollView, View, TouchableOpacity, Image, Linking,Text } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Star,UserRound,Clock ,ShoppingCart} from 'lucide-react-native';

const COURSES = [
  {
    id: '1',
    title: 'English Fluency Masterclass: Zero to Hero',
    rating: 4.97,
    reviewsCount: 243,
    students: 4802,
    duration: '50h',
    originalPrice: '৳ 10,000',
    price: '৳ 5,000',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600',
  },
  {
    id: '2',
    title: 'IELTS Premium Preparation',
    rating: 4.9,
    reviewsCount: 91,
    students: 1250,
    duration: '25h',
    originalPrice: '৳ 13,000',
    price: '৳ 6,500',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600',
  },
  {
    id: '3',
    title: 'Grammar & Spoken English Essentials',
    rating: 4.85,
    reviewsCount: 150,
    students: 2100,
    duration: '35h',
    originalPrice: '৳ 8,000',
    price: '৳ 4,000',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600',
  },
];

// ফ্রি ইউটিউব ভিডিও ডাটা
const FREE_VIDEOS = [
  {
    id: '1',
    title: 'Basic Grammar Hacks for Beginners',
    duration: '15:20',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    id: '2',
    title: 'How to Speak English Fluently Without Hesitation',
    duration: '22:10',
    thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
];

export default function HomeScreen() {
  const openYouTube = (url: string) => {
    Linking.openURL(url).catch((err) =>
      console.error("Couldn't load page", err)
    );
  };

  return (
    <ThemedView className="flex-1">

      <ScrollView showsVerticalScrollIndicator={false} className='p-4'>



        {/* Course Cards */}
        <View className="gap-5 mb-8">
          {COURSES.map((course) => (
            <View
              key={course.id}
              className=" rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-700 "
            >
              {/* Course Image */}
              <View className="  w-full aspect-video">
                <Image source={{ uri: course.image }} className="w-full h-full" />
              </View>

              {/* Course Details */}
              <View className="p-4">
                {/* Rating & Reviews */}
                <View className="flex-row items-center mb-2 gap-1">
                  <ThemedText>{course.rating}</ThemedText>
                  <Star color='#facc15' size={18}/>
                  <ThemedText>({course.reviewsCount})</ThemedText>
                </View>

                {/* Course Title */}
                <ThemedText className="text-lg font-semibold mb-3 leading-6">
                  {course.title}
                </ThemedText>

                {/* Meta Info (Students & Duration) */}
                <View className="flex-row items-center gap-4 mb-4">
                  <ThemedText className="text-slate-400 text-xs">
                    <UserRound/> {course.students} students
                  </ThemedText>
                  <ThemedText className="text-slate-400 text-xs">
                    <Clock/> {course.duration}
                  </ThemedText>
                </View>

                {/* Price & Add to Cart Action */}
                <View className="flex-row items-center justify-between pt-3 border-t border-neutral-200 dark:border-neutral-700">
                  <View>
                    <ThemedText className="text-slate-400 text-sm line-through">
                      {course.originalPrice}
                    </ThemedText>
                    <ThemedText className="text-lg font-bold text-blue-500">
                      {course.price}
                    </ThemedText>
                  </View>

                  <TouchableOpacity className="bg-blue-600 px-5 py-3 rounded-lg flex-row items-center gap-1.5">
                    <ThemedText className="text-white text-xs"><ShoppingCart color='#fff'/></ThemedText>
                    <Text className="text-white  font-semibold">
                     Shop Now
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </View>



      </ScrollView>

    </ThemedView>
  );
}