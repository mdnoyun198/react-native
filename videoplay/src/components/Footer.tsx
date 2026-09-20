import React from 'react';
import { View, TextInput, TouchableOpacity,Text } from 'react-native';
import { Mail, Phone, Send, MapPin, Heart } from 'lucide-react-native';
import { ThemedText } from '@/components/themed-text';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <View className="lex-col gap-10 mb-5 mt-10 p-2">

            {/* 1. Brand Section */}
            <View className="flex-col gap-4">
                <View>
                    <ThemedText className="text-2xl font-bold text-blue-500">
                        English Learning
                    </ThemedText>
                    <ThemedText className="text-sm mt-1">
                        Your Ultimate Learning Destination
                    </ThemedText>
                </View>
                <ThemedText className="text-sm leading-relaxed">
                    Master English skills from Academic to Admission easily. Quality, style, and comfort in every lesson.
                </ThemedText>

                {/* Social Links (Text Based) */}
                <View className="flex-row gap-4 mt-2">
                    <TouchableOpacity className="w-10 h-10 rounded-full border border-blue-500 items-center justify-center">
                        <ThemedText className="font-bold text-sm text-blue-500">f</ThemedText>
                    </TouchableOpacity>
                    <TouchableOpacity className="w-10 h-10 rounded-full border border-blue-500 items-center justify-center">
                        <ThemedText className="font-bold text-sm text-blue-500">𝕏</ThemedText>
                    </TouchableOpacity>
                    <TouchableOpacity className="w-10 h-10 rounded-full border border-blue-500 items-center justify-center">
                        <ThemedText className="font-bold text-sm text-blue-500">IG</ThemedText>
                    </TouchableOpacity>
                    <TouchableOpacity className="w-10 h-10 rounded-full border border-blue-500 items-center justify-center">
                        <ThemedText className="font-bold text-sm text-blue-500">in</ThemedText>
                    </TouchableOpacity>
                </View>
            </View>

            {/* 4. Newsletter & Feedback Section */}
            <View className="flex-col gap-4">
                <ThemedText className="text-lg font-bold">Newsletter & Feedback</ThemedText>
                <ThemedText className="text-sm">
                    Subscribe to get special offers and latest updates, or share your feedback.
                </ThemedText>

                <View className="flex-col gap-3 mt-2">
                    {/* Inputs with structural styling only */}
                    <TextInput
                        placeholder="Your email"
                        className="w-full border border-gray-300 rounded-xl px-4 py-3.5 text-sm"
                    />
                    <TextInput
                        placeholder="Share your feedback or message..."
                        multiline={true}
                        numberOfLines={4}
                        textAlignVertical="top"
                        className="w-full border border-gray-300 rounded-xl px-4 py-3.5 text-sm min-h-[100px]"
                    />

                    {/* Submit Button */}
                    <TouchableOpacity
                        className="w-full bg-blue-500 rounded-xl px-4 py-3.5 flex-row items-center justify-center gap-2 mt-1"
                        activeOpacity={0.8}
                    >
                        <Send size={16} color="#ffffff" />
                        <Text className="text-white font-semibold">Subscribe & Send</Text>
                    </TouchableOpacity>
                </View>
            </View>



            {/* 3. Support Section */}
            <View className="flex-col gap-4">
                <ThemedText className="text-lg font-bold">Support</ThemedText>
                <View className="flex-col gap-4">
                    <TouchableOpacity className="flex-row items-start gap-3">
                        <Phone size={18} color="#3b82f6" className="mt-0.5" />
                        <View>
                            <ThemedText className="text-sm">+880 1XXX-XXXXXX</ThemedText>
                            <ThemedText className="text-xs mt-0.5">9AM - 10PM</ThemedText>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity className="flex-row items-start gap-3">
                        <Mail size={18} color="#3b82f6" className="mt-0.5" />
                        <View>
                            <ThemedText className="text-sm">support@englishlearning.com</ThemedText>
                            <ThemedText className="text-xs mt-0.5">We respond within 24h</ThemedText>
                        </View>
                    </TouchableOpacity>

                    <View className="flex-row items-start gap-3">
                        <MapPin size={18} color="#3b82f6" className="mt-0.5" />
                        <View>
                            <ThemedText className="text-sm">123 Education Street</ThemedText>
                            <ThemedText className="text-xs mt-0.5">Dhaka, Bangladesh</ThemedText>
                        </View>
                    </View>
                </View>
            </View>


            {/* 5. Bottom Copyright Section */}
            <View className="flex-col items-center gap-4">
                <ThemedText className="text-sm text-center">
                    © English Learning {currentYear} | All Rights Reserved
                </ThemedText>
                <View className="flex-row items-center justify-center">
                    <ThemedText className="text-sm">Developed with </ThemedText>
                    <Heart size={14} color="#3b82f6" className="mx-1" />
                    <ThemedText className="text-sm"> by </ThemedText>
                    <ThemedText className="text-sm font-bold text-blue-500">Team Mahal</ThemedText>
                </View>

                <View className="flex-row flex-wrap justify-center gap-x-6 gap-y-3 mt-2">
                    <TouchableOpacity>
                        <ThemedText className="text-sm">Privacy Policy</ThemedText>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <ThemedText className="text-sm">Terms & Conditions</ThemedText>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <ThemedText className="text-sm">Sitemap</ThemedText>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
}