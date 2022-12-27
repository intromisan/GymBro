import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import { store } from "./src/redux/store";
import Home from "./src/screens/Home";
import Settings from "./src/screens/Settings";
import Workouts from "./src/screens/Workouts";

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
                iconName = focused ? "home" : "ios-home-outline";
              } else if (route.name === "Workouts") {
                iconName = focused ? "barbell" : "barbell-outline";
              } else if (route.name === "Settings") {
                iconName = focused ? "ios-cog" : "ios-cog-outline";
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarStyle: { height: 80, paddingBottom: 20, paddingTop: 10 },
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Workouts" component={Workouts} />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
