import "react-native-gesture-handler";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

import { setupStore } from "./src/redux/store";
import RootStackScreen from "./src/shared/navigation/RootStack";

const store = setupStore();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStackScreen />
      </NavigationContainer>
    </Provider>
  );
}
