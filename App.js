import React, { useState, createContext, useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";

import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./Screens/HomeScreen";
import RecipesScreen from "./Screens/RecipesScreen";
import MyListScreen from "./Screens/MyListScreen";
import SettingsScreen from "./Screens/SettingsScreen";
import ManageProduct from "./Components/ManageProduct";

import { Themes } from "./constants/styles";
import IconButton from "./Components/UI/IconButton";
import ProductsContextProvider from "./store/products-context";

export const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [themeName, setThemeName] = useState("dark");

  const setThemeByName = (name) => {
    setThemeName(name);
  };

  const theme = Themes[themeName];

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme: setThemeByName, themeName }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

// Stack Navigation
const Stack = createNativeStackNavigator();

// Tabs Navigation
const BottomTabs = createBottomTabNavigator();

function AppOverviewTabs() {
  const navigation = useNavigation();
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
          headerRight: () => (
            <IconButton
              icon="add"
              color={theme.headerTintColor}
              size={36}
              onPress={() => {
                navigation.navigate("ManageProduct");
              }}
            />
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
  return (
    <ThemeProvider>
      <ProductsContextProvider>
        <ThemedApp />
      </ProductsContextProvider>
    </ThemeProvider>
  );
}

function ThemedApp() {
  const { theme, toggleTheme, themeName } = useContext(ThemeContext);
  return (
    <>
      <StatusBar style={theme.statusBarStyle} />
      <ThemeProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="HomePage"
              component={AppOverviewTabs}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ManageProduct"
              component={ManageProduct}
              options={{
                presentation: "modal",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
