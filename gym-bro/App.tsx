import "react-native-gesture-handler";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

import { store } from "./src/redux/store";
import Tabs from "./src/shared/navigation/Tabs";
import RootStackScreen from "./src/shared/navigation/RootStack";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStackScreen />
      </NavigationContainer>
    </Provider>
  );
}
