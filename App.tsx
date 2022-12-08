import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import { store } from "./src/redux/store";
import Home from "./src/screens/Home";
import Settings from "./src/screens/Settings";

type MaterialIconName = React.ComponentProps<typeof Ionicons>["name"];

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName!: MaterialIconName;

              if (route.name === "Home") {
                iconName = focused ? "ios-home" : "ios-home-outline";
              } else if (route.name === "Settings") {
                iconName = focused ? "ios-cog" : "ios-cog-outline";
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen name="Hello Serge!" component={Home} />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
