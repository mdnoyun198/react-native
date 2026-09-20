import { ScrollView, View, TouchableOpacity, Image, Linking, Text } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Video, Film, FileText, HelpCircle } from "lucide-react-native"
import Footer from '@/components/Footer';

const FREE_VIDEOS = [
  {
    id: '1',
    title: 'English Fluency Masterclass: Basic Grammar',
    duration: '15:20',
    thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    id: '2',
    title: 'IELTS Speaking Practice & Tips',
    duration: '22:10',
    thumbnail: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    id: '3',
    title: 'Daily Life Vocabulary & Phrases',
    duration: '10:45',
    thumbnail: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    id: '4',
    title: 'Pronunciation Improvement Tricks',
    duration: '18:05',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600',
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
    <ThemedView className="flex-1 px-4">

        <ScrollView showsVerticalScrollIndicator={false}>



          <View className="rounded-2xl flex py-4">
            <View>
              <ThemedText className="text-3xl font-bold">Welcome to</ThemedText>
              <Text className="text-3xl font-bold my-1 text-blue-500">
                English Learning
              </Text>
            </View>
          </View>






          {/* Features Grid */}
          <View className="flex-row justify-between gap-2">

            <View className="py-3 items-center gap-2 ">
              <Text >
                <Video color="#3b82f6" size={26} />
              </Text>
              <ThemedText className="text-center">Video Calss</ThemedText>
            </View>

            <View className="  rounded-xl p-3 items-center gap-2 ">
              <Text >
                <Film color="#a855f7" size={26} />
              </Text>
              <ThemedText className="text-center">Live Support</ThemedText>
            </View>

            <View className="  rounded-xl p-3 items-center gap-2 ">
              <Text >
                <FileText color="#10b981" size={26} />
              </Text>
              <ThemedText className="text-center">PDF Notes</ThemedText>
            </View>

            <View className="  rounded-xl p-3 items-center gap-2">
              <Text >
                <HelpCircle color="#f59e0b" size={26} />
              </Text>
              <ThemedText className="text-center">Chart Group</ThemedText>
            </View>

          </View>


          {/* Free YouTube Videos */}
          <View className="my-2">
            <ThemedText className="text-lg font-medium">
              Free Lessons
            </ThemedText>
          </View>

          <View className="gap-4">
            {FREE_VIDEOS.map((item) => (
              <TouchableOpacity
                key={item.id}
                className=" rounded-lg border border-neutral-200 dark:border-neutral-700 overflow-hidden"
                activeOpacity={0.8}
                onPress={() => openYouTube(item.youtubeUrl)}
              >
                <View className="relative w-full aspect-video justify-center items-center">
                  <Image
                    source={{ uri: item.thumbnail }}
                    className="w-full h-full"
                  />

                  <View className="absolute bottom-2 right-2  px-1.5 py-0.5 ">
                    <ThemedText className=" text-sm">
                      {item.duration}
                    </ThemedText>
                  </View>
                </View>

                <View className="p-4">
                  <ThemedText className="text-lg font-semibold mb-1" >
                    {item.title}
                  </ThemedText>
                  <ThemedText className="text-sm text-blue-500 font-medium">
                    Watch on YouTube →
                  </ThemedText>
                </View>
              </TouchableOpacity>
            ))}
          </View>




<Footer/>



        </ScrollView>
    </ThemedView>
  );
}