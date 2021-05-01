import React from "react";
import { Pressable, Text, View } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

function CustomDrawer(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{ backgroundColor: "black", padding: 15 }}>
        <View
          style={{
            flexDirection: "row",
            padding: 5,
          }}
        >
          <View
            style={{
              backgroundColor: "#eee",
              width: 50,
              height: 50,
              borderRadius: 25,
            }}
          />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ color: "white", fontSize: 24 }}>
              Sunil Yadahalli
            </Text>
            <Text style={{ color: "#eee" }}>5.00 *</Text>
          </View>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "#a5a5a5",
            borderTopWidth: 1,
            borderTopColor: "#a5a5a5",
            paddingVertical: 5,
            marginVertical: 10,
          }}
        >
          <Pressable>
            <Text style={{ color: "#dddddd", paddingVertical: 5 }}>
              Messages
            </Text>
          </Pressable>
        </View>
        <Pressable>
          <Text style={{ color: "#dddddd", paddingVertical: 5 }}>
            Do more with your account
          </Text>
        </Pressable>
        <Pressable>
          <Text style={{ color: "white", paddingVertical: 5 }}>
            Make money driving
          </Text>
        </Pressable>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

export default CustomDrawer;
