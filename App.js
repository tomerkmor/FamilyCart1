import React, { useState, createContext, useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./Screens/HomeScreen";
import RecipesScreen from "./Screens/RecipesScreen";
import MyListScreen from "./Screens/MyListScreen";
import SettingsScreen from "./Screens/SettingsScreen";
import ManageExpense from "./Screens/ManageExpense";

const themes = {
  light: {
    headerBackground: "#ffffff",
    headerTintColor: "#222222",
    background: "#f5f5f5", // soft neutral grey for app body
    text: "#222222",
    statusBarStyle: "dark",
    tabBarActiveTintColor: "#007aff", // iOS blue
    tabBarBackground: "#ffffff",
  },
  dark: {
    headerBackground: "#1e1e1e",
    headerTintColor: "#ffffff",
    background: "#121212", // deep dark background
    text: "#ffffff",
    statusBarStyle: "light",
    tabBarActiveTintColor: "#f7bc0c", // warm yellow highlight
    tabBarBackground: "#1e1e1e",
  },
};

export const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [themeName, setThemeName] = useState("dark");
  const toggleTheme = () =>
    setThemeName(themeName === "dark" ? "light" : "dark");
  const theme = themes[themeName];

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, themeName }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Stack Navigation
const Stack = createNativeStackNavigator();

// Tabs Navigation
const BottomTabs = createBottomTabNavigator();

function AppOverviewTabs() {
  const { theme, toggleTheme, themeName } = useContext(ThemeContext);
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.headerBackground,
        },
        headerTintColor: theme.headerTintColor,
        tabBarStyle: { backgroundColor: theme.tabBarBackground },
        tabBarActiveTintColor: theme.tabBarActiveTintColor,
        tabBarInactiveTintColor: theme.text,
        headerTitleAlign: "center",
        contentStyle: { backgroundColor: theme.background },
      }}
    >
      <BottomTabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "רשימה משפחתית",
          tabBarLabel: "בית",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="bookmarks-outline" color={color} size={size} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Recipes"
        component={RecipesScreen}
        options={{
          title: "מתכונים שלי",
          tabBarLabel: "מתכונים",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book-outline" color={color} size={size} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="MyList"
        component={MyListScreen}
        options={{
          title: "הרשימות שלי",
          tabBarLabel: "רשימות",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list-outline" color={color} size={size} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: "הגדרות",
          tabBarLabel: "הגדרות",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" color={color} size={size} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  //const { theme, toggleTheme, themeName } = useContext(ThemeContext);
  return (
    <>
      <ThemeProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="HomePage"
              component={AppOverviewTabs}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="ManageExpense" component={ManageExpense} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
