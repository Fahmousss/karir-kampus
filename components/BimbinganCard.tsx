import { View, Text } from "react-native";
import React from "react";

export function BimbinganCard({
  title,
  icon,
  children,
  classname = "",
}: {
  title: String;
  icon: any;
  children: React.ReactNode;
  classname: String;
}) {
  return (
    <View className={`p-4 border border-[#E0E0E0] rounded-xl ${classname}`}>
      <Text className="">{title}</Text>
      <View className="flex flex-row">
        <View>{icon}</View>
        <View>{children}</View>
      </View>
    </View>
  );
}
