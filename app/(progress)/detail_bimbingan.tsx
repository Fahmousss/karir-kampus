import { View, Text, ScrollView, SafeAreaView, StatusBar } from "react-native";
import React from "react";
import { Button } from "~/components/ui/button";
import { router } from "expo-router";
import { ExpandLeftDouble } from "~/components/assets/ExpandLeftDouble";
import { Calendar } from "~/components/assets/Calendar";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { BimbinganCard } from "~/components/BimbinganCard";

export default function DetailBimbingan() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View
          className="rounded-b-[20px] px-10 overflow-hidden bg-[#3470A2] relative"
          style={{
            paddingTop:
              (StatusBar.currentHeight ? StatusBar.currentHeight : 40) + 30,
            paddingBottom: 32,
          }}
        >
          <View className="flex ">
            <Button
              onPress={() => {
                router.push("/progress");
              }}
              size={"icon"}
              className="p-7 rounded-full flex-none bg-[#FFC727]"
            >
              <ExpandLeftDouble />
            </Button>
            <View className="grow items-center">
              <View className=" bg-[#63ABE6] justify-center items-center w-[185px] h-[185px] rounded-full">
                <Ionicons name="calendar-outline" size={55} />
                <Text
                  className="text-2xl"
                  style={{
                    fontFamily: "Outfit_700Bold",
                  }}
                >
                  Bimbingan
                </Text>
                <Text
                  className="text-base opacity-50"
                  style={{
                    fontFamily: "Outfit_400Regular",
                  }}
                >
                  Laporan Kerja Praktik
                </Text>
              </View>
            </View>
          </View>
        </View>
        {/* Scrollable Content */}
        <ScrollView
          className="px-6"
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingVertical: 30 }}
        >
          <View className="gap-3">
            <View className="flex flex-row items-center gap-3">
              <BimbinganCard
                classname={"grow"}
                title={"Durasi"}
                icon={<Ionicons name="calendar-clear-outline" size={35} />}
              >
                <Text>1 Bulan</Text>
              </BimbinganCard>
              <BimbinganCard
                classname={"grow"}
                title={"Frekuensi"}
                icon={<Ionicons name="bar-chart-outline" size={35} />}
              >
                <Text>1 Bulan</Text>
              </BimbinganCard>
            </View>
            <View className="flex flex-row items-center gap-3">
              <BimbinganCard
                classname={"grow"}
                title={"Kategori"}
                icon={<AntDesign name="tago" size={35} />}
              >
                <Text>1 Bulan</Text>
              </BimbinganCard>
              <BimbinganCard
                classname={"grow"}
                title={"Halo"}
                icon={<Ionicons name="time-outline" size={35} />}
              >
                <Text>1 Bulan</Text>
              </BimbinganCard>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
