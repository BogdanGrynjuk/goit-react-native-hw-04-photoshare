import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

import { Feather } from '@expo/vector-icons';

import PostsScreen from "./Tabs/PostsScreen";
import ProfileScreen from "./Tabs/ProfileScreen";
import CreatePostsScreen from "./Tabs/CreatePostsScreen";


const Tabs = createBottomTabNavigator();

export default function Home() {
  const navigation = useNavigation();

  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 80,
          paddingTop: 10,
          paddingBottom: 25,
          backgroundColor: "#ffffff",
          shadowColor: "rgba(0, 0, 0, 0.3)",
          shadowOffset: "0px 0.5px 0px"
        },
        headerStyle: {
          backgroundColor: "#ffffff",
          height: 80,
          shadowColor: "rgba(0, 0, 0, 0.3)",
          shadowOffset: "0px 0.5px 0px"
        }
      }}
    >
      <Tabs.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          headerTitle: "Публікації",
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: "#212121",
            fontSize: 18,
            fontFamily: "Roboto-Medium",
            fontWeight: 500
          },
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 20 }}
              activeOpacity={0.8}
              onPress={() => navigation.navigate("Login")}
            >
              <Feather name="log-out" size={30} color="#BDBDBD" />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ focused, size, color }) => <Feather name="grid" size={size} color="#BDBDBD" />,
          tabBarItemStyle: {
            marginHorizontal: 30,
          },
          tabBarActiveTintColor: '#BDBDBD',
          tabBarInactiveTintColor: '#BDBDBD'
        }}
      />
      <Tabs.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        options={{
          headerTitle: "Створити публікацію",
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: "#212121",
            fontSize: 18,
            fontFamily: "Roboto-Medium",
            fontWeight: 500
          },
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginLeft: 20 }}
              activeOpacity={0.8}
              onPress={() => navigation.navigate("Posts")}
            >
              <Feather name="arrow-left" size={30} color="#BDBDBD" />              
            </TouchableOpacity>
          ),          
          tabBarIcon: ({ focused, size, color }) => <Feather name="plus" size={size} color="#FFFFFF" />,          
          tabBarItemStyle: {
            backgroundColor: '#FF6C00',
            marginHorizontal: 30,
            borderRadius: 50
          },
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => <Feather name="user" size={size} color="#BDBDBD" />,
          tabBarItemStyle: {
            marginHorizontal: 30,
          },
          tabBarActiveTintColor: '#BDBDBD',
          tabBarInactiveTintColor: '#BDBDBD',
        }}
      />
    </Tabs.Navigator>
  );
};